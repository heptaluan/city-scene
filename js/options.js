import { config } from '../config.js'

let idxTime = 30
let delay = 1500

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

if (os.isAndroid || os.isPhone) {
  idxTime = 10
  delay = 800
}

// 左上
export const option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: 'rgba(206, 0, 128, 1)',
      },
    },
  },
  grid: {
    top: '20',
    right: '2%',
    left: '12%',
    bottom: '20%',
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
        interval: 1,
        rotate: '45',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          type: 'dashed',
        },
      },
      data: [],
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
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          type: 'dashed',
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
      name: '区县累计数',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: 'rgba(206, 0, 128, 1)',
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
                color: 'rgba(206, 0, 128, 0.6)',
              },
              {
                offset: 1,
                color: 'rgba(206, 0, 128, 0.02)',
              },
            ],
            false
          ),
          // shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
      itemStyle: {
        normal: {
          color: 'rgba(206, 0, 128, 1)',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
      },
      data: [],
    },
  ],
  animationDelay: delay,
}

export const formatOption1 = (data, option, name) => {
  if (os.isAndroid || os.isPhone) {
    const list = data.countyList ? data.countyList : data.placeList

    const xAxisData = []
    const seriesData = []

    for (let i = 0; i < list.length; i++) {
      xAxisData.push(list[i].name)
      seriesData.push({
        value: list[i].num,
        groupId: list[i].id,
        name: list[i].name,
      })
    }

    const newOption = {
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
      grid: {
        top: '20',
        right: '2%',
        left: '12%',
        bottom: '20%',
      },
      xAxis: {
        data: ['Animals', 'Fruits', 'Cars'],
        axisLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.8)',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 11,
          },
          interval: 1,
          rotate: '45',
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        axisLabel: {
          formatter: '{value}',
          textStyle: {
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: 11,
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255,0.8)',
          },
        },
        splitLine: {
          show: false,
        },
      },
      dataGroupId: '',
      series: {
        type: 'bar',
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
                  color: 'rgba(0, 239, 252, 1)',
                },
                {
                  offset: 1,
                  color: 'rgba(0, 90, 201, 1)',
                },
              ],
              false
            ),
            shadowColor: 'rgba(0,160,221,1)',
            shadowBlur: 4,
          },
        },
        label: {
          show: true,
          color: '#fff',
          position: 'top',
        },
        data: [
          {
            value: 5,
            groupId: 'animals',
          },
          {
            value: 2,
            groupId: 'fruits',
          },
          {
            value: 4,
            groupId: 'cars',
          },
        ],
        universalTransition: {
          enabled: true,
          divideShape: 'clone',
        },
      },
      animationDelay: delay,
    }

    newOption.xAxis.data = xAxisData.map(item => item.replace(name, ''))
    newOption.series.data = seriesData

    if (newOption.xAxis.data.length < 6) {
      newOption.xAxis.axisLabel.interval = 0
    } else {
      newOption.xAxis.axisLabel.interval = 1
    }

    return newOption
  } else {
    const list = data.countyList ? data.countyList : data.placeList
    let newList = []

    if (data.countyList && data.countyList.length > 0) {
      newList = move(move(list, 0, 6), 3, 8)
    } else {
      newList = list
    }

    const xAxisData = []
    const seriesData = []

    for (let i = 0; i < newList.length; i++) {
      xAxisData.push(newList[i].name)
      seriesData.push(newList[i].num)
    }

    option.xAxis.find(item => item.type === 'category').data = xAxisData.map(item => item.replace(name, ''))
    option.series.find(item => item.type === 'line').data = seriesData

    if (option.xAxis.find(item => item.type === 'category').data.length < 6) {
      option.xAxis.find(item => item.type === 'category').axisLabel.interval = 0
    } else {
      option.xAxis.find(item => item.type === 'category').axisLabel.interval = 1
    }

    return option
  }
}

function move(arr, a, b) {
  let arr_temp = [].concat(arr)
  arr_temp.splice(b, 0, arr_temp.splice(a, 1)[0])
  return arr_temp
}

