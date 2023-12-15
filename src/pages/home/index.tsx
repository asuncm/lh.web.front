import { Layout } from 'antd'
import { FC, lazy } from 'react'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './home.module.scss'

const HomeComponent: FC = () => {
    return(<Layout className={style.bg}>
        <Header />
        <Footer />
    </Layout>)
}

export default HomeComponent