import { IOption as  CState} from '@element/form/index'
export interface BState {
    key: string
    name?: string
    label?: string
}

export const BannerList: Array<BState> = [
    {
        key: 'technology',
        name: '技术',
    },
    {
        key: 'design',
        name: '设计',
    },
    {
        key: 'finance',
        name: '财务',
    },
    {
        key: 'market',
        name: '销售',
    }
]

export interface SchemeState extends BState {
    pathname?: string
}

export const SchemeList: Array<SchemeState> = [
    {
        key: 'microService',
        name: '微服务',
        pathname: '/scheme/microApp'
    },
    {
        key: 'service',
        name: '服务端',
        pathname: '/scheme/service'
    },
    {
        key: 'miniProgram',
        name: '小程序',
        pathname: '/scheme/miniProgram'
    },
    {
        key: 'web',
        name: '前端',
        pathname: '/scheme/web'
    },
    {
        key: 'app',
        name: '移动端',
        pathname: '/scheme/app'
    },
    {
        key: 'application',
        name: '桌面端',
        pathname: '/scheme/application'
    },
    {
        key: 'sql',
        name: '数据库',
        pathname: '/scheme/sql'
    },
    {
        key: 'container',
        name: '容器',
        pathname: '/scheme/container'
    }
]

export interface SState {
    [key: string]: Array<CState>
}

// 团队类型
const teams: CState[] = [
    {
        key: 'userType',
        label: 'userType',
        type: 'radio',
        children: [
            {
                key: 'person',
                label: 'person',
            },
            {
                key: 'family',
                label: 'family',
            },
            {
                key: 'team',
                label: 'team',
            },
            {
                key: 'enterprise',
                label: 'enterprise',
            },
            {
                key: 'collective',
                label: 'collective',
            },
            {
                key: 'NPO',
                label: 'NPO',
            }
        ]
    }
]
// 需求类型
const desired: CState[] = [
    {
        key: 'desiredType',
        label: 'desiredType',
        type: 'radio',
        children: [
            {
                key: 'client',
                label: 'client',
            },
            {
                key: 'supplier',
                label: 'supplier',
            },
            {
                key: 'resource',
                label: 'resource',
            },
            {
                key: 'sdk',
                label: 'sdk',
            },
            {
                key: 'platform',
                label: 'platform',
            },
            {
                key: 'other',
                label: 'other',
            }
        ]
    }
]

const UList: CState[] = [
    {
        key: 'username', // 用户名
        label: 'username',
        type: 'input'
    },
    {
        key: 'UID', // 用户ID
        label: 'UID',
        type: 'input',
        visible: true
    },
]

const userInfo: CState[] = [
    {
        key: 'name', // 联系人
        label: 'name',
        type: 'input',
        disabled: true
    },
    {
        key: 'ICard', // 联系人身份证号码
        label: 'ICard',
        type: 'number',
        disabled: true
    },
    {
        key: 'ICardDate', // 身份证有效期
        label: 'ICardDate',
        type: 'rangePicker',
        disabled: true
    },
    {
        key: 'cardfiles', // 身份证文件
        label: 'cardfiles',
        type: 'upload',
        listType: 'picture-card',
        disabled: true
    },
    {
        key: 'CNumber', // 联系电话
        type: 'input',
        label: 'CNumber'
    },
    {
        key: 'email', // 联系邮箱
        type: 'input',
        label: 'email'
    },
]

const userList: CState[] = [
    {
        key: 'CAddress', // 通信地址
        type: 'input',
        label: 'CAddress'
    },
    {
        key: 'cooperation', // 合作目的
        type: 'checkbox',
        label: 'cooperation',
        children: [
            {
                key: 'create', // 创作
                label: 'create'
            },
            {
                key: 'ASSETS', // 资源
                label: 'ASSETS'
            },
            {
                key: 'contacts', // 人脉
                label: 'contacts'
            },
            {
                key: 'fund', // 资金
                label: 'fund'
            },
            {
                key: 'TechnicalSupport', // 技术支持
                label: 'TechnicalSupport'
            },
            {
                key: 'StartABusiness', // 创业
                label: 'StartABusiness'
            }
        ]
    },
    {
        key: 'remark', // 备注
        type: 'textarea',
        label: 'remark'
    },
]

const QList: CState[] = [
    {
        key: 'QName', // 企业名称
        label: 'QName',
        type: 'input',
        disabled: true
    },
    {
        key: 'QID', // 企业编码
        label: 'QID',
        type: 'input',
        disabled: true
    },
    {
        key: 'Qfile', // 身份证文件
        label: 'Qfile',
        type: 'upload',
        maxCount: 2,
        disabled: true
    },
    ...userInfo,
    {
        key: 'RAddress', // 注册地址
        label: 'RAddress',
        type: 'input',
        disabled: true
    },
    ...userList,
    {
        key: 'attachments', // 相关资料
        label: 'attachments',
        type: 'upload',
    }
]
const person: CState[] = [
    ...teams,
    ...UList,
    ...userInfo,
    ...userList,
    {
        key: 'attachments', // 相关资料
        label: 'attachments',
        type: 'upload',
    }
]

const family: CState[] = [
    ...teams,
    ...UList,
    ...QList
]

const collective: CState[] = [
    ...teams,
    ...UList,
    ...QList
]

const NPO: CState[] = [
    ...teams,
    ...UList,
    ...QList
]

const team: CState[] = [
    ...teams,
    ...UList,
    ...QList
]

const enterprise: CState[] = [
    ...teams,
    ...UList,
    ...QList
]

const client: CState[] = [
    ...teams,
    ...desired,
    ...UList,
    ...QList
]

const supplier: CState[] = [
    ...client
]

const resource: CState[] = [
    ...client
]

const sdk: CState[] = [
    ...client
]

const platform: CState[] = [
    ...client
]

const other: CState[] = [
    ...client
]



export const connections: SState = {
    person,
    family,
    collective,
    NPO,
    team,
    enterprise,
    client,
    supplier,
    resource,
    sdk,
    platform,
    other
}