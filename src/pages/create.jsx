/* eslint-disable react-hooks/refs */
import useLocalStorageState from 'use-local-storage-state'
import { useNavigate } from 'react-router'
import { useContext } from 'react'
import { Button, ColorPicker, ExampleVoteButton, IconPicker, Loader, Radio, StasLink, Warning } from '../components/molecules'
import * as Redstone from '@prohetamine/redstone'
import { useMediaQuery } from 'react-responsive'
import { LanguageContext } from '../contexts/language'
import { COLORS, ICONS } from '../assets/defined'
import { BigTextBold, InlineMiddleTextBold, MiddleText } from '../components/atoms/primitives/font'
import { Input, Textarea } from '../components/atoms/components'
import { Flex, Lines, PageContentBody } from '../components/atoms/primitives/global'
import { ModalWindowContext } from '../contexts/modal-window'
import validatePoll from '../lib/validate-poll'
import { encode } from '../lib/encode-decode'
import useId from '../lib/use-id'

import iconAdd from './../assets/icons/add.svg?react'
import iconRemove from './../assets/icons/remove.svg?react'
import iconHorn from './../assets/icons/horn.svg?react'
import iconPreview from './../assets/icons/preview.svg?react'

const variantDefault = {
    title: '',
    iconIndex: parseInt(Math.random() * ICONS.length),
    colorIndex: parseInt(Math.random() * COLORS.length)
}