// 左中
export const option2 = {
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
  grid: {
    top: '20',
    right: '2%',
    left: '12%',
    bottom: '20%',
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisLine: {
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255,0.8)',
        },
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
        interval: 1,
        rotate: '45',
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
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255,0.8)',
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      type: 'bar',
      data: [],
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
                color: 'rgba(0, 239, 252, 1)',
              },
              {
                offset: 1,
                color: 'rgba(0, 90, 201, 1)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0,160,221,1)',
          shadowBlur: 4,
        },
      },
      label: {
        show: true,
        color: '#fff',
        position: 'top',
      },
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption2 = (data, option) => {
  const list = data.monthList
  const xAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    xAxisData.push(list[i].dateMonth)
    seriesData.push(list[i].num)
  }

  option.xAxis.find(item => item.type === 'category').data = xAxisData
  option.series.find(item => item.type === 'bar').data = seriesData

  return option
}

// 左下
export const option3 = {
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
  grid: {
    top: '25',
    right: '2%',
  },
  xAxis: {
    type: 'category',
    data: [],
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
      rotate: '30',
      interval: 1,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
    },
    nameTextStyle: {
      color: '#fff',
      fontSize: 15,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  series: {
    type: 'bar',
    barWidth: '40%',
    data: [],
    label: {
      show: true,
      // formatter: '{c}%', //格式化文字
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
            color: 'rgba(0, 90, 201, 1)',
          },
          {
            offset: 1,
            color: 'rgba(206, 0, 128, 1)',
          },
        ],
        global: false, // 缺省为 false
      },
    },
  },
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption3 = (data, option, name) => {
  let list = data.todayCountList

  if (window.targetPlaceId) {
    list.length = 5
  }

  option.xAxis.data = list.map(item => item.name.replace(name, ''))
  option.series.data = list.map(item => item.num)

  if (option.xAxis.data.length < 6) {
    option.xAxis.axisLabel.interval = 0
  } else {
    option.xAxis.axisLabel.interval = 1
  }

  window.chartList = list
  window.chartOption = option

  return option
}

// 右上
export const option4 = {
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
  grid: {
    top: '20',
    right: '2%',
    left: '12%',
    bottom: '20%',
  },
  xAxis: {
    data: [],
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
      rotate: '30',
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  yAxis: {
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
    },
    nameTextStyle: {
      color: '#fff',
      fontSize: 15,
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: '40%',
      data: [],
      label: {
        show: true,
        color: '#fff',
        position: 'top',
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
              color: 'rgba(206, 0, 128, 1)',
            },
            {
              offset: 1,
              color: 'rgba(0, 90, 201, 1)',
            },
          ],
          global: false, // 缺省为 false
        },
      },
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption4 = (data, option) => {
  const list = data.placeTop5List
  const xAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    xAxisData.push(list[i].name)
    seriesData.push(list[i].num)
  }

  option.xAxis.data = xAxisData
  option.series.find(item => item.type === 'bar').data = seriesData

  return option
}

// 右中
export const option5 = {
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
    formatter: '{a} <br/>{b}: {c} %',
  },
  angleAxis: {
    type: 'category',
    data: [],
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
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
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
      show: false,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
    },
    axisTick: {
      // 坐标轴小标记
      show: true, // 属性show控制显示与否，默认不显示
      inside: false, // 控制小标记是否在grid里
      length: 5, // 属性length控制线长
      lineStyle: {
        // 属性lineStyle控制线条样式
        color: 'rgba(255, 255, 255, 0.2)',
        width: 1,
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  polar: {
    z: 0,
    center: ['50%', '50%'],
    radius: ['5%', '80%'],
  },
  series: [
    {
      type: 'bar',
      data: [12, 24, 33, 44, 43, 45, 41, 41, 43],
      coordinateSystem: 'polar',
      name: '区县目标完成度',
      stack: 'a',
      itemStyle: {
        normal: {
          color(params) {
            const colorList = [
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 1,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: 'rgba(6, 239, 252, 1)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(0, 90, 201, 1)',
                  },
                ],
                global: false,
              },
            ]
            return colorList[params.dataIndex]
          },
        },
      },
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption5 = (data, option) => {
  const list = data.completionList
  const angleAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    angleAxisData.push(list[i].name)
    seriesData.push(parseFloat(list[i].num))
  }

  option.angleAxis.data = angleAxisData.map(item => item.replace('新乡市', ''))
  option.series.find(item => item.type === 'bar').data = seriesData

  return option
}

