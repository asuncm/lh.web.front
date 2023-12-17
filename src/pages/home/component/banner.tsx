import { FC, useEffect, useState } from "react"
import { Flex } from "antd"
import { BState, BannerList } from './data'
import style from './style.module.scss'
import { IState } from ".."

const Banner: FC = (props: IState) => {
    const [state, setState] = useState<BState>(BannerList[0])
    let timeout: NodeJS.Timeout|number = 0
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
    return (<Flex justify="center" align="center">
        <Flex className={style.banner} vertical={false}>
            <Flex className={`relative ${style.banner_list}`}>
                <div className={style.banner_name}>
                    <span>{props[state.key]?.name}</span>
                </div>
                <div  className={style.banner_link}>
                    <span>{props[state.key]?.link}</span>
                </div>
                <div  className={style.banner_des}>
                    <span>{props[state.key]?.des}</span>
                </div>
            </Flex>
            <Flex className={`relative ${style.banner_list} ${style[props.locale]}`} vertical>
                <div className={`${style.banner_rem} ${style[props.locale]}`}>{props[state.key]?.explain}</div>
                <div className={`${style.banner_rem} ${style.banner_b}  ${style[props.locale]}`}>{props[state.key]?.declare}</div>
            </Flex>
        </Flex>
    </Flex>)
}

export default Banner