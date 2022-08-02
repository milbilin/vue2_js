//接口路由管理
import serverAxios from "..";

export const getUserInfo = (params) => {
    return serverAxios({
        method: 'get',
        url: '/api/website/queryMenuWebsite',
        params
    })
}

export const login = (data) => {
    return serverAxios({
        method: 'post',
        url: '/api/user/login',
        data,
        //默认以json格式请求
        // headers: {
        //     'content-type': 'application/x-www-form-urlencoded'
        // }
    })
}