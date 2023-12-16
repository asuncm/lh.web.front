import { Flex, Menu } from 'antd'
import { FC, useState } from 'react'
import { NavigateFunction, useLocation, useNavigate, Location } from 'react-router-dom'
import { MenuData } from '@hook/root/data'
import Locale from './locale'

import Logo from './logo'

import style from './header.module.scss'

const Header: FC = () => {
    const location: Location = useLocation()
    const history: NavigateFunction = useNavigate()
    const [current] = useState<string>(location.pathname)
    return (<Flex vertical={false} className={style.header} justify='space-between' align='center'>
        <Logo />
        <Menu
            className={style.menu}
            style={{
                background: "none",
                color: "rgb(247, 244, 237)",
                height: '100rem'
            }}
            mode="horizontal"
            selectedKeys={[current]} 
            onClick={(e) => history({pathname: e.key})}
            items={MenuData} />
        <Locale />
    </Flex>)
}

export default Header