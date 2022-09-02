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

  const chinaName = 'xinxiang'

  var chartData = [
    { name: '红旗区', value: [113.87523, 35.30367, 122] },
    { name: '卫滨区', value: [113.82578, 35.30211, 222] },
    { name: '凤泉区', value: [113.91507, 35.38399, 444] },
  ]

  LoadMap(chinaName, myChart)

  // 配置二维地图贴图
  function LoadMapping(name, data) {
    var chartOption = {
      backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#0f378f', // 0% 处的颜色
          },
          {
            offset: 1,
            color: '#fff', // 100% 处的颜色
          },
        ],
        globalCoord: false, // 缺省为 false
      },
      geo: {
        show: true,
        map: name,
        top: '0',
        width: 1024,
        label: {
          position: 'top',
          distance: 5,
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
            },
          },
          emphasis: {
            textStyle: {
              color: '#fff',
            },
          },
        },
        itemStyle: {
          normal: {
            borderColor: 'rgba(192,245,249,.8)',
            borderWidth: 3,
            shadowColor: '#6FFDFF',
            shadowOffsetY: 0,
            shadowBlur: 10,
            areaColor: 'rgba(29,85,139,.6)',
          },
          // normal: {
          //   areaColor: '#3a7fd5',
          //   borderColor: '#0a53e9', //线
          //   shadowColor: '#092f8f', //外发光
          //   shadowBlur: 20,
          // },
          emphasis: {
            areaColor: '#0a2dae', //悬浮区背景
          },
        },
      },
      series: [
        // 涟漪
        {
          type: `effectScatter`,
          coordinateSystem: `geo`,
          showEffectOn: 'render',
          zlevel: 1,
          rippleEffect: {
            period: 5,
            scale: 4,
            // stroke fill
            brushType: 'stroke',
          },
          hoverAnimation: true,
          label: {
            normal: {
              formatter: '{b}',
              position: 'bottom',
              offset: [15, 0],
              color: '#fff',
              show: false,
              fontSize: 16,
            },
          },
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#64fbc5',
                    },
                    {
                      offset: 1,
                      color: '#018ace',
                    },
                  ]),
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#64fbc5',
                    },
                    {
                      offset: 1,
                      color: '#018ace',
                    },
                  ]),
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#168e6d',
                    },
                    {
                      offset: 1,
                      color: '#c78d7b',
                    },
                  ]),
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#61c0f1',
                    },
                    {
                      offset: 1,
                      color: '#6f2eb6',
                    },
                  ]),
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#168e6d',
                    },
                    {
                      offset: 1,
                      color: '#c78d7b',
                    },
                  ]),
                  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      offset: 0,
                      color: '#61c0f1',
                    },
                    {
                      offset: 1,
                      color: '#6f2eb6',
                    },
                  ]),
                ]
                return colorList[params.dataIndex]
              },
              shadowBlur: 10,
              shadowColor: '#333',
            },
          },
          symbolSize: 16,
          data: chartData,
        },
      ],
    }

    return chartOption
  }

  function LoadMap(name, myChart) {
    // 先渲染贴图
    const canvas = document.createElement(`canvas`)
    var mapBg = echarts.init(canvas, null, {
      width: 1024,
      height: 1024,
    })
    const chartOption = LoadMapping(name)
    mapBg.setOption(chartOption)
    // 3D地图渲染
    var option = {
      // 调节柱子颜色
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          text: ['bar3D'],
          calculable: true,
          min: 1000,
          max: 5000,
          inRange: {
            color: ['#4ab2e5', '#b9be23', '#d5b314', '#f58f0e', '#5abead', '#f56321'],
          },
        },
      ],
      geo3D: {
        map: name,
        roam: true,
        shading: 'color',
        width: 1024,
        boxHeight: 20,
        itemStyle: {
          color: '#5a8dce',
          opacity: 1,
          borderWidth: 1,
          borderColor: '#96ebf7',
        },
        label: {
          distance: 130,
          // 标签的相关设置
          show: false, // (地图上的城市名称)是否显示标签 [ default: false ]
          // distance: 5, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
          //formatter:, // 标签内容格式器
          textStyle: {
            // 标签的字体样式
            color: '#ffffff', // 地图初始化区域字体颜色
            fontSize: 16, // 字体大小
            opacity: 1, // 字体透明度
            backgroundColor: 'rgba(0,23,11,0.5)', // 字体背景色
          },
          emphasis: {
            show: true,
          },
        },
        emphasis: {
          label: {
            show: false,
            textStyle: {
              color: '#fff',
              fontSize: 13,
              backgroundColor: 'rgba(0,23,11,1)',
            },
          },
          itemStyle: {
            areaColor: '#498fde', // 高亮时地图板块颜色改变
          },
        },
        colorMaterial: {
          detailTexture: mapBg, // 纹理贴图
          textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
        },
        viewControl: {
          distance: 120, //默认视角距离主体的距离(常用)
          projection: 'perspective',
          autoRotate: true, //会有自动旋转查看动画出现,可查看每个维度信息
          autoRotateDirection: 'cw', //物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
          autoRotateSpeed: 2, //物体自传的速度
          autoRotateAfterStill: 1, //在鼠标间静止操作后恢复自动旋转的时间隔。在开启 autoRotate 后有效。
          // distance:90,//默认视角距离主体的距离(常用)
          // alpha:90,//视角绕 x 轴，即上下旋转的角度(与beta一起控制视野成像效果)
          // beta: 90, //视角绕 y 轴，即左右旋转的角度。
          center: [0, -10, 0], //视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
          // zlevel://组件所在的层。
          minAlpha: -360000,
          maxAlpha: 360000,
          minBeta: -360000,
          maxBeta: 360000,
          animation: true,
          animationDurationUpdate: 1000, // 过渡动画的时长。[ default: 1000 ]
          animationEasingUpdate: 'cubicInOut',
        },
        light: {
          main: {
            intensity: 1,
          },
          ambient: {
            intensity: 1,
            quality: 'high',
          },
          ambientCubemap: {
            exposure: 1.0,
            diffuseIntensity: 2,
            specularIntensity: 2,
          },
        },
      },
      series: [
        {
          type: 'bar3D',
          coordinateSystem: 'geo3D',
          barSize: 1.2,
          bevelSize: 1,
          bevelSmoothness: 10,
          minHeight: 1,
          shading: 'realistic',
          silent: false,
          opacity: 0.6,
          itemStyle: {
            opacity: 0.6,
          },
          label: {
            show: false,
            formatter: function (data) {
              var res = '订单量：' + data.name + ' ' + data.value[2]
              return res
            },
          },
          data: chartData,
        },
      ],
    }
    myChart.setOption(option, true)
  }

  window.addEventListener('resize', function () {
    myChart.resize()
  })
}
