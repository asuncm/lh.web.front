import {atom} from 'recoil'

export interface RootState {
    locale: string
    localeText?: string
}

export interface ConditionState {
    loading: boolean
}

export const RootProivder = atom<RootState>({
    key: 'rootState',
    default: {
        locale: 'zh-cn',
        localeText: '简体中文'
    }
})

export const ConditionProivder = atom<ConditionState>({
    key: 'conditionState',
    default: {
        loading: false
    }
})
