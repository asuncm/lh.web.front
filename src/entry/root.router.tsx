import { ConfigProvider } from 'antd'
import { FC, Suspense, lazy, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Routes, Route, Location, useLocation, useNavigate, NavigateFunction, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { RootProivder, RootState, ConditionProivder, ConditionState } from '@hook/root/atom'
import { LocaleData } from 'typings/module/local'
import dayjs from 'dayjs'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'
import zhHK from 'antd/locale/zh_HK'

const Loading = lazy(() => import('@/layout/welcome/loading'))
const PageRouter = lazy(() => import('@page/page.router'))

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-hk'
import 'dayjs/locale/en'
interface IProps {
    scale: string
}
const RootRouter: FC<IProps> = ({scale}) => {
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
        if (win.microApp) {
            const globalData = win.microApp.getGlobalData()
            setState({
                ...state,
                ...globalData
            })
            win.microApp.addGlobalDataListener(dataListener)
            return () => {
                win.microApp.removeGlobalDataListener(dataListener)
                setCondition({
                    ...condition,
                    loading: false
                })
            }
        } else {
            setState({
                ...state,
                scale
            })
        }
    }, [])
    useEffect(() => {
        dayjs(state.locale)
        i18n.changeLanguage(state.locale)
    }, [state])
    const dataListener = (data: RootState) => {
        setState({
            ...state,
            ...data
        })
    }
    return (<ConfigProvider locale={config[state.locale]}>
        { condition.loading ? <Loading /> : null }
        <Routes>
            <Route path='/*' element={<Suspense fallback={<Loading />}>
                <PageRouter />
                <Outlet />
            </Suspense>} />
        </Routes>
    </ConfigProvider>)
}

export default RootRouter