const Create = () => {
    const lang = useContext(LanguageContext)
        , showModalWindow = useContext(ModalWindowContext)
        , navigate = useNavigate()
        , isSmall = useMediaQuery({ query: '(max-width: 500px)' })

    const [id, setId]                       = useId()
        , [title, setTitle]                 = useLocalStorageState('poll-title', { defaultValue: '' })
        , [source, setSource]               = useLocalStorageState('poll-source', { defaultValue: '' })
        , [description, setDescription]     = useLocalStorageState('poll-description', { defaultValue: '' })
        , [isPay, setPay]                   = useLocalStorageState('poll-isPay', { defaultValue: false })
        , [isOneNetwork, setOneNetwork]     = useLocalStorageState('poll-isOneNetwork', { defaultValue: false })
        , [stasCount, setStasCount]         = useLocalStorageState('poll-stasCount', { defaultValue: 1100 })
        , [isUnique, setUnique]             = useLocalStorageState('poll-isUnique', { defaultValue: true })
        , [isPoll, setPoll]                 = useLocalStorageState('poll-isPoll', { defaultValue: true })
        , [winCount, setWinCount]           = useLocalStorageState('poll-winCount', { defaultValue: '' })
        , [variants, setVariants]           = useLocalStorageState('variants', { defaultValue: [variantDefault] })

    const copyId = Redstone.useCounter('polls-pages', { self: true, load: true, watch: false, cache: 60 * 1000 * 10 })
        , polls = Redstone.useList('polls', { copyId: copyId.value.count, self: true, selfRead: true, once: true, load: false, watch: false })
        , { isConnected } = Redstone.useApp()
        , commission = Redstone.useCommission()

    const realStasCount = stasCount - commission.value.owner

    const formData = { title, source, description, isPay, stasCount: realStasCount, isUnique, isPoll, winCount, variants, isOneNetwork, id }

    const pollValid = validatePoll(formData)
        , isAllowPublish = pollValid === true

    const handlePublish = async () => {
        if (!isAllowPublish) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data[pollValid],
                buttons: [{
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
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

        const isCreatedPoll = await polls.addValue(
            JSON.stringify(formData)
        )

        if (!isCreatedPoll) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data.hint_create_poll_error,
                buttons: [{
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }

        setId(null)
        setTitle('')
        setSource('')
        setDescription('')
        setOneNetwork(false)
        setStasCount(100)
        setUnique(true)
        setPoll(true)
        setWinCount('')
        setVariants([variantDefault])

        if (isPay) {
            setPay(false)
            navigate(`/cert/${encode([id, realStasCount, isOneNetwork])}?back=/dashboard`)
            return
        }

        navigate('/dashboard')
    }

    const handlePreview = async () => {
        if (!isAllowPublish) {
            await showModalWindow({
                title: lang.data.hint_title_error,
                description: lang.data[pollValid],
                buttons: [{
                    label: lang.data.hint_btn_ok,
                    response: true
                }]
            })
            return
        }
        
        navigate(`/preview/${encode(formData)}?back=/create`)
    }

    return (
        <PageContentBody>
            <Flex gap='48px'>
                {
                    copyId.status === 'success' && commission.status === 'success'
                        ? (
                            <>
                                <Flex gap='24px'>
                                    <BigTextBold>{lang.data.create}</BigTextBold>
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.information_poll}</MiddleText>
                                        <Input 
                                            placeholder={lang.data.title}
                                            value={title}
                                            onChange={({ target: { value } }) => setTitle(value)}
                                        />
                                        <Input 
                                            placeholder={lang.data.link_source}
                                            value={source}
                                            onChange={({ target: { value } }) => setSource(value)}
                                        />
                                        <Textarea 
                                            placeholder={lang.data.description}
                                            value={description}
                                            onChange={({ target: { value } }) => setDescription(value)} 
                                        />
                                    </Flex>
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.pay_information_poll[0]} <StasLink /> {lang.data.pay_information_poll[1]}</MiddleText>
                                        <Radio 
                                            items={[lang.data.paid_vote_btn, lang.data.free_vote_btn]} 
                                            value={isPay ? 0 : 1} 
                                            onChange={value => setPay(value ? false : true)} 
                                        />
                                    </Flex>
                                    {
                                        isPay 
                                            ? (
                                                <Flex gap='12px'>
                                                    <MiddleText>
                                                        {lang.data.pay_count_information_poll[0]} <StasLink />{lang.data.pay_count_information_poll[1]} <InlineMiddleTextBold>{lang.data.pay_count_information_poll[2](commission.value.owner)}</InlineMiddleTextBold> {lang.data.pay_count_information_poll[3]} <InlineMiddleTextBold>{lang.data.pay_count_information_poll[4](stasCount)}</InlineMiddleTextBold>{lang.data.pay_count_information_poll[5]} <InlineMiddleTextBold>{Math.abs(stasCount - commission.value.owner) === stasCount - commission.value.owner ? stasCount - commission.value.owner : 0}</InlineMiddleTextBold>
                                                    </MiddleText>
                                                    <Input 
                                                        value={stasCount}
                                                        onChange={
                                                            ({ target: { value } }) => 
                                                                setStasCount(value)
                                                        }
                                                        onBlur={
                                                            ({ target: { value } }) => 
                                                                setStasCount(
                                                                    (parseInt(value) === Math.abs(value - 0) && parseInt(value) > commission.value.owner && parseInt(value) < 1000000000)
                                                                        ? value 
                                                                        : commission.value.owner + 1
                                                                )
                                                        }
                                                    />
                                                </Flex>
                                            )
                                            : null
                                    }
                                    {
                                        isPay 
                                            ? (
                                                <Flex gap='12px'>
                                                    <MiddleText>{lang.data.multi_networks_information_poll[0]} <InlineMiddleTextBold>{lang.data.multi_networks_information_poll[1]}</InlineMiddleTextBold> <StasLink /> <InlineMiddleTextBold>{lang.data.multi_networks_information_poll[2]}</InlineMiddleTextBold></MiddleText>
                                                    <Radio 
                                                        items={[lang.data.one_btn, lang.data.multi_btn]} 
                                                        value={isOneNetwork ? 0 : 1} 
                                                        onChange={value => setOneNetwork(value ? false : true)} 
                                                    />
                                                </Flex>
                                            )
                                            : null
                                    }
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.unique_information_poll}</MiddleText>
                                        <Radio 
                                            items={[lang.data.once_btn, lang.data.unlimited_btn]} 
                                            value={isUnique ? 0 : 1} 
                                            onChange={value => {
                                                setUnique(value ? false : true)
                                                if (value === 1) {
                                                    setPoll(value ? false : true)
                                                }
                                            }} 
                                        />
                                    </Flex>
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.quiz_information_poll}</MiddleText>
                                        <Radio 
                                            items={[lang.data.poll_btn, lang.data.quiz_btn]} 
                                            value={isPoll ? 0 : 1} 
                                            onChange={value => {
                                                setPoll(value ? false : true)
                                                if (value === 0) {
                                                   setUnique(true)
                                                }
                                            }} 
                                        />
                                    </Flex>
                                    <Flex gap='12px'>
                                        <MiddleText>{lang.data.win_information[0]} <InlineMiddleTextBold>{lang.data.win_information[1]}</InlineMiddleTextBold></MiddleText>
                                        <Input 
                                            placeholder='1000...'
                                            value={winCount}
                                            onChange={({ target: { value } }) => setWinCount(value)} 
                                        />
                                    </Flex>
                                </Flex>
                                <Flex gap='24px' style={{ width: '100%' }}>
                                    <BigTextBold>{lang.data.variants}</BigTextBold>
                                    <>
                                    {
                                        variants.map(
                                            (variant, key) => (
                                                <Flex gap='24px' key={key}>
                                                    <Flex gap='24px'>
                                                        <Flex gap='12px'>
                                                            <MiddleText>{lang.data.preview_voting_button}</MiddleText>
                                                            <ExampleVoteButton 
                                                                colorIndex={variant.colorIndex} 
                                                                iconIndex={variant.iconIndex} 
                                                            />
                                                        </Flex>    
                                                        <Flex gap='12px'>
                                                            <MiddleText>{lang.data.customize_button}</MiddleText>
                                                            <Input 
                                                                value={variant.title} 
                                                                onChange={
                                                                    ({ target: { value } }) => 
                                                                        setVariants(
                                                                            variants => 
                                                                                variants.map(
                                                                                    (variant, i) => 
                                                                                        i === key 
                                                                                            ? ({ 
                                                                                                ...variant, 
                                                                                                title: value 
                                                                                            })
                                                                                            : variant
                                                                                )
                                                                        )
                                                                } 
                                                                placeholder={lang.data.title}
                                                            />
                                                            <IconPicker 
                                                                value={variant.iconIndex} 
                                                                onChange={
                                                                    index => 
                                                                        setVariants(
                                                                            variants => 
                                                                                variants.map(
                                                                                    (variant, i) => 
                                                                                        i === key 
                                                                                            ? ({ 
                                                                                                ...variant, 
                                                                                                iconIndex: index 
                                                                                            })
                                                                                            : variant
                                                                                )
                                                                        )
                                                                } 
                                                            />
                                                            <ColorPicker 
                                                                value={variant.colorIndex} 
                                                                onChange={
                                                                    index => 
                                                                        setVariants(
                                                                            variants => 
                                                                                variants.map(
                                                                                    (variant, i) => 
                                                                                        i === key 
                                                                                            ? ({ 
                                                                                                ...variant, 
                                                                                                colorIndex: index 
                                                                                            })
                                                                                            : variant
                                                                                )
                                                                        )
                                                                } 
                                                            />
                                                        </Flex>    
                                                    </Flex>
                                                    { 
                                                        variants.length - 1 !== key
                                                            ? (
                                                                <Lines key={`${key}-1`} />
                                                            )
                                                            : (
                                                                null
                                                            )
                                                    }
                                                </Flex>
                                                    
                                            )
                                        )
                                    }
                                    </>
                                    <Flex gap='12px' style={{ flexDirection: 'row' }}>
                                        <Button 
                                            disabled={variants.length < 2}
                                            onTap={() => {
                                                if (variants.length > 1) {
                                                    setVariants(
                                                        variants => variants.filter((_, i) => i !== variants.length - 1)
                                                    )
                                                }
                                            }} 
                                            icon={iconRemove}
                                        />
                                        <Button 
                                            disabled={variants.length > 9}
                                            onTap={() => {
                                                if (variants.length < 10) {
                                                    setVariants(
                                                        variants => [
                                                            ...variants,
                                                            {
                                                                title: '',
                                                                iconIndex: parseInt(Math.random() * ICONS.length),
                                                                colorIndex: parseInt(Math.random() * COLORS.length)
                                                            }
                                                        ]
                                                    )
                                                }
                                            }} 
                                            icon={iconAdd}
                                        />
                                    </Flex>
                                </Flex>
                                <Flex gap='24px'>
                                    <Warning>{lang.data.warning_information}</Warning>
                                    <Flex gap='12px' style={isSmall ? { flexDirection: 'column', width: '100%', maxWidth: '302px' } : { flexDirection: 'row' }}>
                                        <Button 
                                            disabled={!isAllowPublish}
                                            style={isSmall ? { width: '100%', maxWidth: '302px', justifyContent: 'center' } : {}}
                                            onTap={handlePreview} 
                                            icon={iconPreview}
                                        >{lang.data.preview_btn}</Button>
                                        <Button 
                                            disabled={!isAllowPublish}
                                            style={isSmall ? { width: '100%', maxWidth: '302px', justifyContent: 'center' } : {}}
                                            onTap={handlePublish} 
                                            icon={iconHorn}
                                        >{lang.data.publish_btn}</Button>
                                    </Flex>
                                </Flex>
                            </>
                        )
                        : (
                            <Flex gap='24px'>
                                <BigTextBold>{lang.data.create}</BigTextBold>
                                <Loader />
                            </Flex>
                        )
                }
            </Flex>
        </PageContentBody>
    )
}

export default Create