import { Layout } from 'antd'
import { FC, lazy, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { RootProivder, RootState } from '@/hooks/root/atom'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './home.module.scss'
import Banner from './component/banner'
import { IProps } from 'typings/module/local'

export interface IState extends IProps {
    [key: string]: any
}

const HomeComponent: FC = () => {
    const [state, setState] = useState<IState>({})
    const [root] = useRecoilState<RootState>(RootProivder)
    useEffect(() => {
        import(`@/locale/${root.locale}/home`).then((res) => {
            setState({...res, locale: root.locale})
        })
    }, [root])
    return(<Layout className={style.bg}>
        <Header />
        <Banner {...state} />
        <Footer />
    </Layout>)
}

export default HomeComponent