import type {MenuProps} from 'antd'

export interface LocaleProps {
    key: string
    label: string
    value?: string
}
export const LocaleData: Array<LocaleProps> = [
    {
        key: 'zh-CN',
        label: '简体中文',
        value: 'zh-CN'
    },
    {
        key: 'zh-HK',
        label: '繁体中文',
        value: 'zh-HK'
    },
    {
        key: 'en',
        label: 'English',
        value: 'en'
    }
]

export const MenuData: MenuProps["items"] = [
    {
        key: '/home',
        label: 'home'
    },
    {
        key: '/scheme',
        label: 'scheme'
    },
    {
        key: '/shop',
        label: 'shop'
    },
    {
        key: '/demand',
        label: 'demand'
    },
    {
        key: '/about',
        label: 'about'
    }
]