import { FC, ReactNode } from 'react'
import { useRecoilState } from "recoil"
import { Flex } from 'antd'
import { RootProivder, RootState } from "@hook/root/atom"
import LogoImage from '@assets/lh/lh-logo.png'
import AllkicImage from '@assets/lh/allkic-logo.png'

import style from './header.module.scss'

const Logo: FC = () => {
    const [state] = useRecoilState<RootState>(RootProivder)
    let logoComponent: ReactNode = <img className={style.logo} src={LogoImage} />
    let logoText: string = '琅寰科技'
    if (state.locale === 'en') {
        logoComponent = <img className={style.en} src={AllkicImage} />
        logoText=''
    }
    return (<Flex className={`${state.locale === 'en' ? style.en : style.logo} ${style.logo_text}`} vertical={false} align='center'>
        {logoComponent}
        <span></span>
        { logoText }
    </Flex>)
}

export default Logo