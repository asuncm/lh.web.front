import { Flex } from "antd"
import { FC, useEffect } from "react"
import { RootProivder, RootState } from "@hook/root/atom"
import { useRecoilState } from "recoil"
import style from './style.module.scss'

const Logo: FC = () => {
    const [state] = useRecoilState<RootState>(RootProivder)
    useEffect(() => {

    }, [])
    return(<Flex vertical>
        <div className={`${state.locale === 'en' ? style.en : style.logo}`}></div>
    </Flex>)
}

export default Logo