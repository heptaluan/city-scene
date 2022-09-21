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
} from './options.js'
import { geoData } from './xinxiang.js'
import { PahoMQTT } from './mqtt.js'
import { lineMap } from '../three/index.js'

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
    $('#canvas').width($(window).width()).height($(window).height())
    animation()
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

  // 两小时刷新一次页面
  setInterval(function () {
    window.location.reload()
  }, 1000 * 120 * 60)

  // ===========================================================

  // echarts.registerMap('xinxiang', geoData)
  let line = null

  const echart1 = echarts.init(document.getElementById('echart1'))
  const echart2 = echarts.init(document.getElementById('echart2'))
  const echart3 = echarts.init(document.getElementById('echart3'))
  const echart4 = echarts.init(document.getElementById('echart4'))
  const echart5 = echarts.init(document.getElementById('echart5'))
  const echart6 = echarts.init(document.getElementById('echart6'))

  let todayNum = 0,
    totalNum = 0

  const getViewDataUrl = getViewData()

  $.ajax({
    url: getViewDataUrl,
    type: 'POST',
    contentType: 'application/json;charset=UTF-8',
    headers: { 'X-Access-Token': localStorage.getItem('token') },
    success: function (res) {
      initCharts(res.data)
    },
    error: function (res) {
      if (res.responseJSON.code === 500) {
        localStorage.setItem('token', '')
        window.location = './login.html'
      }
    },
  })

  function initCharts(data) {
    if (!data) {
      return
    }

    // 保存之前的数据
    todayNum = data.todayOrderNumber
    totalNum = data.totalOrderNumber

    $('#todayOrderNumber').countTo({
      from: 0,
      to: data.todayOrderNumber,
      speed: 1500,
      refreshInterval: 50,
    })

    $('#totalOrderNumber').countTo({
      from: 0,
      to: data.totalOrderNumber,
      speed: 1500,
      refreshInterval: 50,
    })

    line = new lineMap(data, geoData)
    line.init()

    const newOption1 = formatOption1(data, option1)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3)
    const newOption4 = formatOption4(data, option4)
    const newOption5 = formatOption5(data, option5)
    const newOption6 = formatOption6(data, option6)

    echart1.setOption(newOption1)
    echart2.setOption(newOption2)
    echart3.setOption(newOption3)
    echart4.setOption(newOption4)
    echart5.setOption(newOption5)
    echart6.setOption(newOption6)

    window.addEventListener('resize', function () {
      echart1.resize()
      echart2.resize()
      echart3.resize()
      echart4.resize()
      echart5.resize()
      echart6.resize()
    })
  }

  // ===========================================================

  $('#showBarChart').click(function () {
    if ($(this).html() === '隐藏检测点') {
      $(this).html('显示检测点')
      line.map.children.map(item => {
        if (item.geometry && item.geometry.type === 'CylinderGeometry') {
          line.setupObjectScaleAnimation(item, item.scale, { x: 0, y: 0, z: 0 }, 1000, 100, TWEEN.Easing.Quadratic.Out)
        }
      })
      line.barAnimation()
    } else {
      $(this).html('隐藏检测点')
      line.map.children.map(item => {
        if (item.geometry && item.geometry.type === 'CylinderGeometry') {
          line.setupObjectScaleAnimation(item, item.scale, { x: 1, y: 1, z: 1 }, 1000, 100, TWEEN.Easing.Quadratic.Out)
        }
      })
      line.barAnimation()
    }
  })

  // $('.head').click(function () {
  //   line.createFirework('4134944077340737582')
  //   line.createFirework('4134944077340737676')
  //   line.createFirework('1548977336021135362')
  //   line.createFirework('4134944077340737538')
  //   line.createFirework('1548956063987642370')
  //   line.createFirework('4134944077340737562')
  //   line.createFirework('4134944077340737583')
  //   line.createFirework('4134944077340737677')
  //   line.createFirework('4134944077340737555')
  // })
  // $('#fire1').click(function () {
  //   line.createFirework('4134944077340737582')
  //   line.createFirework('4134944077340737676')
  //   line.createFirework('1548977336021135362')
  //   line.createFirework('4134944077340737538')
  // })
  // $('#fire2').click(function () {
  //   line.createFirework('1548956063987642370')
  //   line.createFirework('4134944077340737562')
  //   line.createFirework('4134944077340737583')
  //   line.createFirework('4134944077340737677')
  //   line.createFirework('4134944077340737555')
  // })

  // ===========================================================

  // mqtt
  var getMqttConfig = {
    ip: `106.15.180.169`,
    port: 8083,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  }

  var client = new PahoMQTT.Client(getMqttConfig.ip, getMqttConfig.port, getMqttConfig.clientId)

  client.onConnectionLost = responseObject => {
    console.log(responseObject)
  }

  client.onMessageArrived = message => {
    const data = message.payloadString
    console.log(data)

    let newTodayNum = todayNum
    newTodayNum++

    let newTotalNum = totalNum
    newTotalNum++

    $('#todayOrderNumber').countTo({
      from: todayNum,
      to: newTodayNum,
      speed: 1000,
      refreshInterval: 50,
    })
    todayNum = newTodayNum

    $('#totalOrderNumber').countTo({
      from: totalNum,
      to: newTotalNum,
      speed: 1000,
      refreshInterval: 50,
    })
    totalNum = newTotalNum

    if (message.payloadString) {
      line.createFirework(message.payloadString)
    }
  }

  client.connect({
    userName: 'admin',
    password: 'Tailai@wh@2022',
    cleanSession: false,
    reconnect: true,
    onSuccess: () => {
      // client.subscribe(`test/topic`)
      client.subscribe(`register/orderCreate`)
      // const message = new PahoMQTT.Message('Hello')
      // message.destinationName = 'World'
      // client.send(message)
    },
  })
})
