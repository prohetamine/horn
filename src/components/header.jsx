import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { Flex } from './atoms/primitives/global'
import Navigation from './navigation'

import Logo from './../assets/logo.svg?react'

const Body = styled.div`
  width: 100%;
  height: 72px;
  max-height: 72px;
  box-sizing: border-box;
`

const LogoButton = styled(motion(Logo))`
  width: 104px; 
  height: 30px;
  outline: none;
`

const Header = () => {
    const navigate = useNavigate()

    return (
        <Body>
          <Flex justify='space-between' direction='row' align='center'>
            <LogoButton 
              onTap={() => navigate('/')}
              style={{ 
                width: '104px', 
                height: '30px' 
              }} 
            />
            <Navigation />
          </Flex>
        </Body>
    )
}

export default Header