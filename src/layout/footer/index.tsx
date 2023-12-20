import { Flex } from 'antd'
import { FC, useEffect, useState } from 'react'
import style from './footer.module.scss'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { IProps } from 'typings/module/local'
import { useTranslation } from 'react-i18next'

const Footer: FC = () => {
    const [state, setState] = useState<IProps>({})
    const [t] = useTranslation()
    useEffect(() => {
        const date = dayjs()
        const options: IProps = {}
        if (date.year() !== 2023) {
            options.year = `-${date.year()}`
            setState(options)
        }
    }, [])
    return (<Flex vertical className={style.footer}>
        <Flex vertical justify="center">
            <Link className={`pointer ${style.beian}`}
                to={'https://beian.miit.gov.cn/#/Integrated/recordQuery'}
                target='_blank'>{t('root.beian')}</Link>
        </Flex>
        <Flex vertical justify="center">©2023{state.year}   {t('root.copyright')}</Flex>
    </Flex>)
}

export default Footer