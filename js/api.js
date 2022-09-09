
// http-server -P http://192.168.1.64:9000
const api = ''

const loginImg = time => {
  return `${api}/tailai-cloud-system/sys-user/randomImage/${time}`
}

const loginUrl = () => {
  return `${api}/tailai-cloud-system/sys-user/login`
}

const getViewData = () => {
  return `${api}/tailai-cloud-register/register-data-view/getViewData`
}
