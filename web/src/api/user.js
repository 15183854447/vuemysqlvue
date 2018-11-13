import requset from '../unitls/request'

//用户信息的接口
export function users() {
  return requset({
    url: 'list.html',
    method: 'get'
  })
}
