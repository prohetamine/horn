import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IconNormal } from './atoms/primitives/icon'
import { MiddleText } from './atoms/primitives/font'

import iconDotVertical from './../assets/icons/dot-vertical.svg?react'
import iconPoll from './../assets/icons/poll.svg?react'
import iconLink from './../assets/icons/link.svg?react'
import iconGraph from './../assets/icons/graph.svg?react'
import iconCert from './../assets/icons/cert.svg?react'
import iconHidden from './../assets/icons/hide.svg?react'

const ContextMenuContainer = styled(motion.div)`
    width: 24px;
    height: 24px;
    position: relative;
`

const ContextMenuBody = styled(motion.div)`
    border: 1px solid var(--color-base-main-black);
    border-radius: 14px;
    width: 200px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.25);
    background: var(--color-base-main-black);
    position: absolute;
    right: 0px;
    z-index: 99;
`

const ContextMenuButton = styled(motion.div)`
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
`

const ContextMenu = ({ isCert, onOpen, onCopyLink, onShow, onCertification, onHidden }) => {
    const [show, setShow] = useState(false)

    return (
        <ContextMenuContainer 
            tabIndex={0}
            onFocus={() => setShow(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setShow(false)
                }
            }}
        >
            <IconNormal
                src={iconDotVertical}
                style={{
                    fill: 'var(--color-base-dark-gray)',
                    cursor: 'pointer'
                }}
            />
            {
                show
                    ? (
                        <ContextMenuBody>
                            <ContextMenuButton 
                                onTap={() => {
                                    setShow(false)
                                    onOpen()
                                }}
                            >
                                <MiddleText style={{ color: 'var(--color-base-main)' }}>Open</MiddleText>
                                <IconNormal src={iconPoll} />
                            </ContextMenuButton>
                            <ContextMenuButton
                                onTap={() => {
                                    setShow(false)
                                    onCopyLink()
                                }}
                            >
                                <MiddleText style={{ color: 'var(--color-base-main)' }}>Copy link</MiddleText>
                                <IconNormal src={iconLink} />
                            </ContextMenuButton>
                            <ContextMenuButton
                                onTap={() => {
                                    setShow(false)
                                    onShow()
                                }}
                            >
                                <MiddleText style={{ color: 'var(--color-base-main)' }}>Show info</MiddleText>
                                <IconNormal src={iconGraph} />
                            </ContextMenuButton>
                            {
                                isCert
                                    ? (
                                        <ContextMenuButton
                                            onTap={() => {
                                                setShow(false)
                                                onCertification()
                                            }}
                                        >
                                            <MiddleText style={{ color: 'var(--color-base-main)' }}>Certification</MiddleText>
                                            <IconNormal src={iconCert} />
                                        </ContextMenuButton>
                                    )
                                    : null
                            }
                            <ContextMenuButton
                               onTap={() => {
                                    setShow(false)
                                    onHidden()
                                }} 
                            >
                                <MiddleText style={{ color: 'var(--color-base-main)' }}>Hidden</MiddleText>
                                <IconNormal src={iconHidden} />
                            </ContextMenuButton>
                        </ContextMenuBody>
                    )
                    : null
            }
        </ContextMenuContainer>
    )
}

export default ContextMenu