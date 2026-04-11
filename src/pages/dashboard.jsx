/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import copy from 'copy-to-clipboard'
import * as Redstone from '@prohetamine/redstone'
import { PageContentBody, Flex } from '../components/atoms/primitives/global'
import { BigTextBold, MiddleText, MiddleTextBold, MiddleTextSemiBold } from '../components/atoms/primitives/font'
import { encode } from '../lib/encode-decode'
import { ContentBody } from '../components/atoms/components'
import { Tag, SmallVoteIcon, Button, Loader, Empty } from '../components/molecules'
import { LanguageContext } from '../contexts/language'
import { ModalWindowContext } from '../contexts/modal-window'
import ContextMenu from '../components/context-menu'

import iconHeart from './../assets/icons/small/heart.svg?react'
import iconStas from './../assets/icons/small/stas.svg?react'
import iconArrowLeft from './../assets/icons/arrow-left.svg?react'
import iconArrowRight from './../assets/icons/arrow-right.svg?react'
import iconAlert from './../assets/icons/small/alert.svg?react'
import iconProfile from './../assets/icons/small/profile.svg?react'
import iconSmallLink from './../assets/icons/small/link.svg?react'

const PollVariantItem = ({ variant: { colorIndex, iconIndex, title }, poll, index }) => {
    const lang = useContext(LanguageContext)

    const counter = Redstone.useCounter(`counter-${poll?.id}`, { 
        copyId: index, 
        stas: poll?.isPay, 
        once: poll?.isUnique,
        cache: 10 * 60000,
        interval: 10 * 60000,
        load: !!poll?.id,
        watch: !!poll?.id
    })

    const stopPoll = Redstone.useNote(`stop-poll-${poll?.id}`, {
        self: true, 
        selfRead: true, 
        once: true,
        cache: 60 * 1000 * 10,
        load: !!poll?.id
    })
    
    const stopPollItems = stopPoll.value.split(',')
    const isStop = stopPoll.status === 'success' && stopPoll.value !== ''

    const isFullLoad = stopPoll.status === 'success' && counter.status === 'success'

    return (
        <Flex gap='12px' direction='row' align='flex-start' style={{  width: '100%' }}>
            <SmallVoteIcon 
                colorIndex={colorIndex} 
                iconIndex={iconIndex} 
            />
            <Flex gap='6px' align='flex-start' style={{ padding: '6px 0px 0px 0px', width: '100%' }}>
                <MiddleTextBold 
                    style={{ 
                        containerType: 'inline-size',
                        textAlign: 'start',
                        width: '100%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                >{title}</MiddleTextBold>
                <Flex direction='row' gap='12px'>
                    <Tag 
                        label={isFullLoad ? `${(isStop ? stopPollItems[index] : counter.value.count)} ${lang.data.votes}` : `${lang.data.loading}...`} 
                        icon={iconHeart} 
                        hint={lang.data.hint_tag_vote} 
                    />
                    {
                        poll?.isPay
                            ? (
                                <Tag 
                                    label={isFullLoad ? `${(isStop ? stopPollItems[index] : counter.value.count) * parseInt(poll?.stasCount)} $STAS` : `${lang.data.loading}...`} 
                                    icon={iconStas} 
                                    hint={lang.data.hint_tag_stas}
                                />
                            )
                            : null
                    }
                </Flex> 
            </Flex>
        </Flex>
    )
}

const PollItem = ({ index, chainId, address, data: poll, copyId, onHidden }) => {
    const [show, setShow] = useState(false)
        , { chainId: _chainId } = Redstone.useApp()
   
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)
        , navigate = useNavigate()

    const { title, description, variants, id, stasCount, isOneNetwork, isPay } = poll

    return (
            <ContentBody 
                style={{ 
                    background: 'var(--color-base-light-gray)',
                    width: '100%',
                    boxSizing: 'border-box' 
                }}
            >
                <Flex 
                    gap='6px' 
                    direction='row' 
                    align='flex-start' 
                >
                    <Flex 
                        gap='12px' 
                        align='flex-start'
                        style={{
                            width: '100%'
                        }}
                    >
                        <Flex 
                            gap='6px' 
                            align='flex-start' 
                            style={{
                                width: '100%'
                            }}
                        >
                            <MiddleTextSemiBold 
                                propagate={{ tap: false }}
                                onTap={() => navigate(`/poll/${encode([address, index, chainId, copyId])}?back=/dashboard/${copyId}`)} 
                                style={{ 
                                    containerType: 'inline-size',
                                    textAlign: 'start', 
                                    cursor: 'pointer',
                                    width: '100%',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    wordBreak: 'break-word' 
                                }}
                            >
                                {title}
                            </MiddleTextSemiBold>
                            <MiddleText 
                                onTap={() => setShow(s => !s)}
                                style={{ 
                                    textAlign: 'start', 
                                    wordBreak: 'break-word' 
                                }}
                            >{show ? description : (d => d.length > 40 ? `${d.slice(0, 37)}...` : d)(description)}
                            </MiddleText>
                            <Flex direction='row' gap='12px' style={{ flexWrap: 'wrap' }}>
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
                                {
                                    (poll?.isUnique || poll?.isPay)
                                        ? (
                                            <>
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
                                                                hint={lang.data.hint_tag_fee_vote_dashboard(poll?.stasCount)}
                                                            />
                                                        )
                                                        : null
                                                }
                                            </>    
                                        )
                                        : null
                                } 
                            </Flex>
                        </Flex>
                        {
                            show 
                                ? (
                                    variants.map((variant, key) => (
                                        <PollVariantItem 
                                            variant={variant} 
                                            poll={poll} 
                                            index={key} 
                                            key={key} 
                                        />
                                    ))
                                )
                                : null
                        }
                    </Flex>
                    <ContextMenu 
                        isCert={isPay}
                        onOpen={() => navigate(`/poll/${encode([address, index, chainId, copyId])}?back=/dashboard/${copyId}`)}
                        onCopyLink={() => copy(window.location.origin+`/horn/poll/${encode([poll.address, poll.index, poll.chainId, poll.copyId])}`)}
                        onShow={() => setShow(s => !s)}
                        onCertification={() => navigate(`/cert/${encode([id, stasCount, isOneNetwork])}?back=/dashboard/${copyId}`)}
                        onHidden={() => onHidden()}
                    />
                </Flex>
            </ContentBody>
        )
}

