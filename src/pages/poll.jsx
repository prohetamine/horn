/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useStasPay } from 'stas-pay'
import { useLocation, useNavigate } from 'react-router'
import copy from 'copy-to-clipboard'
import * as Redstone from '@prohetamine/redstone'
import { BigTextBold, MiddleText, MiddleTextBold, SmallTextBold } from '../components/atoms/primitives/font'
import { PageContentBody, Flex } from '../components/atoms/primitives/global'
import { IconSmall } from '../components/atoms/primitives/icon'
import { ModalWindowContext } from '../contexts/modal-window'
import { LanguageContext } from '../contexts/language'
import usePoll from '../lib/use-poll'
import { Button, Tag, VoteProgress, SmallVoteIcon, VoteButton, Loader } from '../components/molecules'
import getPercent from '../lib/percent'
import { encode } from '../lib/encode-decode'

import iconLink from './../assets/icons/link.svg?react'
import iconAlert from './../assets/icons/small/alert.svg?react'
import iconProfile from './../assets/icons/small/profile.svg?react'
import iconWallet from './../assets/icons/small/wallet.svg?react'
import iconSmallLink from './../assets/icons/small/link.svg?react'
import iconHint from './../assets/icons/small/hint.svg?react'
import iconStop from './../assets/icons/close-square.svg?react'

