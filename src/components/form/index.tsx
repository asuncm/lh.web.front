import { Button, Form, Flex, Radio, Input, ColProps, Upload, Checkbox, DatePicker } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import style from './form.module.scss'
import { FormLayout, } from 'antd/es/form/Form'
import { FormLabelAlign } from 'antd/es/form/interface'

export interface IOption {
  key: string
  name?: string
  label?: string
  value?: string | number
  disabled?: boolean
  type?: string
  listType?: string
  maxCount?: number
  visible?: boolean
  children?: IOption[]
}
export interface IModel {
  [key: string]: string | number | boolean | IModel | Array<IModel>
}
export interface IProps {
  options: Array<IOption>
  models: IModel
  layout?: FormLayout
  labelAlign?: FormLabelAlign
  labelCol?: ColProps
}
const components: any = {
  radio: function (props: any) {
    if (props.children && props.children.length > 0) {
      const [t] = useTranslation('translation', {
        keyPrefix: 'home'
      });
      return (<Radio.Group defaultValue={''}>
        {
          props.children.map((item: IOption) => {
            return (<Radio key={item.key}>{t(item.key)}</Radio>)
          })
        }
      </Radio.Group>)
    } else {
      return (<Radio />);
    }
  },
  input: function (props: any) {
    return (<Input />);
  },
  upload: function (props: any) {
    const { models = {}, key } = props;
    return (<Upload name={props.key} className='avatar-uploader' maxCount={props.maxCount} multiple={(props.maxCount || 1) > 1 ? true : false}>
      <button style={{ border: 'none', background: 'none' }} type="button">
        {
          models[key] ? null : <PlusOutlined style={{ fontSize: '36rem' }} />
        }
      </button>
    </Upload>);
  },
  textarea: function (props: any) {
    return (<Input.TextArea />);
  },
  checkbox: function (props: any) {
    if (props.children && props.children.length > 0) {
      const [t] = useTranslation('translation', {
        keyPrefix: 'home'
      });
      return (<Checkbox.Group defaultValue={['']}>
        {
          props.children.map((item: IOption) => {
            return (<Checkbox key={item.key}>{t(item.key)}</Checkbox>)
          })
        }
      </Checkbox.Group>);
    } else {
      return (<Checkbox />);
    }
  },
  rangePicker: function (props: any) {
    return (<DatePicker.RangePicker ></DatePicker.RangePicker>);
  }
}

export const FormList: FC<IProps> = (props) => {
  const [t] = useTranslation();
  const [options, setOption] = useState<Array<IOption>>([]);
  useEffect(() => {
    setOption(props.options);
  }, [props.options])
  const [models, setModel] = useState<IModel>({})
  useEffect(() => {
    setModel(models);
  }, [props.models])
  return (<Form className={style.form}
    layout={props.layout || 'horizontal'}
    labelCol={props.labelCol}
    wrapperCol={{ offset: '15px' }}
    labelAlign={props.labelAlign || 'right'}>
    {
      options.map((item, index) => {
        if (!item.visible && components[item.type || '']) {
          const Component = components[item.type || ''];
          const {key, ...other} = item
          return (<Form.Item key={key} label={t(`home.${item.key}`)}>
            <Component {...other} />
          </Form.Item>)
        } else {
          return null
        }
      })
    }
    <Form.Item wrapperCol={{ offset: 3 }}>
      <Flex justify="center" gap="120rem">
        <Button className={style.form_btn} type='primary'>{t('root.reset')}{t('root.info')}</Button>
        <Button className={style.form_btn} type='primary'>{t('root.submit')}{t('root.info')}</Button>
      </Flex>
    </Form.Item>
  </Form>)
}