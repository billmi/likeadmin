import request from '@/utils/request'

// 配置
export function getConfig() {
    return request.get({ url: '/config/getConfig' })
}

// 工作台主页
export function getWorkbench() {
    return request.get({ url: '/workbench/index' })
}

//下拉数据
export function getSelectData(params: any) {
    return request.get({ url: '/config/selectData', params }, { ignoreCancelToken: true })
}

//字典数据
export function getDictData(params: any) {
    return request.get({ url: '/config/dict', params })
}
