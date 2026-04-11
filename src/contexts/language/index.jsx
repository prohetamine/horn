/* eslint-disable react-refresh/only-export-components */
import { createContext } from 'react'
import useLocalStorage from 'use-local-storage'
import en from './en'
import ru from './ru'

export const LanguageContext = createContext(undefined)

const data = {
  en,
  ru
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage('language', 'en')

  return (
    <LanguageContext.Provider 
      value={{ 
        data: data[lang], 
        lang,
        setLang
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