export const option51 = {
  title: [
    {
      id: 'title',
      text: (0.55 * 100).toFixed(0) + '%',
      left: '50%',
      top: '40%',
      textAlign: 'center',
      textStyle: {
        fontSize: 36,
        fontWeight: '400',
        color: '#fff',
        textAlign: 'center',
        textBorderColor: 'rgba(0, 0, 0, 0)',
        textShadowColor: '#000',
        textShadowBlur: '0',
        textShadowOffsetX: 0,
        textShadowOffsetY: 1,
      },
    },
  ],
  polar: {
    radius: ['80%', '72%'],
    center: ['50%', '50%'],
  },
  angleAxis: {
    max: 100,
    clockwise: false,
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  radiusAxis: {
    type: 'category',
    show: true,
    axisLabel: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
  },
  series: [
    {
      type: 'liquidFill',
      radius: '75%',
      z: 1,
      center: ['50%', '50%'],
      amplitude: 20,
      // color: '#2378f7',
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(0, 90, 201, 1)' },
        { offset: 1, color: 'rgba(0, 239, 252, 1)' },
      ]),
      data: [],
      backgroundStyle: {
        borderWidth: 1,
        color: 'transparent',
      },
      label: {
        normal: {
          formatter: '',
        },
      },
      outline: {
        show: true,
        itemStyle: {
          borderWidth: 0,
        },
        borderDistance: 0,
      },
    },
    {
      name: 'bar',
      type: 'bar',
      roundCap: true,
      z: 2,
      showBackground: true,
      backgroundStyle: {
        color: '#15181e',
      },
      data: [80],
      coordinateSystem: 'polar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              { offset: 0, color: 'rgba(6, 239, 252, 1)' },
              { offset: 0.5, color: 'rgba(167, 14, 144, 1)' },
              { offset: 1, color: 'rgba(0, 90, 201, 1)' },
            ],
            false
          ),
        },
      },
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption51 = (data, option) => {
  const value = data.completionNum
  option.title.find(item => item.id === 'title').text = value + '%'
  option.series.find(item => item.type === 'liquidFill').data = [value / 100, value / 100, value / 100, value / 100]
  return option
}

// 右下
export const option6 = {
  tooltip: {},
  angleAxis: {
    max: Number(Math.max(...config.seriesData)) * 1.2,
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(207,238,252,0.2)',
      },
    },
  },
  radiusAxis: {
    type: 'category',
    nameTextStyle: {
      fontSize: 1, //设置字体大小无效
    },
    data: config.radiusAxisData,
    z: 10,
    axisLabel: {
      interval: 0,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
      },
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  polar: {
    radius: '80%',
  },
  axisLabel: {
    color: '#fff',
  },
  series: [
    {
      type: 'bar',
      data: [
        { value: 0, itemStyle: { color: 'transparent' } },
        { value: 0, itemStyle: { color: 'transparent' } },
        {
          value: config.seriesData[2],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(206, 0, 128, 1)' },
              { offset: 1, color: 'rgba(0, 90, 201, 1)' },
            ]),
          },
        },
        {
          value: config.seriesData[3],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                { offset: 0, color: 'rgba(0, 90, 201, 1)' },
                { offset: 0.9, color: 'rgba(6, 239, 252, 1)' },
                { offset: 1, color: 'rgba(6, 239, 252, 1)' },
              ],
              false
            ),
          },
        },
      ],
      coordinateSystem: 'polar',
      stack: 'a',
    },
  ],
  textStyle: {
    color: 'black',
  },
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption6 = (data, option) => {
  return option
}

export const option61 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '20',
    right: '2%',
    left: '12%',
    bottom: '16%',
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255,0.5)',
          type: 'dashed',
        },
      },
      axisLabel: {
        show: true,
        rotate: '45',
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      nameTextStyle: {
        color: '#fff',
        fontSize: 16,
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 11,
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255,0.5)',
          type: 'dashed',
        },
      },
    },
  ],
  series: [
    {
      type: 'bar',
      data: [],
      label: {
        show: true,
        color: '#fff',
        position: 'top',
      },
      barWidth: '40%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 90, 201, 1)' },
            { offset: 1, color: 'rgba(206, 0, 128, 1)' },
          ]),
        },
      },
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption61 = (data, option) => {
  const list = data.statusList

  const xAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    xAxisData.push(list[i].name)
    seriesData.push(list[i].num)
  }

  option.xAxis.find(item => item.type === 'category').data = xAxisData
  option.series.find(item => item.type === 'bar').data = seriesData

  return option
}
