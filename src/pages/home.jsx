import styled from 'styled-components'
import logo from './../assets/logo.gif?inline'
import { BigButton, StasLink } from '../components/molecules'
import { useNavigate } from 'react-router'
import { BigTextBold, InlineMiddleTextSemiBold, MiddleText } from '../components/atoms/primitives/font'
import { PageContentBody, Flex } from '../components/atoms/primitives/global'
import { LanguageContext } from '../contexts/language'
import { useContext } from 'react'

const MainLogo = styled.img`
    width: 300px;
    height: 300px;
    pointer-events: none; 
    user-select: none;
    -webkit-user-drag: none;
`

const Home = () => {
    const lang = useContext(LanguageContext)
    const navigate = useNavigate()
        
    return (
        <PageContentBody>
            <Flex gap='48px'>
                <MainLogo src={logo} />
                <BigTextBold><span style={{ color: 'var(--color-base-light-black)' }}>{lang.data.what_is_horn}</span> HORN</BigTextBold>
                <MiddleText>
                    <InlineMiddleTextSemiBold>HORN</InlineMiddleTextSemiBold> — {lang.data.horn_description[0]} <StasLink /> {lang.data.horn_description[1]}
                </MiddleText>
                <BigButton
                    onTap={() => navigate('/create')}
                >{lang.data.create}</BigButton>
            </Flex>
        </PageContentBody>
    )
}

export default Home