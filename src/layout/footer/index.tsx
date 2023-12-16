import { Flex } from 'antd'
import { FC, useEffect, useState } from 'react'
import style from './footer.module.scss'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
    const [state, setState] = useState<string>('')
    useEffect(() => {
        const date = dayjs()
        if (date.year() !== 2023) {
            setState(`-${date.year()}`)
        }
    }, [])
    return(<Flex vertical className={style.footer}>
        <Flex vertical justify="center">
            <Link className={`pointer ${style.beian}`} to={'https://beian.miit.gov.cn/#/Integrated/recordQuery' } target='_blank'>京ICP备2023021043号-2</Link>
        </Flex>
        <Flex vertical justify="center">©2023{state}   北京琅寰科技有限公司版权所有</Flex>
    </Flex>)
}

export default Footer