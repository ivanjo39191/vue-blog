import request from '@/utils/request'

//django jwt
export function login(data) {
  return request({
    url: 'http://ttime-demo.ivankaoblog.com:8000/api/token/',
    method: 'post',
    data: data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://ttime-demo.ivankaoblog.com:8000/api/users/profile/',
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+ token
    }
  })
}

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data: data
//   })
// }

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params : { token }
//   })
// }

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
