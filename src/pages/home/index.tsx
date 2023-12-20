import { Layout } from 'antd'
import { FC, lazy } from 'react'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './home.module.scss'
import Banner from './component/banner'
import { IProps } from 'typings/module/local'
import { useRecoilValue } from 'recoil'
import { RootProivder, RootState } from '@hook/root/atom'

export interface IState extends IProps {
    [key: string]: any
}

const HomeComponent: FC = () => {
    const state = useRecoilValue<RootState>(RootProivder)
    return(<Layout className={style.bg}>
        <Header />
        <Banner {...state} />
        <Footer />
    </Layout>)
}

export default HomeComponent