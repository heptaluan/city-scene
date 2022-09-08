const api = `http://192.168.1.64:8099/api`

const loginImg = time => {
  return `${api}/tailai-cloud-system/sys-user/randomImage/${time}`
}

const loginUrl = () => {
  return `${api}/tailai-cloud-system/sys-user/login`
}