const Poll = () => {
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)
        , isSmall = useMediaQuery({ query: '(max-width: 500px)' })
        , navigate = useNavigate()
        , location = useLocation()

    const isPreview = !!location.pathname.match(/preview/)

    const confirm = useStasPay()
        , { isConnected, address, networks, chainId } = Redstone.useApp()
        , poll = usePoll()

    const ownerExplorer = `${networks.find(({ id }) => id === chainId).blockExplorers.default.url}/address/${poll?.address}`

    const cert = Redstone.useCertificate(`counter-${poll?.id}`, { load: !!poll?.id, paymentAddress: poll?.address || '' })
        , commission = Redstone.useCommission()

    const stopPoll = Redstone.useNote(`stop-poll-${poll?.id}`, {
        self: true, 
        selfRead: true, 
        address: poll?.address, 
        once: true,
        cache: 60 * 1000 * 10,
        load: !!poll?.id
    })

    const variantValues = Array(10).fill(true).map(
        (_, copyId) => 
            Redstone.useCounter(`counter-${poll?.id}`, { 
                copyId, 
                stas: poll?.isPay, 
                paymentAddress: poll?.address || '',
                once: poll?.isUnique,
                cache: 60 * 1000 * 10,
                interval: 60 * 1000 * 10,
                load: !!poll?.id,
                watch: !!poll?.id
            })
    )

    const stopPollItems = stopPoll.value.split(',')

    const isStop = stopPoll.status === 'success' && stopPoll.value !== ''
        , stopPollValues = (
            isStop 
                ? variantValues
                    .map((_, i) => parseInt(stopPollItems[i]) || 0)
                    .map(v => v > 1000000000 ? 1000000000 : v)
                : []
        ).map(count => ({ value: { count } }))

    const isFullLoad = (
        cert.status === 'success' && 
        stopPoll.status === 'success' && 
        !!poll?.id
    )

    const _variantValues = (isStop ? stopPollValues : variantValues)
        , maxCount = _variantValues.reduce((ctx, { value: { count } }) => ctx + count, 0)
        , winVariant = _variantValues.slice().sort((a, b) => b.value.count - a.value.count)[0]
        , winVariantIndex = _variantValues.findIndex(variant => JSON.stringify(variant) === JSON.stringify(winVariant))
        , isVoted = !!variantValues.find(variant => variant.value.voted)

    const handleVote = async key => {
        if (!isFullLoad) return
        
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

        if (isStop) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_not_voted_stop,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        if (isPreview) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_not_voted_preview,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        if (cert.value === 0 && poll.isPay) {
            const isCert = await showModalWindow({
                title: lang.data.hint_title_error,
                description: poll.isOneNetwork
                                ? lang.data.not_voted_one_network_error
                                : lang.data.not_cert_error,
                buttons: poll.isOneNetwork
                            ? address === poll.address && poll.chainId === chainId && isConnected
                                ? [
                                    { 
                                        label: lang.data.hint_btn_ok,
                                        response: true
                                    },
                                    { 
                                        label: lang.data.hint_btn_close,
                                        response: false
                                    }
                                ]
                                : [{ 
                                    label: lang.data.hint_btn_close,
                                    response: false
                                }]
                            : [{ 
                                    label: lang.data.hint_btn_close,
                                    response: false
                                }]
                })

            if (isCert) {
                navigate(`/cert/${encode([poll.id, poll.stasCount, poll.isOneNetwork])}`)
            }
            return
        }

        const counter = variantValues[key]

        if (counter.value.voted) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_you_voted_variant,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        if (isVoted && poll.isPoll) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_you_voted,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        const commission = await counter.getCommission()
            , isConfirm = await confirm(commission)

        if (isConfirm) {
            const isUpdate = await counter.updateValue()
            if (!isUpdate) {
                await showModalWindow({
                    title: lang.data.hint_title_error,
                    description: lang.data.hint_cancel_vote,
                    buttons: [{ 
                        label: lang.data.hint_btn_ok,
                        response: true
                    }]
                })
            }
        }
    }

    return (
        <PageContentBody>
            {
                isFullLoad
                    ? (
                        <Flex gap='48px'>
                            <Flex gap='24px'>
                                <BigTextBold
                                    style={{
                                        wordBreak: 'break-word' 
                                    }}
                                >{poll.title}</BigTextBold>
                                <Flex gap='12px'>
                                    <MiddleText
                                        style={{
                                            maxWidth: isSmall ? '300px' : '460px',
                                            overflowWrap: 'break-word',
                                            whiteSpace: 'pre-line',
                                            flexWrap: 'wrap'
                                        }}
                                    >{poll.description}</MiddleText>
                                    <Flex direction='row' gap='12px'>
                                        {
                                            poll?.source 
                                                ? (
                                                    <Tag 
                                                        icon={iconSmallLink} 
                                                        label={lang.data.tag_source_link}
                                                        onTap={async () => {
                                                            const isOpenLink = await showModalWindow({
                                                                title: lang.data.hint_title_confirm,
                                                                description: lang.data.hint_open_source(poll?.source),
                                                                buttons: [{
                                                                    label: lang.data.hint_btn_yes,
                                                                    response: true
                                                                }, {
                                                                    label: lang.data.hint_btn_no,
                                                                    response: false
                                                                }]
                                                            })

                                                            if (isOpenLink) {
                                                                window.open(poll?.source, '_blank')
                                                            }
                                                        }}
                                                    />
                                                )
                                                : null
                                        }
                                        <Tag
                                            icon={iconWallet} 
                                            label={lang.data.tag_owner_poll} 
                                            hint={lang.data.hint_tag_owner_poll}
                                            onTap={async () => {
                                               window.open(ownerExplorer, '_blank')
                                            }}
                                        />
                                    </Flex>
                                    {
                                        (poll?.isUnique || poll?.isPay)
                                            ? (
                                                <Flex direction='row' gap='12px'>
                                                    {
                                                        poll?.isUnique
                                                            ? (
                                                                <Tag 
                                                                    icon={iconProfile}
                                                                    label={lang.data.tag_once_vote} 
                                                                    hint={lang.data.hint_tag_once_vote}
                                                                />
                                                            )
                                                            : null
                                                    }
                                                    {
                                                        poll?.isPay
                                                            ? (
                                                                <Tag 
                                                                    icon={iconAlert} 
                                                                    label={lang.data.tag_fee_vote} 
                                                                    hint={lang.data.hint_tag_fee_vote(commission.value.owner + poll?.stasCount)}
                                                                />
                                                            )
                                                            : null
                                                    }
                                                </Flex> 
                                            )
                                            : null
                                    }
                                </Flex>
                            </Flex>
                            <Flex gap='24px'>
                                <Flex gap='32px' direction='row' justify='center' style={{ flexWrap: 'wrap' }}>
                                    {
                                        poll.variants.map(({ colorIndex, iconIndex }, key) => (
                                            <Flex gap='6px' key={key}>
                                                <VoteButton 
                                                    onTap={() => 
                                                        handleVote(key)
                                                    }
                                                    colorIndex={colorIndex} 
                                                    iconIndex={iconIndex} 
                                                />
                                                <Flex gap='2px'>
                                                    <MiddleTextBold style={{ userSelect: 'none' }}>{_variantValues[key].value.count} {lang.data.votes}</MiddleTextBold>
                                                    <Flex gap='2px' direction='row'>
                                                        <SmallTextBold style={{ userSelect: 'none' }}>{getPercent(maxCount, _variantValues[key].value.count)}%</SmallTextBold>
                                                        <IconSmall 
                                                            onTap={() => 
                                                                showModalWindow({
                                                                    title: lang.data.hint_title_hint,
                                                                    description: lang.data.hint_percent,
                                                                    buttons: [{ 
                                                                        label: lang.data.hint_btn_ok,
                                                                        response: true
                                                                    }]
                                                                })
                                                            } 
                                                            src={iconHint} 
                                                            style={{ 
                                                                cursor: 'pointer',
                                                                fill: 'var(--color-base-light-black)'
                                                            }}
                                                        />
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        ))
                                    }
                                </Flex>
                                {
                                    poll.winCount 
                                        ? (
                                            <VoteProgress 
                                                colorIndex={poll.variants[winVariantIndex]?.colorIndex} 
                                                count={_variantValues[winVariantIndex]?.value?.count} 
                                                winCount={poll.winCount} 
                                            />
                                        )
                                        : null
                                }
                                <Flex gap='12px' style={{ width: '100%', maxWidth: '320px' }} align='flex-start'>
                                    {
                                        poll.variants.map(({ colorIndex, iconIndex, title }, key) => (
                                            <Flex key={key} gap='12px' direction='row' align='flex-start'>
                                                <SmallVoteIcon 
                                                    colorIndex={colorIndex} 
                                                    iconIndex={iconIndex} 
                                                />
                                                <Flex style={{ padding: '6px 0px 0px 0px' }}>
                                                    <MiddleTextBold style={{ textAlign: 'start' }}>{title}</MiddleTextBold>
                                                </Flex>
                                            </Flex>
                                        ))
                                    }
                                </Flex>
                            </Flex>
                            <Flex gap='12px'>
                                <Button
                                    style={isSmall ? { width: '100%', maxWidth: '302px', justifyContent: 'center' } : {}}
                                    onTap={async () => {
                                        if (isPreview) {
                                            await showModalWindow({
                                                title: lang.data.hint_title_error,
                                                description: lang.data.hint_not_voted_preview,
                                                buttons: [{ 
                                                    label: lang.data.hint_btn_ok,
                                                    response: true
                                                }]
                                            })
                                            return
                                        }

                                        copy(window.location.origin+`/horn/poll/${encode([poll.address, poll.index, poll.chainId, poll.copyId])}`)
                                    }} 
                                    icon={iconLink}
                                >{lang.data.copy_link}</Button>
                                {
                                    isConnected && poll?.address === address && !isPreview && isFullLoad && (stopPoll.status === 'success' && stopPoll.value === '')
                                        ? (
                                            <Button
                                                style={isSmall ? { width: '100%', maxWidth: '302px', justifyContent: 'center' } : {}}
                                                onTap={async () => {
                                                    const isStopVoting = await showModalWindow({
                                                        title: lang.data.hint_title_confirm,
                                                        description: lang.data.hint_stop_voting_poll,
                                                        buttons: [{ 
                                                            label: lang.data.hint_btn_yes,
                                                            response: true
                                                        }, { 
                                                            label: lang.data.hint_btn_no,
                                                            response: false
                                                        }]
                                                    })
                                                    
                                                    if (isStopVoting) {
                                                        const isStopped = await stopPoll.updateValue(
                                                            _variantValues.map(variant => variant.value.count).join(',')
                                                        )

                                                        if (!isStopped) {
                                                            await showModalWindow({
                                                                title: lang.data.hint_title_error,
                                                                description: lang.data.hint_not_stop_voted,
                                                                buttons: [{ 
                                                                    label: lang.data.hint_btn_ok,
                                                                    response: true
                                                                }]
                                                            })
                                                        }
                                                    }
                                                }} 
                                                icon={iconStop}
                                            >{lang.data.stop_poll}</Button>
                                        )
                                        : null
                                }
                            </Flex>
                        </Flex>
                    )
                    : (
                        <Loader />
                    )
            }
        </PageContentBody>
    )
}

export default Poll