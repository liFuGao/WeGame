import request from '@/utils/resquest'

export function login(data) {
    return request({
        method: 'post',
        url: '/login',
        data: data
    })
}
