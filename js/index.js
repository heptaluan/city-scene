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
  option51,
  formatOption51,
  option6,
  formatOption6,
  option61,
  formatOption61,
} from './options.js'
import { geoData } from './xinxiang.js'
import { PahoMQTT } from './mqtt.js'
import { lineMap } from '../three/index.js'

$(window).load(function () {
  // 判断是否登录
  if (!localStorage.getItem('token')) {
    window.location = './login.html'
  }

  var os = (function () {
    var ua = navigator.userAgent,
      isWindowsPhone = /(?:Windows Phone)/.test(ua),
      isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
      isAndroid = /(?:Android)/.test(ua),
      isFireFox = /(?:Firefox)/.test(ua),
      isTablet =
        /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
      isPhone = /(?:iPhone)/.test(ua) && !isTablet,
      isPc = !isPhone && !isAndroid && !isSymbian
    return {
      isTablet: isTablet,
      isPhone: isPhone,
      isAndroid: isAndroid,
      isPc: isPc,
    }
  })()

  const selectButton = document.getElementById('selectButton')

  if (os.isAndroid || os.isPhone) {
    document.querySelector('body').classList.add('mobile')
    document.getElementById('showBarChart').style.display = 'none'
    document.getElementById('provinceInfo').style.display = 'none'
    document.getElementById('districtInfo').style.display = 'none'
    document.getElementById('placeInfo').style.display = 'none'
    document.getElementById('mark').style.opacity = '1'
    // 添加点击提示
    if (localStorage.getItem('clicked') !== 'true') {
      const top = selectButton.getBoundingClientRect().top
      $('.tips').css({
        top: top - 3 + 'px',
      })
      setTimeout(() => {
        $('.tips-box').fadeIn(800)
        $('#selectButton').css({
          background: 'rgb(130 154 231 / 60%)',
        })
      }, 2500)
      $('.mobile').css('overflow', 'hidden')
    }

    $(document).on('click', function () {
      if (os.isAndroid || os.isPhone) {
        localStorage.setItem('clicked', 'true')
        $('.mobile').css({
          'overflow-y': 'auto',
          'overflow-x': 'hidden',
        })
        $('.tips-box').fadeOut(500)
        $('#selectButton').css({
          background: 'rgba(101, 132, 226, 0.1)',
        })
      }
    })

    window.addEventListener('orientationchange', windowResize)

    windowResize()
    function windowResize() {
      let box = document.querySelector('#box')
      if (window.orientation == 90 || window.orientation == -90) {
        // 横屏
        $('body').css({
          background: '#000',
        })
      } else {
        // 竖屏
        $('body').css({
          background: 'url(../images/loginBg.jpg)',
          backgroundSize: '100% 100%',
        })
      }
    }
  } else {
    document.getElementById('mark').style.display = 'none'
    selectButton.style.display = 'none'
  }

  var whei = $(window).width()
  $('html').css({ fontSize: whei / 20 })
  $(window).resize(function () {
    var whei = $(window).width()
    $('html').css({ fontSize: whei / 20 })
    $('#canvas').width($(window).width()).height($(window).height())
    // animation()
  })

  $('.loading').fadeOut(1500)

  // ===========================================================

  function getTime() {
    var myDate = new Date()
    var myYear = myDate.getFullYear()
    var myMonth = myDate.getMonth() + 1
    var myToday = myDate.getDate()
    var myDay = myDate.getDay()
    var myHour = myDate.getHours()
    var myMinute = myDate.getMinutes()
    var mySecond = myDate.getSeconds()
    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    var nowTime

    nowTime =
      myYear +
      '年' +
      fillZero(myMonth) +
      '月' +
      fillZero(myToday) +
      '日' +
      '&nbsp;&nbsp;' +
      fillZero(myHour) +
      ':' +
      fillZero(myMinute) +
      ':' +
      fillZero(mySecond) +
      '&nbsp;&nbsp;' +
      week[myDay] +
      '&nbsp;&nbsp;'
    $('#time').html(nowTime)
  }

  function fillZero(str) {
    var realNum
    if (str < 10) {
      realNum = '0' + str
    } else {
      realNum = str
    }
    return realNum
  }

  setInterval(getTime, 1000)

  // ===========================================================

  // ===========================================================

  // echarts.registerMap('xinxiang', geoData)
  let line = null

  let echart1 = echarts.init(document.getElementById('echart1'))
  let echart2 = echarts.init(document.getElementById('echart2'))
  let echart3 = echarts.init(document.getElementById('echart3'))
  let echart4 = echarts.init(document.getElementById('echart4'))
  let echart5 = echarts.init(document.getElementById('echart5'))
  let echart6 = echarts.init(document.getElementById('echart6'))

  let todayNum = 0,
    totalNum = 0

  // 初始化
  handleGetAllData(true)
  initAllAnime()

  // 空白区域点击事件
  function handleGetAllData(type) {
    $.ajax({
      url: getAllDataUrl(),
      type: 'POST',
      contentType: 'application/json;charset=UTF-8',
      headers: { 'X-Access-Token': localStorage.getItem('token') },
      success: function (res) {
        if (res.code === 200) {
          if (type) {
            initPage(res.data)
          } else {
            initAll(res.data)
          }
        } else {
          console.log(`连接超时`)
        }
      },
      error: function (res) {
        if (res.responseJSON.code === 500) {
          localStorage.setItem('token', '')
          window.location = './login.html'
        }
      },
    })
  }

  // 区县点击事件
  function handleGetCityData(city) {
    $.ajax({
      url: getCityDataUrl(),
      data: {
        marketId: city.marketId,
      },
      type: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      headers: { 'X-Access-Token': localStorage.getItem('token') },
      success: function (res) {
        if (res.code === 200) {
          initCity(res.data, city.name)
        } else {
          console.log(`连接超时`)
        }
      },
      error: function (res) {
        if (res.responseJSON.code === 500) {
          localStorage.setItem('token', '')
          window.location = './login.html'
        }
      },
    })
  }

  // 初始化全部图表
  function initPage(data) {
    if (!data) {
      return false
    }

    // 保存之前的数据
    todayNum = data.todayOrderNumber
    totalNum = data.totalOrderNumber

    setTimeout(() => {
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
    }, 1000)

    if (os.isAndroid || os.isPhone) {
      console.log(`移动端`)
    } else {
      line = new lineMap(data, geoData)
      line.init()
    }

    anime({
      targets: '.mapContainer',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 1500,
    })

    const newOption1 = formatOption1(data, option1)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3)
    const newOption4 = formatOption4(data, option4)
    const newOption5 = formatOption5(data, option5)
    const newOption6 = formatOption6(data, option6)

    echart1.setOption(newOption1, true)
    echart2.setOption(newOption2, true)
    echart3.setOption(newOption3, true)
    echart4.setOption(newOption4, true)
    echart5.setOption(newOption5, true)
    echart6.setOption(newOption6, true)

    $('#title1').html('区县检测累计数')
    $('#title2').html('月度检测数量')
    $('#title3').html('区县当日检测量排名')
    $('#title4').html('机构检测累计量排名')
    $('#title5').html('区县目标完成度')
    $('#title6').html('高风险复查比')

    window.addEventListener('resize', function () {
      echart1.resize()
      echart2.resize()
      echart3.resize()
      echart4.resize()
      echart5.resize()
      echart6.resize()
    })
  }

  // 空白区域点击
  window.flag = true

  function initAll(data, name) {
    if (!data) {
      return false
    }

    if (window.flag) {
      anime({
        targets: '.left-box .boxall',
        translateX: '-153%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: function (el, i, l) {
          return i * 100
        },
      })

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

      $('#totalOrderTitle').html('总检测数')
      $('#todayOrderTitle').html('当日检测数')

      setTimeout(() => {
        echart1.clear()
        echart1 = echarts.init(document.getElementById('echart1'))

        echart2.clear()
        echart2 = echarts.init(document.getElementById('echart2'))

        echart3.clear()
        echart3 = echarts.init(document.getElementById('echart3'))

        echart4.clear()
        echart4 = echarts.init(document.getElementById('echart4'))

        echart5.clear()
        echart5 = echarts.init(document.getElementById('echart5'))

        echart6.clear()
        echart6 = echarts.init(document.getElementById('echart6'))

        const newOption1 = formatOption1(data, option1)
        const newOption2 = formatOption2(data, option2)
        const newOption3 = formatOption3(data, option3)
        const newOption4 = formatOption4(data, option4)
        const newOption5 = formatOption5(data, option5)
        const newOption6 = formatOption6(data, option6)

        echart1.setOption(newOption1, true)
        echart2.setOption(newOption2, true)
        echart3.setOption(newOption3, true)
        echart4.setOption(newOption4, true)
        echart5.setOption(newOption5, true)
        echart6.setOption(newOption6, true)

        $('#title1').html('区县检测累计数')
        $('#title2').html('月度检测数量')
        $('#title3').html('区县当日检测量排名')
        $('#title4').html('机构检测累计量排名')
        $('#title5').html('区县目标完成度')
        $('#title6').html('高风险复查比')
      }, 800)

      anime({
        targets: '.right-box .boxall',
        translateX: '153%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: function (el, i, l) {
          return i * 100
        },
        complete: function (anim) {
          console.log(anim)
          window.flag = true
        },
      })
      window.flag = false
    }
  }

  // 区域点击
  function initCity(data, name) {
    if (!data) {
      return false
    }

    if (window.flag) {
      anime({
        targets: '.left-box .boxall',
        translateX: '-153%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: function (el, i, l) {
          return i * 100
        },
      })

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

      $('#totalOrderTitle').html(`${name}总检测数`)
      $('#todayOrderTitle').html(`${name}当日检测数`)

      setTimeout(() => {
        echart1.clear()
        echart1 = echarts.init(document.getElementById('echart1'))

        echart2.clear()
        echart2 = echarts.init(document.getElementById('echart2'))

        echart3.clear()
        echart3 = echarts.init(document.getElementById('echart3'))

        echart4.clear()
        echart4 = echarts.init(document.getElementById('echart4'))

        echart5.clear()
        echart5 = echarts.init(document.getElementById('echart5'))

        echart6.clear()
        echart6 = echarts.init(document.getElementById('echart6'))

        const newOption1 = formatOption1(data, option1, name)
        const newOption2 = formatOption2(data, option2)
        const newOption3 = formatOption3(data, option3, name)
        const newOption4 = formatOption4(data, option4, name)
        const newOption51 = formatOption51(data, option51)
        const newOption61 = formatOption61(data, option61)

        echart1.setOption(newOption1, true)
        echart2.setOption(newOption2, true)
        echart3.setOption(newOption3, true)
        echart4.setOption(newOption4, true)
        echart5.setOption(newOption51, true)
        echart6.setOption(newOption61, true)

        $('#title1').html(`${name}检测累计数`)
        $('#title2').html(`${name}月度检测数量`)
        $('#title3').html(`${name}当日检测量排名`)
        $('#title4').html(`${name}机构检测累计量排名`)
        $('#title5').html(`${name}目标完成度`)
        $('#title6').html(`${name}检测状态统计数`)
      }, 800)

      anime({
        targets: '.right-box .boxall',
        translateX: '153%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        delay: function (el, i, l) {
          return i * 100
        },
        complete: function (anim) {
          console.log(anim)
          window.flag = true
        },
      })
      window.flag = false
    }
  }

  function initAllAnime() {
    let offset = ''

    if (os.isAndroid || os.isPhone) {
      offset = '151.5%'
    } else {
      offset = '153%'
    }

    anime({
      targets: '.left-box .boxall',
      translateX: offset,
      easing: 'easeInOutQuad',
      delay: function (el, i, l) {
        return i * 300 + 1000
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100
      },
    })

    anime({
      targets: '.right-box .boxall',
      translateX: '-' + offset,
      easing: 'easeInOutQuad',
      delay: function (el, i, l) {
        return i * 300 + 1000
      },
      endDelay: function (el, i, l) {
        return (l - i) * 100
      },
    })

    anime({
      targets: '.bar',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 1500,
    })

    anime({
      targets: '#selectButton',
      opacity: 1,
      easing: 'easeInOutQuad',
      delay: 1000,
    })

    anime({
      targets: '.head',
      translateY: ['-150%', 0],
      easing: 'easeInOutQuad',
      delay: 1000,
    })
  }

  window.handleGetAllData = handleGetAllData
  window.handleGetCityData = handleGetCityData

  // ===========================================================

  // ===========================================================

  // 移动端下拉框事件
  if (os.isAndroid || os.isPhone) {
    window.handleGetAllData = null
    window.handleGetCityData = null

    new MobileSelect({
      trigger: document.querySelector('#selectButton'),
      title: '区县选择',
      wheels: [
        {
          data: [
            { id: 'null', value: '全部区县' },
            { id: '1548972812246167553', value: '辉县市' },
            { id: '1548969216754561025', value: '经开区' },
            { id: '1548976790476402690', value: '牧野区' },
            { id: '1548976492823425025', value: '卫滨区' },
            { id: '1548955005760548866', value: '长垣市' },
            { id: '1548971701611245570', value: '高新区' },
            { id: '1548976200065200130', value: '红旗区' },
            { id: '1548975651899027457', value: '封丘县' },
            { id: '1548977101446295553', value: '凤泉区' },
            { id: '1548974747355426818', value: '延津县' },
            { id: '1548962832692523010', value: '原阳县' },
            { id: '1548977250742546434', value: '新乡县' },
            { id: '1548972316814979074', value: '卫辉市' },
            { id: '1548975926726602754', value: '获嘉县' },
            { id: '1548962078510526465', value: '平原新区' },
          ],
        },
      ],
      initValue: '全部区县',
      onChange: function (data, indexArr, msInstance) {
        if (data[0].id !== 'null') {
          window.targetPlaceId = data[0].id
          window.targetPlaceName = data[0].value
          $.ajax({
            url: getCityDataUrl(),
            data: {
              marketId: data[0].id,
            },
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            headers: { 'X-Access-Token': localStorage.getItem('token') },
            success: function (res) {
              if (res.code === 200) {
                updateMobileChart(res.data, data[0].value)
              } else {
                console.log(`连接超时`)
              }
            },
            error: function (res) {
              if (res.responseJSON.code === 500) {
                localStorage.setItem('token', '')
                window.location = './login.html'
              }
            },
          })
        } else {
          window.targetPlaceId = null
          window.targetPlaceName = ''
          $.ajax({
            url: getAllDataUrl(),
            type: 'POST',
            contentType: 'application/json;charset=UTF-8',
            headers: { 'X-Access-Token': localStorage.getItem('token') },
            success: function (res) {
              if (res.code === 200) {
                updateMobileAllChart(res.data, null)
              } else {
                console.log(`连接超时`)
              }
            },
            error: function (res) {
              if (res.responseJSON.code === 500) {
                localStorage.setItem('token', '')
                window.location = './login.html'
              }
            },
          })
        }
      },
    })
  }

  function updateMobileChart(data, name) {
    if (!data) {
      return false
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

    $('#totalOrderTitle').html(`${name}总检测数`)
    $('#todayOrderTitle').html(`${name}当日检测数`)

    echart1.clear()
    echart1 = echarts.init(document.getElementById('echart1'))

    echart2.clear()
    echart2 = echarts.init(document.getElementById('echart2'))

    echart3.clear()
    echart3 = echarts.init(document.getElementById('echart3'))

    echart4.clear()
    echart4 = echarts.init(document.getElementById('echart4'))

    echart5.clear()
    echart5 = echarts.init(document.getElementById('echart5'))

    echart6.clear()
    echart6 = echarts.init(document.getElementById('echart6'))

    const newOption1 = formatOption1(data, option1, name)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3, name)
    const newOption4 = formatOption4(data, option4, name)
    const newOption51 = formatOption51(data, option51)
    const newOption61 = formatOption61(data, option61)

    echart1.setOption(newOption1, true)
    echart2.setOption(newOption2, true)
    echart3.setOption(newOption3, true)
    echart4.setOption(newOption4, true)
    echart5.setOption(newOption51, true)
    echart6.setOption(newOption61, true)

    $('#title1').html(`${name}检测累计数`)
    $('#title2').html(`${name}月度检测数量`)
    $('#title3').html(`${name}当日检测量排名`)
    $('#title4').html(`${name}机构检测累计量排名`)
    $('#title5').html(`${name}目标完成度`)
    $('#title6').html(`${name}检测状态统计数`)
  }

  function updateMobileAllChart(data) {
    if (!data) {
      return false
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

    $('#totalOrderTitle').html('总检测数')
    $('#todayOrderTitle').html('当日检测数')

    echart1.clear()
    echart1 = echarts.init(document.getElementById('echart1'))

    echart2.clear()
    echart2 = echarts.init(document.getElementById('echart2'))

    echart3.clear()
    echart3 = echarts.init(document.getElementById('echart3'))

    echart4.clear()
    echart4 = echarts.init(document.getElementById('echart4'))

    echart5.clear()
    echart5 = echarts.init(document.getElementById('echart5'))

    echart6.clear()
    echart6 = echarts.init(document.getElementById('echart6'))

    const newOption1 = formatOption1(data, option1)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3)
    const newOption4 = formatOption4(data, option4)
    const newOption5 = formatOption5(data, option5)
    const newOption6 = formatOption6(data, option6)

    echart1.setOption(newOption1, true)
    echart2.setOption(newOption2, true)
    echart3.setOption(newOption3, true)
    echart4.setOption(newOption4, true)
    echart5.setOption(newOption5, true)
    echart6.setOption(newOption6, true)

    $('#title1').html('区县检测累计数')
    $('#title2').html('月度检测数量')
    $('#title3').html('区县当日检测量排名')
    $('#title4').html('机构检测累计量排名')
    $('#title5').html('区县目标完成度')
    $('#title6').html('高风险复查比')
  }

  // ===========================================================

  // ===========================================================

  // 数据同步
  setInterval(function () {
    if (window.targetPlaceId) {
      updateCityData({
        marketId: window.targetPlaceId,
        name: window.targetPlaceName,
      })
    } else {
      updateAllData()
    }
  }, 1000 * 60 * 5)

  // ===========================================================

  // ===========================================================

  // $('#totalOrderNumber').click(function () {
  //   updateAllData()
  // })

  // $('#todayOrderNumber').click(function () {
  //   if (window.targetPlaceId) {
  //     updateCityData({
  //       marketId: window.targetPlaceId,
  //       name: window.targetPlaceName,
  //     })
  //   }
  // })

  function updateAllData() {
    $.ajax({
      url: getAllDataUrl(),
      type: 'POST',
      contentType: 'application/json;charset=UTF-8',
      headers: { 'X-Access-Token': localStorage.getItem('token') },
      success: function (res) {
        if (res.code === 200) {
          updateAll(res.data)
        } else {
          console.log(`连接超时`)
        }
      },
      error: function (res) {
        if (res.responseJSON.code === 500) {
          localStorage.setItem('token', '')
          window.location = './login.html'
        }
      },
    })
  }

  function updateAll(data) {
    if (!data) {
      return false
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

    $('#totalOrderTitle').html('总检测数')
    $('#todayOrderTitle').html('当日检测数')

    echart1.clear()
    echart1 = echarts.init(document.getElementById('echart1'))

    echart2.clear()
    echart2 = echarts.init(document.getElementById('echart2'))

    echart3.clear()
    echart3 = echarts.init(document.getElementById('echart3'))

    echart4.clear()
    echart4 = echarts.init(document.getElementById('echart4'))

    echart5.clear()
    echart5 = echarts.init(document.getElementById('echart5'))

    echart6.clear()
    echart6 = echarts.init(document.getElementById('echart6'))

    const newOption1 = formatOption1(data, option1)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3)
    const newOption4 = formatOption4(data, option4)
    const newOption5 = formatOption5(data, option5)
    const newOption6 = formatOption6(data, option6)

    echart1.setOption(newOption1, true)
    echart2.setOption(newOption2, true)
    echart3.setOption(newOption3, true)
    echart4.setOption(newOption4, true)
    echart5.setOption(newOption5, true)
    echart6.setOption(newOption6, true)

    $('#title1').html('区县检测累计数')
    $('#title2').html('月度检测数量')
    $('#title3').html('区县当日检测量排名')
    $('#title4').html('机构检测累计量排名')
    $('#title5').html('区县目标完成度')
    $('#title6').html('高风险复查比')
  }

  function updateCityData(city) {
    $.ajax({
      url: getCityDataUrl(),
      data: {
        marketId: city.marketId,
      },
      type: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      headers: { 'X-Access-Token': localStorage.getItem('token') },
      success: function (res) {
        if (res.code === 200) {
          updateCity(res.data, city.name)
        } else {
          console.log(`连接超时`)
        }
      },
      error: function (res) {
        if (res.responseJSON.code === 500) {
          localStorage.setItem('token', '')
          window.location = './login.html'
        }
      },
    })
  }

  function updateCity(data, name) {
    if (!data) {
      return false
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

    $('#totalOrderTitle').html(`${name}总检测数`)
    $('#todayOrderTitle').html(`${name}当日检测数`)

    echart1.clear()
    echart1 = echarts.init(document.getElementById('echart1'))

    echart2.clear()
    echart2 = echarts.init(document.getElementById('echart2'))

    echart3.clear()
    echart3 = echarts.init(document.getElementById('echart3'))

    echart4.clear()
    echart4 = echarts.init(document.getElementById('echart4'))

    echart5.clear()
    echart5 = echarts.init(document.getElementById('echart5'))

    echart6.clear()
    echart6 = echarts.init(document.getElementById('echart6'))

    const newOption1 = formatOption1(data, option1, name)
    const newOption2 = formatOption2(data, option2)
    const newOption3 = formatOption3(data, option3, name)
    const newOption4 = formatOption4(data, option4, name)
    const newOption51 = formatOption51(data, option51)
    const newOption61 = formatOption61(data, option61)

    echart1.setOption(newOption1, true)
    echart2.setOption(newOption2, true)
    echart3.setOption(newOption3, true)
    echart4.setOption(newOption4, true)
    echart5.setOption(newOption51, true)
    echart6.setOption(newOption61, true)

    $('#title1').html(`${name}检测累计数`)
    $('#title2').html(`${name}月度检测数量`)
    $('#title3').html(`${name}当日检测量排名`)
    $('#title4').html(`${name}机构检测累计量排名`)
    $('#title5').html(`${name}目标完成度`)
    $('#title6').html(`${name}检测状态统计数`)
  }

  // ===========================================================

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

  var getMqttConfig = {
    ip: `xinxiang.ananpan.com`,
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    port: 443,
    protocol: true,
  }

  // var protocol = document.location.protocol

  // if (protocol === 'https:') {
  //   getMqttConfig.protocol = true
  // } else {
  //   getMqttConfig.protocol = false
  // }

  var client = new PahoMQTT.Client(getMqttConfig.ip, getMqttConfig.port, getMqttConfig.clientId)

  client.onConnectionLost = responseObject => {
    console.log(responseObject)
  }

  client.onMessageArrived = message => {
    const data = message.payloadString
    console.log(data)

    const placeId = data.split('_')[0] // 检测点
    const marketId = data.split('_')[1] // 区县

    let newTodayNum = todayNum
    newTodayNum++

    let newTotalNum = totalNum
    newTotalNum++

    if (
      window.targetPlaceId === undefined ||
      window.targetPlaceId === null ||
      (window.targetPlaceId && window.targetPlaceId === marketId)
    ) {
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
    }

    if (message.payloadString) {
      line.createFirework(placeId)
    }

    // 更新左下图表
    const list = $.extend(true, [], window.chartList)
    const option = $.extend(true, {}, window.chartOption)

    if (window.targetPlaceId) {
      if (window.targetPlaceId && window.targetPlaceId === marketId) {
        const currentItem = list.find(item => item.placeId === placeId)
        currentItem.num++
        list.sort(compare('num'))

        option.xAxis.data = list.map(item => item.name)
        option.series.data = list.map(item => item.num)

        if (option.xAxis.data.length < 6) {
          option.xAxis.axisLabel.interval = 0
        } else {
          option.xAxis.axisLabel.interval = 1
        }

        window.chartList = list
        window.chartOption = option

        echart3.setOption(option, true)
      }
    } else {
      if (marketId) {
        const currentItem = list.find(item => item.marketId === marketId)
        currentItem.num++
        list.sort(compare('num'))

        option.xAxis.data = list.map(item => item.name)
        option.series.data = list.map(item => item.num)

        if (option.xAxis.data.length < 6) {
          option.xAxis.axisLabel.interval = 0
        } else {
          option.xAxis.axisLabel.interval = 1
        }

        window.chartList = list
        window.chartOption = option

        echart3.setOption(option, true)
      }
    }
  }

  client.connect({
    userName: 'admin',
    password: 'Tailai@wh@2022',
    cleanSession: false,
    reconnect: true,
    useSSL: getMqttConfig.protocol,
    onSuccess: () => {
      client.subscribe(`register/orderCreate`)
      // const message = new PahoMQTT.Message('Hello')
      // message.destinationName = 'World'
      // client.send(message)
    },
  })
})

function compare(p) {
  return function (m, n) {
    var a = m[p]
    var b = n[p]
    return b - a
  }
}
