import request from '@/utils/resquest'

export function getNews() {
    return request({
        method: 'get',
        url: '/news',
    })
}
