import { ConfigProvider } from 'antd'
import { FC, Suspense, lazy, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Routes, Route, Location, useLocation, useNavigate, NavigateFunction } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { RootProivder, RootState, ConditionProivder, ConditionState } from '@hook/root/atom'
import { LocaleData } from 'typings/module/local'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import zhHK from 'antd/locale/zh_HK'

const Loading = lazy(() => import('@/layout/welcome/loading'))
const HomeComponent = lazy(() => import('@page/home'))
const SchemeComponent = lazy(() => import('@page/scheme'))
const ShopComponent = lazy(() => import('@page/shop'))
const DemandComponent = lazy(() => import('@page/demand'))
const AboutComponent = lazy(() => import('@page/about'))

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-hk'
import 'dayjs/locale/en'

const RootRouter: FC = () => {
    const win: any = window
    const config: LocaleData = {
        'zh-CN': zhCN,
        'en': enUS,
        'zh-HK': zhHK
    }
    const route: Location = useLocation()
    const history: NavigateFunction = useNavigate()
    const [state, setState] = useRecoilState<RootState>(RootProivder)
    const [condition, setCondition] = useRecoilState<ConditionState>(ConditionProivder)
    const [_, i18n] = useTranslation()
    useEffect(() => {
        if (route.pathname === '/') {
            history({ pathname: '/home' })
        }
        setState(win.microApp.getGlobalData())
        win.microApp.addGlobalDataListener(dataListener)
        return () => {
            win.microApp.removeGlobalDataListener(dataListener)
            setCondition({
                ...setCondition,
                loading: false
            })
        }
    }, [])
    useEffect(() => {
        dayjs(state.locale)
        i18n.changeLanguage(state.locale)
    }, [state])
    const dataListener = (data: RootState) => {
        setState(data)
    }
    return (<ConfigProvider locale={config[state.locale]}>
        { condition.loading ? <Loading /> : null }
        <Routes>
            <Route path='/*'>
                <Route path='home' element={<Suspense fallback={<Loading />}>
                    <HomeComponent />
                </Suspense>} />
                <Route path='scheme' element={<Suspense fallback={<Loading />}>
                    <SchemeComponent />
                </Suspense>} />
                <Route path='shop' element={<Suspense fallback={<Loading />}>
                    <ShopComponent />
                </Suspense>} />
                <Route path='demand' element={<Suspense fallback={<Loading />}>
                    <DemandComponent />
                </Suspense>} />
                <Route path='about' element={<Suspense fallback={<Loading />}>
                    <AboutComponent />
                </Suspense>} />
            </Route>
        </Routes>
    </ConfigProvider>)
}

export default RootRouter