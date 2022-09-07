import { geoData } from './xinxiang.js'

const animationDelay = 300

// 左上
export const echarts_1 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart1'))

  let bgColor = '#040811'
  let color = ['#0090FF', '#EE8931', '#8B5CFF']
  let echartData = [
    {
      name: '1月',
      value1: 13512,
      value2: 0,
      value3: 0,
    },
    {
      name: '2月',
      value1: 9806,
      value2: 0,
      value3: 0,
    },
    {
      name: '3月',
      value1: 19727,
      value2: 0,
      value3: 0,
    },
    {
      name: '4月',
      value1: 17046,
      value2: 12689,
      value3: 7479,
    },
    {
      name: '5月',
      value1: 17780,
      value2: 13396,
      value3: 6355,
    },
    {
      name: '6月',
      value1: 19359,
      value2: 13220,
      value3: 5940,
    },
    {
      name: '7月',
      value1: 16229,
      value2: 11836,
      value3: 10234,
    },
    {
      name: '8月',
      value1: 18176,
      value2: 13478,
      value3: 10755,
    },
    {
      name: '9月',
      value1: 18515,
      value2: 12911,
      value3: 9806,
    },
    {
      name: '10月',
      value1: 13658,
      value2: 9479,
      value3: 8613,
    },
    {
      name: '11月',
      value1: 16364,
      value2: 10839,
      value3: 8826,
    },
    {
      name: '12月',
      value1: 13973,
      value2: 8816,
      value3: 7291,
    },
  ]

  let legendItem = ['实际接受服务', '持续接受服务', '完成两次面对面服务']

  let xAxisData = echartData.map(v => v.name)
  //  ["1", "2", "3", "4", "5", "6", "7", "8"]
  let yAxisData1 = echartData.map(v => v.value1)
  // [100, 138, 350, 173, 180, 150, 180, 230]
  let yAxisData2 = echartData.map(v => v.value2)
  // [233, 233, 200, 180, 199, 233, 210, 180]
  let yAxisData3 = echartData.map(v => v.value3)
  //[133,133,100,80,99,133,110,80]
  const hexToRgba = (hex, opacity) => {
    let rgbaColor = ''
    let reg = /^#[\da-f]{6}$/i
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
        '0x' + hex.slice(5, 7)
      )},${opacity})`
    }
    return rgbaColor
  }

  var option = {
    color: color,
    legend: {
      show: false,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let html = ''
        params.forEach(v => {
          console.log(v)
          html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                  color[v.componentIndex]
                };"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
                万元`
        })
        return html
      },
      extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.5)',
          },
        },
        axisLabel: {
          inside: false,
          textStyle: {
            color: 'rgba(255, 255, 255,0.7)',
            fontWeight: 'normal',
            fontSize: '14',
            lineHeight: 22,
          },
        },

        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        // name: '(t)',
        axisLabel: {
          textStyle: {
            color: 'rgba(255, 255, 255,0.7)',
          },
        },
        nameTextStyle: {
          color: 'rgba(255, 255, 255,0.7)',
          fontSize: 12,
          lineHeight: 40,
          padding: [0, 0, 0, -20],
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.5)',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.5)',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: legendItem[0],
        type: 'line',
        showSymbol: false,
        smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 0,
          },
        },
        data: yAxisData1,
      },
      {
        name: legendItem[1],
        type: 'line',
        showSymbol: false,
        smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[1],
            shadowBlur: 0,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 0,
          },
        },
        data: yAxisData2,
      },
      {
        name: legendItem[2],
        type: 'line',
        showSymbol: false,
        smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[2],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[2], 0.5),
            shadowOffsetY: 0,
          },
        },
        data: yAxisData3,
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 左中
export const echarts_2 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart2'))

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(9, 24, 48, 0.5)',
      borderColor: 'rgba(75, 253, 238, 0.4)',
      textStyle: {
        color: '#CFE3FC',
      },
      borderWidth: 1,
    },
    xAxis: [
      {
        type: 'category',
        data: ['七月', '八月', '九月'],
        axisLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.5)',
          },
        },
        axisLabel: {
          margin: 10,
          color: '#e2e9ff',
          textStyle: {
            fontSize: 12,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          formatter: '{value}',
          color: '#e2e9ff',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.5)',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [2000, 1520, 1850],
        barWidth: '30%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0,244,255,1)', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: 'rgba(0,77,167,1)', // 100% 处的颜色
                },
              ],
              false
            ),
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          },
        },
        label: {
          normal: {
            show: true,
            lineHeight: 10,
            formatter: '{c}',
            position: 'top',
            textStyle: {
              color: '#00D6F9',
              fontSize: 12,
            },
          },
        },
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 左下
export const echarts_3 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart3'))

  var gradList = [
    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#03c',
      },
      {
        offset: 1,
        color: '#18f',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#46f',
      },
      {
        offset: 1,
        color: '#4cd',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#3a7',
      },
      {
        offset: 1,
        color: '#4db',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#03c',
      },
      {
        offset: 1,
        color: '#9db',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#06b',
      },
      {
        offset: 1,
        color: '#4bf',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#06b',
      },
      {
        offset: 1,
        color: '#0bb',
      },
    ]),

    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      {
        offset: 0,
        color: '#8ec',
      },
      {
        offset: 1,
        color: '#dea',
      },
    ]),
  ]

  var option = {
    tooltip: {
      confine: false,
      borderWidth: 0,
      padding: [15, 20],
      backgroundColor: 'rgba(0, 51, 204, .9)',
      textStyle: {
        color: '#eef',
        fontSize: 16,
        fontFamily: 'pingfang sc, microsoft yahei',
      },
      formatter: parames => {
        return `${parames.data.name} 男女比例 ${parseInt((100 - parames.data.value) / 10)}：${parseInt(
          parames.data.value / 10
        )}`
      },
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: '需求类型占比',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['55%', '75%'],
        itemStyle: {
          normal: {
            color: function (params) {
              return gradList[params.dataIndex]
            },
            borderColor: '#007',
            borderWidth: 0,
          },
        },
        label: {
          normal: {
            show: false,
            position: 'center',
            formatter: '{value|{c}}\n{label|{b}}',
            rich: {
              value: {
                padding: 5,
                align: 'center',
                verticalAlign: 'middle',
                fontSize: 48,
                fontFamily: 'electronicFont, impact, pingfang sc, microsoft yahei',
                color: '#fff',
              },
              label: {
                align: 'center',
                verticalAlign: 'middle',
                fontSize: 16,
                fontFamily: 'pingfang sc, microsoft yahei',
                color: '#9cf',
              },
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '12',
            },
          },
        },
        labelLine: {
          show: false,
          length: 0,
          length2: 0,
        },
        data: [
          { name: '18-30', value: 10 },
          { name: '31-45', value: 30 },
          { name: '46-60', value: 50 },
          { name: '61-75', value: 10 },
        ],
      },

      {
        name: '刻度间隔',
        type: 'gauge',
        radius: '55%',
        center: ['50%', '50%'],
        startAngle: 0,
        endAngle: 359.9,
        splitNumber: 20,
        hoverAnimation: true,
        splitLine: {
          show: false,
          distance: 20,
          length: 10,
          lineStyle: {
            width: 1,
            color: 'rgba(17, 136, 255, .5)',
          },
        },
        axisTick: {
          // distance: -25,
          length: 20,
          lineStyle: {
            width: 1,
            color: 'rgba(17, 136, 255, .5)',
          },
        },
        axisLabel: {
          show: false,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            opacity: 0,
          },
        },
        detail: {
          show: false,
        },
        data: [0],
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 右上
export const echarts_4 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart4'))

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    xAxis: [
      {
        type: 'category',
        data: [
          'SQL注入',
          '非法访问',
          '其他',
          'DOS攻击',
          '信息爬虫',
          '进出',
          '业务主机',
          '扫描器',
          '恶意攻击',
          '攻击协助',
        ],
        axisLine: {
          lineStyle: {
            color: '#FFFFFF',
          },
        },
        axisLabel: {
          interval: 0,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        min: 0,
        max: 4000,
        interval: 1000,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#ffffff',
          },
          formatter: function (value, index) {
            if (value >= 1000) {
              value = value / 1000 + '000'
            } else if (value < 1000) {
              value
            }
            return value
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#FFFFFF',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.12)',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [2000, 1900, 1700, 1400, 1000, 800, 600, 400, 200, 100],
        barWidth: '22px',
        itemStyle: {
          normal: {
            color: 'rgb(24,176,255)',
          },
        },
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 右中
export const echarts_5 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart5'))

  var option = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(26,34,126,.9)',
      padding: 10,
      borderRadius: 4,
      textStyle: {
        fontSize: 12,
        color: '#fff',
      },
      extraCssText: 'box-shadow:0 0 18px rgba(255,255,255,0.2)',
    },

    angleAxis: {
      type: 'category',
      data: ['区县一', '区县二', '区县三', '区县四', '区县五', '区县六', '区县七', '区县八', '区县九'],
      splitLine: {
        // 分隔线
        show: false,
        // onGap: null,
        lineStyle: {
          // 属性lineStyle（详见lineStyle）控制线条样式
          color: ['rgba(207,238,252,0.2)'],
          width: 1,
          type: 'solid',
        },
      },

      axisLine: {
        // 坐标轴线
        show: false,
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: 'rgba(207,238,252,0.2)',
          width: 1,
          type: 'solid',
        },
      },
      axisTick: {
        // 坐标轴小标记
        show: false, // 属性show控制显示与否，默认不显示
        inside: false, // 控制小标记是否在grid里
        length: 5, // 属性length控制线长
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: 'rgba(207,238,252,0.2)',
          width: 1,
        },
      },
      axisLabel: {
        color: '#fff',
      },
    },

    radiusAxis: {
      splitLine: {
        lineStyle: {
          type: 'solid',
          color: 'rgba(207,238,252,0.2)',
        },
      },
      axisLabel: {
        color: '#fff',
      },
      axisTick: {
        // 坐标轴小标记
        show: true, // 属性show控制显示与否，默认不显示
        inside: false, // 控制小标记是否在grid里
        length: 5, // 属性length控制线长
        lineStyle: {
          // 属性lineStyle控制线条样式
          color: 'rgba(207,238,252,1)',
          width: 1,
        },
      },
    },

    polar: {
      z: 0,
      center: ['50%', '50%'],
      radius: ['5%', '70%'],
    },
    series: [
      {
        type: 'bar',
        data: [12, 24, 33, 44, 43, 45, 41, 41, 43],
        coordinateSystem: 'polar',
        name: '存储总量',
        stack: 'a',
        color: 'rgba(37,213,232,1)',
        z: 0,
      },
      {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1, 1, 3],

        coordinateSystem: 'polar',
        name: '领用总量',
        stack: 'a',
        color: 'rgba(0,100,252,1)',
        z: 0,
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 右下
export const echarts_6 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart6'))

  var option = {
    tooltip: {},
    angleAxis: {
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      type: 'category',
      nameTextStyle: {
        fontSize: 1, //设置字体大小无效
      },
      data: ['周一', '周二', '周三', '周四'],
      z: 10,
    },
    polar: {
      radius: '65%',
    },
    axisLabel: {
      color: '#fff',
    },
    series: [
      {
        type: 'bar',
        data: [94464, 914346, 3242346, 2342634],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#0be7cd' },
              { offset: 1, color: '#13dcca' },
            ]),
          },
        },
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
      },
    ],
    textStyle: {
      color: 'black',
    },
  }

  myChart.setOption(option)

  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 中间地图
