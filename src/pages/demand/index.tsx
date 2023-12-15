import { Layout } from 'antd'
import { FC, lazy } from 'react'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './demand.module.scss'

const DemanComponent: FC = () => {
    return(<Layout className={style.bg}>
        <Header />
        <Footer />
    </Layout>)
}

export default DemanComponent