/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import styled from 'styled-components'
import { Flex } from '../components/atoms/primitives/global'
import { ContentBody } from '../components/atoms/components'
import { MiddleText, MiddleTextSemiBold } from '../components/atoms/primitives/font'
import { Button } from '../components/molecules'
import { useMediaQuery } from 'react-responsive'
export const ModalWindowContext = createContext(undefined)

const Body = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 99999;
  left: 0px;
  top: 0px;
  background: var(--color-shadow);
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px;
  }
`

export const ModalWindowProvider = ({ children }) => {
  const [show, setShow] = useState(null)

  const isSmall = useMediaQuery({ query: '(max-width: 500px)' })

  const showModalWindow = data => 
    new Promise(resolve => {
        setShow({
          ...data,
          buttons: data.buttons.map(button => ({
            ...button,
            onTap: () => {
              resolve(button.response)
              setShow(null)
            }
          }))
        })
    })

  return (
    <ModalWindowContext.Provider value={showModalWindow}> 
      {
        show 
          ? (
            <Body>
              <Flex justify='center' align='center' style={{ height: '100%' }}>
                <ContentBody 
                  style={{ 
                    background: 'var(--color-base-light-gray)', 
                    maxWidth: isSmall ? '300px' : '500px', 
                    width: 'fit-content', 
                    minWidth: '200px',
                    boxSizing: 'border-box' 
                  }}
                >
                  <Flex gap='12px' align='flex-start'>
                    <Flex gap='6px' align='flex-start'>
                      {
                        show.title
                          ? (
                            <MiddleTextSemiBold>{show.title}</MiddleTextSemiBold>
                          )
                          : null
                      }
                      {
                        show.description 
                          ? (
                            <MiddleText style={{ textAlign: 'start' }}>{show.description}</MiddleText>  
                          )
                          : null
                      }
                    </Flex>
                    {show.children}
                    <Flex justify='flex-end' direction='row' gap='12px' style={{ width: '100%' }}>
                      {
                        show.buttons.map((button, key) => (
                          <Button key={key} onTap={button.onTap}>{button.label}</Button>
                        ))
                      }
                    </Flex>
                  </Flex>
                </ContentBody>
              </Flex>
            </Body>
          )
          : (
            null
          )
      }
      {children}
    </ModalWindowContext.Provider>
  )
}