export const echarts_map = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('map_1'))

  echarts.registerMap('xinxiang', geoData)
  myChart.hideLoading()

  var chartData = [
    { name: '红旗区', value: [113.87523, 35.30367, 122] },
    { name: '卫滨区', value: [113.82578, 35.30211, 222] },
    { name: '凤泉区', value: [113.91507, 35.38399, 444] },
  ]

  var rangeColorList = [
    '#244779',
    '#244D82',
    '#25528B',
    '#255894',
    '#255D9D',
    '#2663A6',
    '#2668AE',
    '#276EB7',
    '#2773C0',
    '#2779C9',
    '#287ED2',
    '#2884DB',
  ]

  var option = {
    geo3D: {
      map: 'xinxiang',
      boxDepth: 80,
      regionHeight: 2,
      shading: 'realistic',
      // realisticMaterial: {
      //   detailTexture: '../images/map-bg.jpg',
      //   roughness: 0,
      // },
      itemStyle: {
        opacity: 1, // 透明度
        borderWidth: 1, //分界线宽度
        borderColor: '#207fce', //分界线颜色
      },
      viewControl: {
        distance: 95,
        center: [0, -10, 0],
      },
      label: {
        show: true, //是否显示市
        color: '#fff', //文字颜色
        fontSize: 12, //文字大小
        fontFamily: '微软雅黑',
        backgroundColor: 'rgba(0,0,0,0)', //透明度0清空文字背景
      },
      emphasis: {
        label: {
          show: true, //是否显示高亮
          textStyle: {
            color: '#fff', //高亮文字颜色
          },
        },
        itemStyle: {
          color: '#0489d6', //地图高亮颜色
        },
      },
      // 光照
      light: {
        main: {
          color: '#fff',
          intensity: 1.5,
          shadowQuality: 'high',
          shadow: false,
          alpha: 55,
          beta: 10,
        },
        ambient: {
          intensity: 0.3,
        },
      },
      regions: [
        { name: '辉县市', itemStyle: { color: rangeColorList[0] } },
        { name: '原阳县', itemStyle: { color: rangeColorList[1] } },
        { name: '卫辉市', itemStyle: { color: rangeColorList[2] } },
        { name: '封丘县', itemStyle: { color: rangeColorList[3] } },
      ],
    },
    tooltip: {
      show: true,
      formatter: params => {
        let data = params.name + '<br/>' + '值:' + params.value[2]
        return data
      },
    },
    series: [
      {
        name: 'bar3D',
        type: 'bar3D',
        coordinateSystem: 'geo3D',
        barSize: 1,
        shading: 'lambert',
        opacity: 1,
        bevelSize: 0.3,
        minHeight: 0.05,
        label: {
          normal: {
            show: true,
            formatter: function (params) {
              return params.value[2]
            },
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
          },
        },
        emphasis: {
          itemStyle: {
            color: '#e46318',
          },
          label: {
            show: true,
            distance: -2,
            formatter: function (params) {
              var name = params.name
              var value = params.value[2]
              var data = 34
              return `{a|${name}}\n{b|${value}}\n{c|${data}}`
            },
            textStyle: {
              backgroundColor: {
                image: '../images/tip.png',
              },
              padding: [16, 20],
              color: '#E59B0A',
              fontSize: 12,
              height: 50,
              lineHeight: 17,
              rich: {
                a: {
                  color: '#E59B0A',
                  fontSize: 12,
                  align: 'center',
                },
                b: {
                  color: '#0EB1FE',
                  fontSize: 14,
                  fontWeight: 600,

                  align: 'center',
                },
                c: {
                  color: '#FFE82A',
                  fontSize: 12,
                  align: 'center',
                },
              },
            },
          },
        },
        data: chartData,
      },
    ],
  }
  myChart.setOption(option, true)

  window.addEventListener('resize', function () {
    myChart.resize()
  })
}
