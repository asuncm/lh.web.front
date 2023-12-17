import type {MenuProps} from 'antd'
export interface LocaleProps {
    key: string
    label: string
    value?: string
}

export const LocaleData: Array<LocaleProps> = [
    {
        key: 'zh-cn',
        label: '简体中文',
        value: 'zh-cn'
    },
    {
        key: 'zh-hk',
        label: '繁体中文',
        value: 'zh-hk'
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