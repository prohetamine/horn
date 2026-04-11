import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { RedstoneProvider } from '@prohetamine/redstone'
import { StasPayProvider } from 'stas-pay'
import { LanguageProvider } from './contexts/language'
import { ModalWindowProvider } from './contexts/modal-window.jsx'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Dashboard from './pages/dashboard.jsx'
import Create from './pages/create.jsx'
import Poll from './pages/poll.jsx'
import Cert from './pages/cert.jsx'

const config = {
  metadata: {
    name: 'Horn',
    description: 'HORN — this is an easy way to create a public vote and receive a commission in $STAS tokens as a partner for attracted votes.',
    url: 'https://horn.prohetamine.ru/horn/',
    icons: ['https://horn.prohetamine.ru/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: '/horn-testnet/'
}

createRoot(document.getElementById('root')).render(
  <ModalWindowProvider>
    <LanguageProvider>
      <RedstoneProvider config={config}>
        <StasPayProvider>
          <BrowserRouter basename="/">
            <Routes>
              <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/dashboard/:page' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/cert/:dataBase64' element={<Cert />} />
                <Route path='/create' element={<Create />} />
                <Route path='/poll/:dataBase64' element={<Poll />} />
                <Route path='/preview/:dataBase64' element={<Poll />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </StasPayProvider>
      </RedstoneProvider>
    </LanguageProvider>
  </ModalWindowProvider>
)
