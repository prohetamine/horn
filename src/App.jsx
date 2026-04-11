import { Outlet } from 'react-router'
import styled from 'styled-components'
import Footer from './components/footer'
import Header from './components/header'

const Body = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0px;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 24px;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;
  padding: 0px 0px 32px;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 73px);

  @media (max-width: 768px) {
    min-height: calc(100vh - 73px - 24px);
  }
`

const App = () => (
  <Body>
    <Content>
      <Header />
      <Outlet />
    </Content>
    <Footer />
  </Body>
)

export default App
