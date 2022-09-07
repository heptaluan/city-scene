import { geoData } from './xinxiang.js'

const animationDelay = 300

// 左上
export const echarts_1 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart1'))

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b',
        },
      },
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)',
          },
        },
        data: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20,
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12,
          },
        },

        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: 'IOS',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: '#0184d5',
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(1, 132, 213, 0.4)',
                },
                {
                  offset: 0.8,
                  color: 'rgba(1, 132, 213, 0.1)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
        },
        itemStyle: {
          normal: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12,
          },
        },
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4],
      },
    ],
    animationDelay: animationDelay,
  }

  // 使用刚指定的配置项和数据显示图表。
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
          show: false,
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

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    color: ['#0f63d6', '#0f8cd6', '#0fa0d6', '#0fb4d6', '#0f78d6'],
    series: [
      {
        name: '占比',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],
        label: {
          position: 'inner',
          fontSize: 14,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1548, name: '男' },
          { value: 775, name: '女' },
        ],
      },
      {
        name: '年龄段',
        type: 'pie',
        radius: ['60%', '85%'],
        labelLine: {
          length: 30,
        },
        label: {
          position: 'inner',
          fontSize: 12,
        },
        data: [
          { value: 1048, name: '18-30' },
          { value: 335, name: '31-45' },
          { value: 310, name: '46-60' },
          { value: 251, name: '61-75' },
        ],
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
      backgroundColor: 'rgba(9, 24, 48, 0.5)',
      borderColor: 'rgba(75, 253, 238, 0.4)',
      textStyle: {
        color: '#CFE3FC',
      },
      borderWidth: 1,
    },
    xAxis: {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisLabel: {
        color: '#e2e9ff',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255,0.5)',
        },
      },
    },
    yAxis: {
      axisLabel: {
        color: '#e2e9ff',
      },
      nameTextStyle: {
        color: '#fff',
        fontSize: 15,
      },
      splitLine: {
        //网格线
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255,0.5)',
        },
      },
    },
    series: [
      {
        type: 'bar',
        barWidth: '40%', //柱条宽度
        data: [220, 182, 191, 234, 290, 330, 310],
        label: {
          //文本标签的样式
          show: true,
          formatter: '{c}%', //格式化文字
          color: '#fff', //文字的颜色
          position: 'top', //文字的位置
        },
        itemStyle: {
          //图形的样式
          color: {
            //渐变色配置
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(19,138,179,1)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(10,73,98,0)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
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
