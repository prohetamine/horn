import { useNavigate, useParams } from 'react-router'
import { decode } from '../lib/encode-decode'
import { useStasPay } from 'stas-pay'
import * as Redstone from '@prohetamine/redstone'
import { useMediaQuery } from 'react-responsive'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/language'
import { ModalWindowContext } from '../contexts/modal-window'
import { Button, Loader, StasLink } from '../components/molecules'
import { Flex, PageContentBody } from '../components/atoms/primitives/global'
import { BigTextBold, MiddleText } from '../components/atoms/primitives/font'

import iconSelect from './../assets/icons/select.svg?react'

const Cert = () => {
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)
        , navigate = useNavigate()
        , isSmall = useMediaQuery({ query: '(max-width: 500px)' })

    const { dataBase64 } = useParams()
        , [id, stasCount, isOneNetwork] = decode(dataBase64)
        
    const { switchNetwork, networks, chainId, isConnected, address } = Redstone.useApp()    
        , cert = Redstone.useCertificate(`counter-${id}`, { 
            load: !!id && !!address,
            paymentAddress: address || '',
        })
        , confirm = useStasPay()

    const handleCert = async () => {
        if (cert.value === 0) {
            const isConfirmPayCommission = await showModalWindow({
                title: lang.data.hint_title_cert,
                description: lang.data.hint_cert_commission,
                buttons: [{
                    label: lang.data.hint_btn_ok,
                    response: true
                }, {
                    label: lang.data.hint_btn_cancel,
                    response: false
                }]
            })

            if (!isConfirmPayCommission) {
                return
            }
        }

        if (!isConnected) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_wallet_not_connect,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        const _cert = await cert.recheckValue()
        if (!_cert) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_cert_recheck_error,
                buttons: [{
                    label: lang.data.hint_btn_ok,
                    response: true
                }, {
                    label: lang.data.hint_btn_cancel,
                    response: true
                }]
            })
            return
        }

        if (_cert.value === 0) {
            const commission = await cert.getCommission()

            const isConfirm = await confirm(commission)
            if (!isConfirm) {
                await showModalWindow({
                    title: lang.data.hint_title_cert,
                    description: lang.data.hint_cert_cancel,
                    buttons: [{
                        label: lang.data.hint_btn_close,
                        response: true
                    }]
                })
                return
            }

            const isCertified = await cert.updateValue(stasCount)

            if (!isCertified) {
                await showModalWindow({
                    title: lang.data.hint_title_error,
                    description: lang.data.hint_cert_error,
                    buttons: [{
                        label: lang.data.hint_btn_ok,
                        response: true
                    }]
                })
                return
            }
        }

        const toDashboad = await showModalWindow({
            title: lang.data.hint_title_hint,
            description: lang.data.hint_cert_end_to_dashboard,
            buttons: [{
                label: lang.data.hint_btn_ok,
                response: true
            }, {
                label: lang.data.hint_btn_cancel,
                response: false
            }]
        })

        if (toDashboad) {
            navigate('/dashboard')
        }
    }

    return (
        <PageContentBody>
            <Flex gap='24px'>
                <BigTextBold>{lang.data.cert_poll}</BigTextBold>
                {
                    cert.status === 'success'
                        ? (
                                <>
                                    {
                                        !isOneNetwork
                                            ? (
                                                <>
                                                    <MiddleText>{lang.data.cert_select_network[0]} <StasLink /> {lang.data.cert_select_network[1]}</MiddleText>
                                                    <Flex gap='12px' style={isSmall ? { flexDirection: 'column', width: '100%', maxWidth: '302px' } : {}}>
                                                        {
                                                            networks.map((network, key) => (
                                                                <Button 
                                                                    key={key} 
                                                                    onTap={() => switchNetwork(network)} 
                                                                    icon={network.id === chainId ? iconSelect : null}
                                                                    preIcon={network.icon}
                                                                    style={
                                                                        isSmall 
                                                                            ? { 
                                                                                width: '100%', 
                                                                                maxWidth: '302px', 
                                                                                justifyContent: 'center',
                                                                                background: network.bgColor,
                                                                                color: network.color
                                                                            }
                                                                            : {
                                                                                background: network.bgColor,
                                                                                color: network.color
                                                                            }
                                                                    }
                                                                >
                                                                    {network.name}
                                                                </Button>
                                                            ))
                                                        }
                                                    </Flex>
                                                </>
                                            )
                                            : null
                                    }
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.partner_cert_commission}</MiddleText>                    
                                        <Button onTap={() => handleCert()}>{lang.data.cert_btn}</Button>
                                    </Flex>
                                </>
                        )
                        : (
                            <Loader />
                        )
                }
            </Flex>
        </PageContentBody>
    )
}

export default Cert