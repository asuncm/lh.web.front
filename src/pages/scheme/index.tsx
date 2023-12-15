import { Layout } from 'antd'
import { FC, lazy } from 'react'
const Header = lazy(() => import('@/layout/header'))
const Footer = lazy(() => import('@/layout/footer'))

import style from './scheme.module.scss'

const SchemeComponent: FC = () => {
    return(<Layout className={style.bg}>
        <Header />
        <Footer />
    </Layout>)
}

export default SchemeComponent