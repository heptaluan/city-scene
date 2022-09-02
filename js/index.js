import {
  echarts_1,
  echarts_2,
  echarts_4,
  echarts_31,
  echarts_32,
  echarts_33,
  echarts_5,
  echarts_6,
  echarts_map,
} from './options.js'

$(window).load(function () {
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

  echarts_1()
  echarts_2()
  echarts_4()
  echarts_31()
  echarts_32()
  echarts_33()
  echarts_5()
  echarts_6()
  echarts_map()

  var t = null
  t = setTimeout(time, 1000)
  function time() {
    clearTimeout(t)
    var dt = new Date()
    var y = dt.getFullYear()
    var mt = dt.getMonth() + 1
    var day = dt.getDate()
    var h = dt.getHours()
    var m = dt.getMinutes()
    var s = dt.getSeconds()
    document.getElementById('showTime').innerHTML = y + '年' + mt + '月' + day + '-' + h + '时' + m + '分' + s + '秒'
    t = setTimeout(time, 1000)
  }
})
