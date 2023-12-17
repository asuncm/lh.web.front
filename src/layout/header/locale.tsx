import { FC, useEffect } from 'react'
import { useRecoilState } from "recoil"
import { RootProivder, RootState, ConditionProivder, ConditionState } from "@hook/root/atom"
import { LocaleData } from '@hook/root/data'

import style from './header.module.scss'
import { Flex, Dropdown } from 'antd'

const Locale: FC = () => {
    const [state] = useRecoilState<RootState>(RootProivder)
    const [condition, setCondition] = useRecoilState<ConditionState>(ConditionProivder)
    const win: any = window
    let timeout: NodeJS.Timeout|number = 0
    useEffect(() => {
        return () => {
            closeLoading()
            clearTimeout(timeout)
        }
    }, [])
    const closeLoading = () => {
        setCondition({
            ...condition,
            loading: false
        })
    }
    return(<Flex>
        <Dropdown
            menu={{
                items: LocaleData,
                defaultSelectedKeys: [state.locale],
                selectable: true,
                onClick: (e) => {
                    const item = LocaleData.find(key => key.key === e.key)
                    setCondition({
                        ...condition,
                        loading: true
                    })
                    win.microApp.setGlobalData({
                        locale: e.key,
                        localeText: item?.label
                    })
                    timeout = setTimeout(() => closeLoading(), 500)
                }
            }}
            trigger={['hover']}
            className={style.locale}>
                <div className={style.locale_col}>
                    {state.localeText}
                </div>
            </Dropdown>
    </Flex>)
}

export default Locale