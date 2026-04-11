import { useContext, useEffect, useRef, useState } from 'react'
import { COLORS, ICONS, OPACITY_COLORS } from '../assets/defined'
import { BigTextExtraBold, InlineMiddleTextBold, MiddleText, MiddleTextBold, MiddleTextSemiBold, SmallTextBold, SmallTextSemiBold } from './atoms/primitives/font'
import { IconBig, IconNormal, IconSmall } from './atoms/primitives/icon'
import { BigButtonBody, ButtonBody, CircleButton, CircleDotSelect, ContentBody, ExampleVoteButtonBody, InputBody, LoaderBody, ProgressBody, ProgressLine, RadioSelectedElement, RadioTextOverflow, SmallTextFakeLink, VoteButtonBody } from './atoms/components'
import { Flex } from './atoms/primitives/global'
import { ModalWindowContext } from '../contexts/modal-window'
import { Link } from 'react-router'
import getPercent from '../lib/percent'
import { LanguageContext } from '../contexts/language'

import iconHint from './../assets/icons/small/hint.svg?react'
import iconWarning from './../assets/icons/warning.svg?react'
import iconLoader from './../assets/icons/loader.svg?react'
import iconGhost from './../assets/icons/ghost.svg?react'

export const Button = ({ children, onTap, icon, preIcon, style, disabled }) => {
  return (
    <ButtonBody
      disabled={disabled}
      onTap={onTap} 
      style={{
        cursor: disabled 
                  ? 'not-allowed'
                  : 'pointer', 
        background: disabled 
                      ? `var(--color-base-light-black)`
                      : `var(--color-base-main-black)`,
        ...style
      }}
      whileTap={
        disabled
          ? {}
          : {
            scale: 0.9
          }
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {
        preIcon && (
          <IconNormal src={preIcon} />
        )
      }
      {
        children 
          ? (
              <MiddleTextBold 
                style={
                  style?.color 
                    ? { 
                      color: style?.color 
                    }
                    : {
                      color: 'var(--color-base-main)'
                    }
                }
              >{children}</MiddleTextBold>
          )
          : null
      }
      {
        icon && (
          <IconNormal 
            src={icon}
            style={
              style?.color 
                  ? { 
                    fill: style?.color 
                  }
                  : {}
            }  
          />
        )
      }
    </ButtonBody>
  )
}

export const BigButton = ({ children, onTap }) => {
  return (
    <BigButtonBody
      onTap={onTap}
      whileTap={{
        scale: 0.9
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <BigTextExtraBold style={{ color: 'var(--color-base-main)' }}>{children}</BigTextExtraBold>
    </BigButtonBody>
  )
}

export const Radio = ({ items, value, onChange }) => {
  const firstElemRef = useRef()
      , lastElemRef = useRef()
  
  const [firstElemWidth, setFirstElemWidth] = useState(0)
      , [lastElemWidth, setLastElemWidth] = useState(0)
      , [showSlider, setShowSlider] = useState(false)

  useEffect(() => {
    const node = firstElemRef.current

    if (node) {
      setFirstElemWidth(parseFloat(window.getComputedStyle(node).width))
    }
  }, [items, firstElemRef])

  useEffect(() => {
    const node = lastElemRef.current

    if (node) {
      setLastElemWidth(parseFloat(window.getComputedStyle(node).width))
    }
  }, [items, lastElemRef])

  useEffect(() => {
    if (firstElemWidth && lastElemWidth) {
      const timeId = setTimeout(() => {
        setShowSlider(true)
      }, 1000)

      return () => clearTimeout(timeId)
    }
  }, [firstElemWidth, lastElemWidth])

  return (
    <InputBody>
      <RadioSelectedElement
        style={{ opacity: showSlider ? 1 : 0 }}
        initial={{ 
          x: value === 0 ? '0px' : `${firstElemWidth + 24}px`
        }}
        animate={{ 
          x: value === 0 ? '0px' : `${firstElemWidth + 24}px`
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <RadioTextOverflow
          initial={{ width: value === 0 ? `${firstElemWidth}px` : `${lastElemWidth}px` }}
          animate={{ width: value === 0 ? `${firstElemWidth}px` : `${lastElemWidth}px` }}
          style={{ opacity: 0 }}
        >
        </RadioTextOverflow>
      </RadioSelectedElement>
      <RadioTextOverflow ref={firstElemRef} onTap={() => onChange(0)}>
        <MiddleTextBold 
          initial={{ color: showSlider ? value === 0 ? 'var(--color-base-main)' : 'var(--color-base-main-black)' : 'var(--color-base-main-black)' }}
          animate={{ color: showSlider ? value === 0 ? 'var(--color-base-main)' : 'var(--color-base-main-black)' : 'var(--color-base-main-black)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >{items[0]}</MiddleTextBold>
      </RadioTextOverflow>
      <RadioTextOverflow ref={lastElemRef} onTap={() => onChange(1)}>
        <MiddleTextBold 
          initial={{ color: showSlider ? value === 1 ? 'var(--color-base-main)' : 'var(--color-base-main-black)' : 'var(--color-base-main-black)' }}
          animate={{ color: showSlider ? value === 1 ? 'var(--color-base-main)' : 'var(--color-base-main-black)' : 'var(--color-base-main-black)' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >{items[1]}</MiddleTextBold>
      </RadioTextOverflow>
    </InputBody>
  )
}

export const IconPicker = ({ value, onChange }) => {

  return (
    <InputBody style={{ gap: '12px', flexWrap: 'wrap' }}>
      {
        ICONS.map(
          (icon, key) => (
            <IconNormal 
              onTap={() => onChange(key)}
              key={key} 
              src={icon} 
              style={{ 
                cursor: 'pointer'
              }} 
              initial={{ fill: 'var(--color-base-dark-gray)' }}
              animate={value === key ? { fill: 'var(--color-base-main-black)' } : { fill: 'var(--color-base-dark-gray)'  }}
              exit={value !== key ? { fill: 'var(--color-base-main-black)' } : { fill: 'var(--color-base-dark-gray)'  }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          )
        )
      }
    </InputBody>
  )
}

export const ColorPicker = ({ value, onChange }) => {

  return (
    <InputBody style={{ gap: '12px', flexWrap: 'wrap' }}>
      {
        COLORS.map(
          (color, key) => (
            <CircleButton onTap={() => onChange(key)} key={key} style={{ cursor: 'pointer', background: `var(${color})` }}>
              <CircleDotSelect
                initial={{ scale: 0, background: COLORS.length - 1 === key ? 'var(--color-base-main)' : null }}
                animate={value === key ? { scale: 1 } : { scale: 0 }}
                exit={value !== key ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </CircleButton>  
          )
        )
      }
    </InputBody>
  )
}

export const VoteButton = ({ colorIndex, iconIndex, onTap }) => {
  return (
    <VoteButtonBody
      onTap={onTap}
      whileTap={{
        scale: 0.9
      }}
      animate={{
        boxShadow: `0 0 4px 0 var(${COLORS[colorIndex]})`,
        background: `var(${OPACITY_COLORS[colorIndex]})`
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
        <IconBig
          src={ICONS[iconIndex]} 
          animate={{
            fill: `var(${COLORS[colorIndex]})`
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
    </VoteButtonBody>
  )
}

export const SmallVoteIcon = ({ colorIndex, iconIndex }) => {
  return (
    <VoteButtonBody
      style={{ 
        padding: '6px',
        cursor: 'default'
      }}
      animate={{
        background: `var(${OPACITY_COLORS[colorIndex]})`
      }}
    >
        <IconNormal
          src={ICONS[iconIndex]} 
          animate={{
            fill: `var(${COLORS[colorIndex]})`
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
    </VoteButtonBody>
  )
}

export const ExampleVoteButton = ({ colorIndex, iconIndex }) => {
  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)

  return (
    <ExampleVoteButtonBody>
      <Flex gap='6px'>
        <VoteButton colorIndex={colorIndex} iconIndex={iconIndex} />
        <Flex gap='2px'>
          <MiddleTextBold style={{ userSelect: 'none' }}>10 {lang.data.votes}</MiddleTextBold>
          <Flex gap='2px' direction='row'>
            <SmallTextBold style={{ userSelect: 'none' }}>50%</SmallTextBold>
            <IconSmall 
              onTap={() => 
                showModalWindow({
                  title: lang.data.hint_title_hint,
                  description: lang.data.hint_percent,
                  buttons: [{ 
                    label: 'Ok',
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
    </ExampleVoteButtonBody>
  )
}

export const Warning = ({ children }) => {
  return (
    <ContentBody style={{ background: 'linear-gradient(45deg, var(--color-base-start-warning-bg) 0%, var(--color-base-end-warning-bg) 100%)' }}>
      <Flex justify='center' direction='row' gap='6px'>
        <MiddleTextSemiBold style={{ color: 'var(--color-base-warning-elems)', textAlign: 'start' }}>
          {children}
        </MiddleTextSemiBold>
        <IconBig src={iconWarning} />
      </Flex>
    </ContentBody>
  )
}

export const StasLink = () => (
  <Link 
    to='https://prohetamine.ru/stas' 
    style={{ 
      textDecoration: 'underline', 
      color: 'var(--color-base-main-black)'
    }}>
    <InlineMiddleTextBold>$STAS</InlineMiddleTextBold>
  </Link>
)

export const VoteProgress = ({ colorIndex, winCount, count }) => {
  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)

  return (
    <ProgressBody style={{ background: `var(${OPACITY_COLORS[colorIndex]})` }}>
      <ProgressLine style={{ background: `var(${COLORS[colorIndex]})`, width: `${getPercent(winCount, count)}%` }}>
        <SmallTextSemiBold style={{ userSelect: 'none', color: 'var(--color-base-main)' }}>{count > winCount ? winCount : count}/{winCount}</SmallTextSemiBold>
        <IconSmall 
          onTap={() => 
            showModalWindow({
              title: lang.data.hint_title_hint,
              description: lang.data.hint_win,
              buttons: [{ 
                label: lang.data.hint_btn_ok,
                response: true
              }]
            })
          } 
          src={iconHint} 
          style={{ 
            cursor: 'pointer',
            fill: 'var(--color-base-main)'
          }}
        />
      </ProgressLine>
    </ProgressBody>
  )
}

export const Tag = ({ icon, label, hint, onTap }) => {
  const showModalWindow = useContext(ModalWindowContext)
      , lang = useContext(LanguageContext)
  
  const handleIcon = () => 
    showModalWindow({
      title: lang.data.hint_title_hint,
      description: hint,
      buttons: [{ 
        label: lang.data.hint_btn_ok,
        response: true
      }]
    })

  return (
    <Flex direction='row' gap='2px'>
      <IconSmall
        style={{ cursor: 'pointer' }}
        propagate={{ tap: false }}
        onTap={handleIcon}
        src={icon}
      />
      <SmallTextFakeLink 
        propagate={{ tap: false }}
        onTap={onTap || handleIcon}
      >{label}</SmallTextFakeLink>
    </Flex>
  )
}

export const Loader = () => (
    <LoaderBody>
        <IconBig
            style={{
                transformOrigin: 'center center',
                animation: 'compass-search 2.5s ease-in-out infinite'
            }}
            src={iconLoader}
        />
    </LoaderBody>
)

export const Empty = () => {
  const lang = useContext(LanguageContext)

  return (
    <LoaderBody>
      <Flex gap='6px'>
        <IconBig src={iconGhost} />
        <MiddleTextBold>{lang.data.empty}</MiddleTextBold>
      </Flex>
    </LoaderBody>
  )
}