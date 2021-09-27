import request from '@/utils/resquest'

export function getOverData() {
    return request({
        method: 'get',
        url: '/record/overview',
    })
}

export function getHistoricalData() {
    return request({
        method: 'get',
        url: '/record/historical',
    })
}

export function getDetails(ID) {
    return request({
        method: 'post',
        url: '/record/historical',
        data: ID
    })
}
