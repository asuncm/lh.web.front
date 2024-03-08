import zhCN from './zh-cn'
import zhHK from './zh-hk'
import en from './en'

const resources = {
    'zh-CN': {
        translation: zhCN
    },
    'zh-HK': {
        translation: zhHK
    },
    en: {
        translation: en
    }
}

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'zh-CN',
        lng: 'zh-CN',
        interpolation: {
            escapeValue: false,
        },
        resources
    })

export default i18n