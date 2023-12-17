import { Flex } from 'antd'
import { FC, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import style from './footer.module.scss'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { RootProivder, RootState } from '@hook/root/atom'
import { IProps } from 'typings/module/local'

const Footer: FC = () => {
    const [state, setState] = useState<IProps>({})
    const [root] = useRecoilState<RootState>(RootProivder)
    useEffect(() => {
        const date = dayjs()
        const options: IProps = {}
        if (date.year() !== 2023) {
            options.year = `-${date.year()}`
        }
        import(`@/locale/${root.locale}/root`).then((res) => {
            setState({...options, ...res})
        }).catch(() => {
            setState(options)
        })
    }, [root])
    return (<Flex vertical className={style.footer}>
        <Flex vertical justify="center">
            <Link className={`pointer ${style.beian}`}
                to={'https://beian.miit.gov.cn/#/Integrated/recordQuery'}
                target='_blank'>{state.beian}</Link>
        </Flex>
        <Flex vertical justify="center">©2023{state.year}   {state.copyright}</Flex>
    </Flex>)
}

export default Footer