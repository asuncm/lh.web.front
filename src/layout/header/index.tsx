import { Flex, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { FC, useState } from 'react'
import { NavigateFunction, useLocation, useNavigate, Location } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { MenuData } from '@hook/root/data'
import Locale from './locale'
import Logo from './logo'
import style from './header.module.scss'

const Header: FC = () => {
    const location: Location = useLocation()
    const history: NavigateFunction = useNavigate()
    const [current, setCurrent] = useState<string>(location.pathname)
    const { t } = useTranslation('translation', { keyPrefix: 'root' })
    const MenuList: MenuProps['items'] = MenuData?.map(item => {
        const { label, key }: any = item
        return {
            key,
            label: t(label)
        }
    })
    return (<Flex vertical={false} className={style.header} justify='space-between' align='center'>
        <Logo />
        <Menu
            className={style.menu}
            style={{
                background: "none",
                color: "rgb(247, 244, 237)",
                height: '100rem',
                paddingInlineEnd: '150rem'
            }}
            mode="horizontal"
            selectedKeys={[current]}
            items={MenuList}
            onClick={(e) => {
                history({ pathname: e.key })
                setCurrent(e.key)
            }}></Menu>
        <Locale />
    </Flex>)
}

export default Header