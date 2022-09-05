import { geoData } from './xinxiang.js'

const animationDelay = 300

// 左上柱状图
export const echarts_1 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart1'))

  var option = {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['商超门店', '教育培训', '房地产', '生活服务', '汽车销售', '旅游酒店', '五金建材'],
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
            type: 'solid',
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1	)',
            width: 1,
            type: 'solid',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
          },
        },
        animationDelay: function (idx) {
          return idx * animationDelay
        },
      },
    ],
  }

  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 左中柱状图
export const echarts_2 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart2'))

  var option = {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
            type: 'solid',
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1	)',
            width: 1,
            type: 'solid',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [1500, 1200, 600, 200, 300, 300, 900],
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#27d08a',
            opacity: 1,
            barBorderRadius: 5,
          },
        },
        animationDelay: function (idx) {
          return idx * animationDelay
        },
      },
    ],
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 右中柱状图
export const echarts_5 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart5'))

  var option = {
    //  backgroundColor: '#00265f',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },

    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '2%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
            type: 'solid',
          },
        },

        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          // rotate:50,
          show: true,
          splitNumber: 15,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          //formatter: '{value} %'
          show: true,
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,.1	)',
            width: 1,
            type: 'solid',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
        barWidth: '35%', //柱子宽度
        // barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: '#2f89cf',
            opacity: 1,
            barBorderRadius: 5,
          },
        },
        animationDelay: function (idx) {
          return idx * animationDelay
        },
      },
    ],
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
}

// 右上折线图
export const echarts_4 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart4'))

  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b',
        },
      },
    },
    legend: {
      top: '0%',
      data: ['安卓', 'IOS'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true,
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
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '安卓',
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
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12,
          },
        },
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4],
      },
      {
        name: 'IOS',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: '#00d887',
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
                  color: 'rgba(0, 216, 135, 0.4)',
                },
                {
                  offset: 0.8,
                  color: 'rgba(0, 216, 135, 0.1)',
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

// 右下饼图
export const echarts_6 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('echart6'))

  var dataStyle = {
    normal: {
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      //shadowBlur: 40,
      //shadowColor: 'rgba(40, 40, 40, 1)',
    },
  }

  var placeHolderStyle = {
    normal: {
      color: 'rgba(255,255,255,.05)',
      label: { show: false },
      labelLine: { show: false },
    },
    emphasis: {
      color: 'rgba(0,0,0,0)',
    },
  }

  var option = {
    color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
    tooltip: {
      show: true,
      formatter: '{a} : {c} ',
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 12,
      bottom: '3%',

      data: ['浙江', '上海', '广东', '北京', '深圳'],
      textStyle: {
        color: 'rgba(255,255,255,.6)',
      },
    },

    series: [
      {
        name: '浙江',
        type: 'pie',
        clockWise: false,
        center: ['50%', '42%'],
        radius: ['59%', '70%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [
          {
            value: 80,
            name: '01',
          },
          {
            value: 20,
            name: 'invisible',
            tooltip: { show: false },
            itemStyle: placeHolderStyle,
          },
        ],
      },
      {
        name: '上海',
        type: 'pie',
        clockWise: false,
        center: ['50%', '42%'],
        radius: ['49%', '60%'],
        itemStyle: dataStyle,
        hoverAnimation: false,
        data: [
          {
            value: 70,
            name: '02',
          },
          {
            value: 30,
            name: 'invisible',
            tooltip: { show: false },
            itemStyle: placeHolderStyle,
          },
        ],
      },
      {
        name: '广东',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['39%', '50%'],
        itemStyle: dataStyle,
        data: [
          {
            value: 65,
            name: '03',
          },
          {
            value: 35,
            name: 'invisible',
            tooltip: { show: false },
            itemStyle: placeHolderStyle,
          },
        ],
      },
      {
        name: '北京',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['29%', '40%'],
        itemStyle: dataStyle,
        data: [
          {
            value: 60,
            name: '04',
          },
          {
            value: 40,
            name: 'invisible',
            tooltip: { show: false },
            itemStyle: placeHolderStyle,
          },
        ],
      },
      {
        name: '深圳',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        center: ['50%', '42%'],
        radius: ['20%', '30%'],
        itemStyle: dataStyle,
        data: [
          {
            value: 50,
            name: '05',
          },
          {
            value: 50,
            name: 'invisible',
            tooltip: { show: false },
            itemStyle: placeHolderStyle,
          },
        ],
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

// 左下环图一
export const echarts_31 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb1'))
  var option = {
    title: [
      {
        text: '年龄分布',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10]
      },
    },
    legend: {
      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' },
        ],
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

// 左下环图二
export const echarts_32 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb2'))

  var option = {
    title: [
      {
        text: '职业分布',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10]
      },
    },
    legend: {
      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['电子商务', '教育', 'IT/互联网', '金融', '学生', '其他'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 5, name: '电子商务' },
          { value: 1, name: '教育' },
          { value: 6, name: 'IT/互联网' },
          { value: 2, name: '金融' },
          { value: 1, name: '学生' },
          { value: 1, name: '其他' },
        ],
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

// 左下环图三
export const echarts_33 = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('fb3'))

  var option = {
    title: [
      {
        text: '兴趣分布',
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: '16',
        },
      },
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      position: function (p) {
        //其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10]
      },
    },
    legend: {
      top: '70%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['汽车', '旅游', '财经', '教育', '软件', '其他'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    series: [
      {
        name: '兴趣分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 2, name: '汽车' },
          { value: 3, name: '旅游' },
          { value: 1, name: '财经' },
          { value: 4, name: '教育' },
          { value: 8, name: '软件' },
          { value: 1, name: '其他' },
        ],
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
