import {
  option1,
  formatOption1,
  option2,
  formatOption2,
  option3,
  formatOption3,
  option4,
  formatOption4,
  option5,
  formatOption5,
  option6,
  formatOption6,
  option7,
  formatOption7,
} from './options.js'
import { geoData } from './xinxiang.js'
import { PahoMQTT } from './mqtt.js'

$(window).load(function () {
  // 判断是否登录
  if (!localStorage.getItem('token')) {
    window.location = './login.html'
  }

  var whei = $(window).width()
  $('html').css({ fontSize: whei / 20 })
  $(window).resize(function () {
    var whei = $(window).width()
    $('html').css({ fontSize: whei / 20 })
  })

  $('.loading').fadeOut(1500)

  setTimeout(() => {
    anime({
      targets: '.left-box .boxall',
      translateX: '153%',
      easing: 'easeInOutQuad',
      delay: function (el, i, l) {
        return i * 100
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100
      },
    })

    anime({
      targets: '.right-box .boxall',
      translateX: '-153%',
      easing: 'easeInOutQuad',
      delay: function (el, i, l) {
        return i * 100
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100
      },
    })

    anime({
      targets: '.bar',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 500,
    })

    anime({
      targets: '.map',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 1000,
    })

    anime({
      targets: '.head',
      translateY: '0',
      delay: 800,
      duration: 300,
    })
  }, 200)

  // ===========================================================

  echarts.registerMap('xinxiang', geoData)

  const echart1 = echarts.init(document.getElementById('echart1'))
  const echart2 = echarts.init(document.getElementById('echart2'))
  const echart3 = echarts.init(document.getElementById('echart3'))
  const echart4 = echarts.init(document.getElementById('echart4'))
  const echart5 = echarts.init(document.getElementById('echart5'))
  const echart6 = echarts.init(document.getElementById('echart6'))
  const echart7 = echarts.init(document.getElementById('echart7'))
  echart7.hideLoading()

  const getViewDataUrl = getViewData()

  $.ajax({
    url: getViewDataUrl,
    type: 'POST',
    contentType: 'application/json;charset=UTF-8',
    headers: { 'X-Access-Token': localStorage.getItem('token') },
    success: function (res) {
      initCharts(res.data)
    },
  })

  function initCharts(data) {
    $('#todayOrderNumber').html(data.todayOrderNumber)
    $('#totalOrderNumber').html(data.totalOrderNumber)

    const newOption1 = formatOption1(data, option1)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3)
    const newOption4 = formatOption4(data, option4)
    const newOption5 = formatOption5(data, option5)
    const newOption6 = formatOption6(data, option6)
    const newOption7 = formatOption7(data, option7)

    echart1.setOption(newOption1)
    echart2.setOption(newOption2)
    echart3.setOption(newOption3)
    echart4.setOption(newOption4)
    echart5.setOption(newOption5)
    // echart6.setOption(newOption6)
    echart7.setOption(newOption7)

    window.addEventListener('resize', function () {
      echart1.resize()
      echart2.resize()
      echart3.resize()
      echart4.resize()
      echart5.resize()
      // echart6.resize()
      echart7.resize()
    })

    echart7.getZr().on('click', params => {
      console.log(params)
    })
  }

  // mqtt
  // const getMqttConfig = {
  //   ip: `${window.location.hostname}`,
  //   port: 61614,
  //   clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  // }

  // const client = new PahoMQTT.Client(getMqttConfig.ip, getMqttConfig.port, getMqttConfig.clientId)

  // client.onConnectionLost = responseObject => {
  //   if (responseObject.errorCode !== 0) {
  //     console.log('onConnectionLost:' + responseObject.errorMessage)
  //   }
  // }
  // client.onMessageArrived = message => {
  //   console.log(JSON.parse(message.payloadString))
  // }

  // client.connect({
  //   onSuccess: () => {
  //     client.subscribe(`device_data_${gateway}`)
  //     client.subscribe(`card_data_${gateway}`)
  //     const message = new PahoMQTT.Message('Hello')
  //     message.destinationName = 'World'
  //     client.send(message)
  //   },
  // })
})