const Dashboard = () => {
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)

    const location = useLocation()
        , navigate = useNavigate()

    const urlPage = parseInt(`${location.pathname.match(/\d+/gi)}`)

    const copyId = Redstone.useCounter('polls-pages', { self: true, load: true, watch: false, cache: 60 * 1000 * 10 })
        , [page, setPage] = useState(false)
        , polls = Redstone.useList('polls', { copyId: page, self: true, selfRead: true, once: true, load: true, watch: false, cache: 60 * 1000 * 10 })
        , hiddenPollIds = Redstone.useList('polls-hidden', { copyId: copyId.value.count, self: true, once: true, load: true, watch: false, cache: 60 * 1000 * 10 })

    useEffect(() => {
        if (copyId.status === 'success') {
            setPage(
                Number.isNaN(urlPage)
                    ? copyId.value.count
                    : urlPage
            )
        }
    }, [copyId.value.count, copyId.status, urlPage])

    useEffect(() => {
        if (copyId.status === 'success' && urlPage !== page && page !== false) {
            const timeId = setTimeout(() => {
                navigate(`/dashboard/${page}`)
            }, 100)

            return () => clearTimeout(timeId)
        }
    }, [copyId.status, page, urlPage, navigate])

    const items = useMemo(() => 
        polls.value
            .map(poll => ({
                ...poll,
                data: JSON.parse(poll.text)
            }))
            .filter(
                poll =>
                    !hiddenPollIds.value.find(
                        deletePollId => deletePollId.text === poll.data.id
                    )
            )
    , [polls.value, hiddenPollIds.value]);

    return (
        <PageContentBody>
            <Flex gap='24px'>
                <BigTextBold>{lang.data.dashboard}</BigTextBold>
                {
                    copyId.status === 'success' && polls.status === 'success' && hiddenPollIds.status === 'success'
                        ? (
                            <Flex gap='12px' style={{ width: '100%' }}>
                                {
                                    items.length > 0
                                        ? (
                                            items
                                                .sort((a, b) => b.timestamp - a.timestamp)
                                                .map((poll, key) => (
                                                    <PollItem 
                                                        key={key}
                                                        copyId={page}
                                                        {...poll} 
                                                        onHidden={() => {
                                                            hiddenPollIds.addValue(poll.data.id)
                                                        }}
                                                    />
                                                ))
                                        )
                                    : (
                                        <Empty />
                                    )
                                }
                            </Flex>
                        )
                        : (
                            <Loader />
                        )
                }
                {
                    copyId.status === 'success' && (copyId.value.count !== 0 || items.length > 9) && page !== false
                        ? (
                            <Flex gap='12px' direction='row'>
                                <Button 
                                    style={{
                                        fill: 'var(--color-base-main)'
                                    }}
                                    disabled={page < 1} 
                                    onTap={() => page < 1 ? null : setPage(p => p - 1)} 
                                    icon={iconArrowLeft} 
                                />
                                <MiddleTextBold>{page}</MiddleTextBold>  
                                <Button
                                    style={{
                                        fill: 'var(--color-base-main)'
                                    }}
                                    disabled={page === copyId.value.count && items.length < 9}
                                    onTap={async () => {
                                        if (page === copyId.value.count && items.length < 9) return
                                         
                                        if (copyId.value.count === page) {
                                            const isAddNewPage = await showModalWindow({
                                                title: lang.data.hint_title_confirm,
                                                description: lang.data.hint_new_page,
                                                buttons: [{
                                                    label: lang.data.hint_btn_ok,
                                                    response: true
                                                }, {
                                                    label: lang.data.hint_btn_cancel,
                                                    response: false
                                                }]
                                            })

                                            if (isAddNewPage) {
                                                await copyId.updateValue()
                                                setPage(p => p + 1)
                                            }
                                            return
                                        }
                                        
                                        setPage(p => p + 1)
                                    }}
                                    icon={iconArrowRight}
                                />
                            </Flex>
                        )
                        : null
                }
            </Flex>
        </PageContentBody>
    ) 
}

export default Dashboard