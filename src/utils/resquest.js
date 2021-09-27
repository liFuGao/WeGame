import axios from 'axios'
// 请求拦截器
axios.interceptors.request.use((config) => {
    return config
})

// 响应拦截器
axios.interceptors.response.use(response => {
    return response
},err => {
    return Promise.reject(err)
})

export default axios
