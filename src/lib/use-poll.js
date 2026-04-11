/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import * as Redstone from '@prohetamine/redstone'
import { cache, useContext, useEffect, useState } from 'react'
import validatePoll from './validate-poll'
import { LanguageContext } from '../contexts/language'
import { ModalWindowContext } from '../contexts/modal-window'
import { useLocation, useNavigate, useParams } from 'react-router'
import { decode } from './encode-decode'

const usePoll = () => {
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)
        , location = useLocation()
        , navigate = useNavigate()
        , { dataBase64 } = useParams()

    const back = location.search.replace('?back=', '')
        , isBack = !!location.search.match(/\?back=/)
 
    const [poll, setPoll] = useState(null)
        , [pollData, setPollData] = useState({
            address: '',
            index: 0, 
            chainId: 0,
            copyId: 0
        })

    const blockchainPoll = Redstone.useReadListItem('polls', { 
        index: pollData.index, 
        chainId: pollData.chainId 
    }, {
        self: true, 
        selfRead: true, 
        watch: false, 
        once: true,
        copyId: pollData.copyId,
        address: pollData.address,
        cache: 60 * 1000 * 10
    })

    useEffect(() => {
        if (dataBase64 && location.pathname.match('/poll/')) {
            try {
                const [address, index, chainId, copyId] = decode(dataBase64)
                setPollData({
                    address,
                    chainId,
                    index,
                    copyId
                })
            } catch (err) {
                const timeId = setTimeout(() => {
                    showModalWindow({
                        title: lang.data.hint_title_error,
                        description: lang.data.hint_global_error,
                        buttons: [{ 
                            label: lang.data.hint_btn_ok,
                            response: true
                        }]
                    }).then(() => {
                        navigate(isBack ? back : '/')
                    })
                }, 100)

                return () => clearTimeout(timeId)
            }
        }
    }, [dataBase64, location.pathname, lang.data.hint_btn_error, lang.data.hint_global_error, lang.data.hint_title_error, lang.data.hint_btn_ok, navigate, back, isBack])

    useEffect(() => {
        if (dataBase64 && location.pathname.match('/preview/')) {
            try {
                setPoll({
                    ...pollData,
                    ...decode(dataBase64)
                })
            } catch (err) {
                const timeId = setTimeout(() => {
                    showModalWindow({
                        title: lang.data.hint_title_error,
                        description: lang.data.hint_global_error,
                        buttons: [{ 
                            label: lang.data.hint_btn_ok,
                            response: true
                        }]
                    }).then(() => {
                        navigate(isBack ? back : '/')
                    })
                }, 100)

                return () => clearTimeout(timeId)
            }
        }
    }, [dataBase64, location.pathname, lang.data.hint_btn_error, lang.data.hint_global_error, lang.data.hint_title_error, lang.data.hint_btn_ok, navigate, back, isBack, pollData.address, pollData.chainId])

    useEffect(() => {
        if (!poll) return

        const timeId = setTimeout(() => {
            const pollValid = validatePoll(poll) 

            if (pollValid === true) return
        
            showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_global_error,
                buttons: [{ 
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            }).then(() => {
                navigate(isBack ? back : '/')
            })
        }, 100)

        return () => clearTimeout(timeId)
    }, [poll, lang.data.hint_btn_error, lang.data.hint_global_error, lang.data.hint_btn_ok, lang.data.hint_title_error, navigate, back, isBack])

    useEffect(() => {
        if (!(blockchainPoll?.value?.text && location.pathname.match('/poll/'))) return 

        setPoll({
            ...pollData,
            ...JSON.parse(blockchainPoll.value.text)
        })
    }, [blockchainPoll?.value?.text, location.pathname, pollData.address, pollData.chainId])

    if (!poll) {
        return null
    }

    const pollValid = validatePoll(poll) 

    if (pollValid !== true) {
        return null
    }

    return poll
}

export default usePoll