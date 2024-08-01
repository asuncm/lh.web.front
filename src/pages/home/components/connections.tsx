import { Flex, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { FC, useEffect, useState } from 'react'
import { MenuData } from '@/hooks/home/data'
import { useTranslation } from 'react-i18next'
import {FormList, IModel, IOption} from '@element/form/index'
import {connections} from './data'
import style from './style.module.scss'
import { useRecoilState } from 'recoil'
import { RootProivder, RootState } from '@/hooks/root/atom'

const Connections: FC = () => {
  const [t] = useTranslation('translation', {
    keyPrefix: 'home'
  })
  const [state] = useRecoilState<RootState>(RootProivder)
  const MenuList: MenuProps['items'] = MenuData?.map(item => {
    const { label, key }: any = item
    return {
      key,
      label: t(label)
    }
  })
  const [menuKey, setMenuKey] = useState<string>('person')
  const [options, setOption] = useState<Array<IOption>>([])
  const [model, setModel] = useState<IModel>({})
  const [labelCol, setLabelCol] = useState({
    span: 3,
    offset: 1
  })
  useEffect(() => {
    setOption(connections[menuKey])
  }, [menuKey])
  useEffect(() => {
    if (state.locale === 'en') {
      setLabelCol({
        span: 6,
        offset: 0
      })
    } else {
      setLabelCol({
        span: 4,
        offset: 0
      })
    }
  }, [state.locale])
  return <Flex vertical={true} className={style.box} align='center'>
    <Flex className={`${style.afflatus_h3} ${style.afflatus_hb}`} justify='center'>{t('connections.title')}</Flex>
    <Flex className={style.afflatus_h5} justify='center'>{t('connections.des')}</Flex>
    <Flex className={style.box_container} justify='flex-start'>
      <Flex justify='stretch' align='top'>
        <Menu
          className={style.box_menu}
          mode='inline'
          selectedKeys={[menuKey]}
          style={{
            background: "none"
          }}
          onClick={(e) => setMenuKey(e.key)}
          items={MenuList}></Menu>
      </Flex>
      <Flex className={style.afflatus_box}>
        <FormList options={options} models={model} labelCol={labelCol} />
      </Flex>
    </Flex>
  </Flex>
}

export default Connections