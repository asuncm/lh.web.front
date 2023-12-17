import { Flex, Menu } from 'antd'
import { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { NavigateFunction, useLocation, useNavigate, Location } from 'react-router-dom'
import { MenuData } from '@hook/root/data'
import Locale from './locale'
import Logo from './logo'
import style from './header.module.scss'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { RootProivder, RootState } from '@/hooks/root/atom'
import { IProps } from 'typings/module/local'

const Header: FC = () => {
    const location: Location = useLocation()
    const history: NavigateFunction = useNavigate()
    const [current] = useState<string>(location.pathname)
    const [state, setState] = useState<IProps>({})
    const [root] = useRecoilState<RootState>(RootProivder)
    useEffect(() => {
        import(`@/locale/${root.locale}/root`).then((res) => {
            setState(res)
        })
    }, [root])
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
            onClick={(e) => history({pathname: e.key})}>
                {
                    MenuData?.map((item: ItemType) => {
                        const {label}: any = item
                        return(<Menu.Item key={item?.key}>
                            {state[label]}
                        </Menu.Item>)
                    })
                }
            </Menu>
        <Locale />
    </Flex>)
}

export default Header