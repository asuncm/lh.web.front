import { Layout } from 'antd'
import { FC, lazy } from 'react'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './about.module.scss'

const AboutComponent: FC = () => {
    return(<Layout className={style.bg}>
        <Header />
        <Footer />
    </Layout>)
}

export default AboutComponent