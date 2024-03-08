import { FC, useEffect, useRef } from 'react'
import { Button, Flex, Form, Input, Image } from 'antd'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { RootProivder, RootState } from '@/hooks/root/atom'
import Panda from './panda'

import Img_1 from '@assets/home/img-1.png'

import style from './style.module.scss'

const Afflatus: FC = () => {
    const [{ scale = '1' }] = useRecoilState<RootState>(RootProivder)
    const [form] = Form.useForm()
    const afflatus = useRef(null)
    const [t] = useTranslation('translation', {
        keyPrefix: 'home'
    })
    const panda = new Panda()
    useEffect(() => {
        afflatus.current && panda.init(afflatus, scale)
    }, [])
    return (<Flex vertical={true} className={style.afflatus} align='center'>
        <Flex className={style.afflatus_h3} justify='center'>{t('afflatus.title')}</Flex>
        <Flex className={style.afflatus_form} justify='space-between'>
            <Flex className={`relative ${style.banner_list} ${style.afflatus_canvas}`}>
                <Image src={Img_1} width="700rem" height="750rem" preview={false} />
            </Flex>
            <Flex className={`relative ${style.banner_list}`}>
                <Form form={form} className={style.form} layout='vertical'>
                    <Form.Item label={t('form.name')}>
                        <Input placeholder={t('form.nameStr')} className={style.form_inp} />
                    </Form.Item>
                    <Form.Item label={t('form.des')}>
                        <Input.TextArea placeholder={t('form.desStr')} className={style.form_area} autoSize={{
                            minRows: 9
                        }} maxLength={800} showCount={true} />
                    </Form.Item>
                    <Form.Item noStyle>
                        <Flex justify='space-between' gap={'60rem'}>
                            <Button className={style.form_sub} type='primary'>{t('form.anonymity')}</Button>
                            <Button className={style.form_sub} type='primary'>{t('form.autonym')}</Button>
                        </Flex>
                    </Form.Item>
                </Form>
            </Flex>
        </Flex>
    </Flex>)
}

export default Afflatus