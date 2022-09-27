// http-server -P http://192.168.1.64:9000
// 上线之前调整 API 与 MQTT 订阅内容
const api = location.href.indexOf('192.168.11') > -1 ? '' : '/api'

const loginImg = time => {
  return `${api}/tailai-cloud-system/sys-user/randomImage/${time}`
}

const loginUrl = () => {
  return `${api}/tailai-cloud-system/sys-user/login`
}

const getAllDataUrl = () => {
  return `${api}/tailai-cloud-register/register-data-view/getViewData`
}

const getCityDataUrl = () => {
  return `${api}/tailai-cloud-register/register-data-view/getCountyViewData`
}
