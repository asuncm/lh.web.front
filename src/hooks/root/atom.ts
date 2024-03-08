import {atom} from 'recoil'

export interface RootState {
    locale: string
    localeText?: string
    scale?: string
}

export interface ConditionState {
    loading: boolean
    scale?: string
}

export const RootProivder = atom<RootState>({
    key: 'rootState',
    default: {
        locale: 'zh-CN',
        localeText: '简体中文', 
        scale: '1'
    }
})

export const ConditionProivder = atom<ConditionState>({
    key: 'conditionState',
    default: {
        loading: false,
    }
})
