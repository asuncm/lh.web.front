import { Flex } from 'antd'
import { FC } from 'react'
import Logo from './logo'

import style from './header.module.scss'

const Header: FC = () => {
    return(<Flex vertical className={style.header}>
        <Logo />
    </Flex>)
}

export default Header