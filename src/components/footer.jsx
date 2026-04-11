import styled from 'styled-components'
import { Link } from 'react-router'
import { useContext } from 'react'
import { LanguageContext } from '../contexts/language'
import { SmallTextBold } from './atoms/primitives/font'
import { Flex } from './atoms/primitives/global'
import { SmallTextFakeLink } from './atoms/components'

const Body = styled.div`
    width: 100%;
    box-sizing: border-box;
`

const Container = styled.div`
    flex-wrap: wrap;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;
    gap: 32px;

    @media (max-width: 768px) {
        gap: 12px;
    }
`

const Footer = () => {
    const lang = useContext(LanguageContext)

    return (
        <Body>
            <Flex>
                <Container>
                    <Link to='https://github.com/prohetamine/redstone' style={{ color: 'var(--color-base-light-black)' }}>
                        <SmallTextBold>Redstone</SmallTextBold>
                    </Link>
                    <Link to='https://github.com/prohetamine/horn' style={{ color: 'var(--color-base-light-black)' }}>
                        <SmallTextBold>GitHub</SmallTextBold>
                    </Link>
                    <Link to='https://prohetamine.ru/web3' style={{ color: 'var(--color-base-light-black)' }}>
                        <SmallTextBold>prohetamine.ru/web3</SmallTextBold>
                    </Link>
                    <Link to='https://t.me/prohetamines' style={{ color: 'var(--color-base-light-black)' }}>
                        <SmallTextBold>telegram</SmallTextBold>
                    </Link>
                    <Flex gap='6px' direction='row'>
                        <SmallTextFakeLink 
                            onTap={() => lang.setLang(lang.lang === 'en' ? 'ru' : 'en')} 
                            style={{ textDecoration: lang.lang !== 'en' ? 'underline' : 'none' }}
                        >
                            ru
                        </SmallTextFakeLink>
                        <SmallTextFakeLink 
                            onTap={() => lang.setLang(lang.lang === 'en' ? 'ru' : 'en')} 
                            style={{ textDecoration: lang.lang === 'en' ? 'underline' : 'none' }}
                        >
                            en
                        </SmallTextFakeLink>
                    </Flex>
                </Container>
            </Flex>
        </Body>
    )
}

export default Footer