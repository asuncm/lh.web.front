import { FC, useEffect, useState } from "react"
import { Flex } from "antd"
import { BState, BannerList } from './data'
import style from './style.module.scss'
import { IState } from ".."
import { useTranslation } from "react-i18next"

const Banner: FC<IState> = (props: IState) => {
    const [state, setState] = useState<BState>(BannerList[0])
    const [t] = useTranslation('translation', {
        keyPrefix: 'home'
    })
    let timeout: NodeJS.Timeout | number = 0
    useEffect(() => {
        loop(1)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    const loop = (val: number) => {
        if (val >= BannerList.length) {
            val = 0
        }
        timeout = setTimeout(() => {
            setState(BannerList[val])
            loop(val + 1)
        }, 5000)
    }
    return (<Flex vertical>
        <Flex className={style.banner_yu} justify="center" align="center">与君同行 共赢你我他</Flex>
        <Flex justify="center" align="center">
            <Flex className={`relative ${style.banner} ${style[props.locale]}`} vertical>
                <div className={`${style.banner_rem} ${style[props.locale]}`}>{t(`${state.key}.explain`)}</div>
                <div className={`${style.banner_rem} ${style.banner_b}  ${style[props.locale]}`}>{t(`${state.key}.declare`)}</div>
            </Flex>
        </Flex>
    </Flex>)
}

export default Banner