import { Flex } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {SchemeList} from './data'
import style from './style.module.scss'

const Scheme: FC = () => {
  const [t] = useTranslation('translation', {
    keyPrefix: 'home'
})
  return <Flex vertical={true} className={`${style.box} ${style.box_sch}`} align='center'>
    <Flex className={style.afflatus_h3} justify='center'>{ t('scheme.title') }</Flex>
    <Flex className={style.box_container} justify='flex-start'>
      <Flex justify='center' align='top' className={style.scheme}>
        {
          SchemeList.map((item, index) => {
            let top = 15;
            if (index % 2) {
              top = Math.round(Math.random() * 30) + 120
            }
            return(<Flex key={item.key} className={style.scheme_list} style={{marginBlockStart: `${top}rem`}} justify='center' align='center'>{ t(item.key) }</Flex>)
          })
        }
      </Flex>
    </Flex>
  </Flex>
}

export default Scheme