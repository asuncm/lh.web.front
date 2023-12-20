import cnRoot from './zh-cn/root.json'
import hkRoot from './zh-hk/root.json'
import enRoot from './en/root.json'
import cnHome from './zh-cn/home.json'
import hkHome from './zh-hk/home.json'
import enHome from './en/home.json'

const resources = {
    'zh-CN': {
        translation: {
            home: cnHome,
            root: cnRoot
        }
    },
    'zh-HK': {
        translation: {
            home: hkHome,
            root: hkRoot
        }
    },
    en: {
        translation: {
            home: enHome,
            root: enRoot
        }
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