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
        label: '琅寰'
    },
    {
        key: '/scheme',
        label: '技术方案'
    },
    {
        key: '/shop',
        label: '公司商品'
    },
    {
        key: '/demand',
        label: '需求中心'
    },
    {
        key: '/about',
        label: '关于我们'
    }
]