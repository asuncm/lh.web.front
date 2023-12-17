import { FC } from 'react'
import { Flex, Form } from 'antd'

import style from './style.module.scss'

const Afflatus: FC = () => {
    const [form] = Form.useForm()
    return(<Flex vertical={false}>
        <Flex className={`relative ${style.banner_list}`}>
            等的就是你
        </Flex>
        <Flex className={`relative ${style.banner_list}`}>
            <Form form={form}></Form>
        </Flex>
    </Flex>)
}

export default Afflatus