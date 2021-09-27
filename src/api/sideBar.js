import request from '@/utils/request'

export function getSideBar() {
    return request({
        method: 'get',
        url: 'sideBar',
    })
}
