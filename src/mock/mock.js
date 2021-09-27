import Mock from 'mockjs'
import { newsData } from '@/mock/data/news'
import record from '@/mock/data/record'

Mock.mock('/login', 'post' , function(option){
    let data = JSON.parse(option.body)
    if(data.username === 'admin' && data.password === '88888888') {
        return { 'state': '200' , 'message': '登录成功' }
    }
    if(data.username != 'admin' && data.password != 'adminadmin') {
        return { 'state': '300' , 'message': '账号密码错误' }
    }
    if(data.username === 'admin' || data.password != 'adminadmin') {
        return { 'state': '300' , 'message': '密码错误' }
    }
    if(data.username != 'admin' || data.password === 'adminadmin') {
        return { 'state': '300' , 'message': '账号错误' }
    }
})

Mock.mock('/news', 'get' , {
    'state': '200',
    'newsData': newsData
})

Mock.mock('/record/overview', 'get' , {
    'state': '200',
    'newsData': record.overViewData
})

Mock.mock('/record/historical', 'get' , {
    'state': '200',
    'newsData': record.historicalData
})

Mock.mock('/record/historical', 'post' , function(option) {
    let data
    record.recordDetails.histData.forEach(item => {
        if(option.body === item.id) {
            data = item
        }
    });
    return data
})




