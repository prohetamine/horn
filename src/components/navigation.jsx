import * as Redstone from '@prohetamine/redstone'
import styled from 'styled-components'
import { useLocation, useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { IconNormal } from './atoms/primitives/icon'

import iconHome from './../assets/icons/home.svg?react'
import iconLeft from './../assets/icons/arrow-left.svg?react'
import iconWork from './../assets/icons/work.svg?react'
import iconPlus from './../assets/icons/plus.svg?react'
import iconWallet from './../assets/icons/wallet.svg?react'

const IconButton = styled(motion.div)`
  padding: 12px;
  display: flex;
  cursor: pointer;
`

const MenuLine = styled.div`
  border-radius: 100px;
  width: 1px;
  height: 24px;
  background: var(--color-base-light-black);
`

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 14px;
  background: var(--color-base-main-black);
`

const MenuActiveLine = styled(motion.div)`
  border-radius: 100px;
  width: 24px;
  height: 2px;
  background: var(--color-base-main);
  position: absolute;
  bottom: 8px;
`

const MenuTrack = styled.div`
  position: relative;
  display: flex;
`

const Navigation = () => {
  const { open, isConnected } = Redstone.useApp()

  const location = useLocation()
      , navigate = useNavigate()

  const back = location.search.replace('?back=', '')
      , isBack = location.search.match(/\?back=/)

  return (
    <MenuContainer>
      {
        location.pathname.match(/\/(poll|preview|cert)\//) 
          ? (
                <IconButton onTap={() => navigate(isBack ? back : '/')}>
                  <IconNormal
                    src={isBack ? iconLeft : iconHome}
                    style={{
                      fill: 'var(--color-base-gray)'
                    }}
                    whileHover={{
                      fill: 'var(--color-base-main)'
                    }}
                    animate={{
                      fill: location.pathname === '/' 
                              ? 'var(--color-base-main)' 
                              : 'var(--color-base-gray)'
                    }}
                  />
                </IconButton>
              )
          : (
            <MenuTrack>
              <MenuActiveLine 
                initial={{
                  x: location.pathname === '/' 
                      ? '12px'
                      : location.pathname.match(/\/dashboard/) 
                          ? '60px'
                          : location.pathname === '/create' 
                              ? '108px'
                              : '0px'  
                }}
                animate={{ 
                  x: location.pathname === '/' 
                      ? '12px'
                      : location.pathname.match(/\/dashboard/) 
                          ? '60px'
                          : location.pathname === '/create' 
                              ? '108px'
                              : '0px'  
                }} 
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <IconButton onTap={() => navigate('/')}>
                <IconNormal
                  src={iconHome}
                  style={{
                    fill: 'var(--color-base-gray)'
                  }}
                  whileHover={{
                    fill: 'var(--color-base-main)'
                  }}
                  animate={{
                    fill: location.pathname === '/' 
                            ? 'var(--color-base-main)' 
                            : 'var(--color-base-gray)'
                  }}
                />
              </IconButton>
              <IconButton onTap={() => navigate('/dashboard')}>
                <IconNormal
                  src={iconWork}
                  style={{
                    fill: 'var(--color-base-gray)'
                  }}
                  whileHover={{
                    fill: 'var(--color-base-main)'
                  }}
                  animate={{
                    fill: location.pathname.match(/\/dashboard/) 
                            ? 'var(--color-base-main)' 
                            : 'var(--color-base-gray)'
                  }}
                />
              </IconButton>
              <IconButton onTap={() => navigate('/create')}>
                <IconNormal
                  src={iconPlus}
                  style={{
                    fill: 'var(--color-base-gray)'
                  }}
                  whileHover={{
                    fill: 'var(--color-base-main)'
                  }}
                  animate={{
                    fill: location.pathname === '/create' 
                            ? 'var(--color-base-main)' 
                            : 'var(--color-base-gray)'
                  }}
                />
              </IconButton>
            </MenuTrack>
          )
      }
      <MenuLine />
      <IconButton onTap={() => open()}>
        <IconNormal
          src={iconWallet}
          style={{
            fill: 'var(--color-base-gray)'
          }}
          whileHover={{
            fill: 'var(--color-base-main)'
          }}
          animate={{
            fill: isConnected 
                    ? 'var(--color-base-main)' 
                    : 'var(--color-base-gray)'
          }}
        />
      </IconButton>
    </MenuContainer>
  )
}

export default Navigation