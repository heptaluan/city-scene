import { config } from '../config.js'

const idxTime = 30
const delay = 1500

// 左上
export const option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#dddc6b',
      },
    },
  },
  grid: {
    top: '10',
    right: '2%',
    bottom: '25%',
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
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
          color: 'rgba(255, 255, 255,0.5)',
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
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255,0.5)',
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
      data: [],
    },
  ],
  animationDelay: delay,
}

export const formatOption1 = (data, option, name) => {
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
    top: '30',
    right: '2%',
  },
  xAxis: [
    {
      type: 'category',
      data: [],
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
                color: 'rgba(0,244,255,1)',
              },
              {
                offset: 1,
                color: 'rgba(0,77,167,1)',
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

// 左下一
export const option31 = {
  tooltip: {
    trigger: 'item',
  },
  color: ['#0f63d6', '#0f8cd6', '#0fa0d6', '#0fb4d6', '#0f78d6'],
  series: [
    {
      name: '占比',
      type: 'pie',
      selectedMode: 'single',
      radius: ['42%', '80%'],
      label: {
        position: 'inner',
        fontSize: 14,
        color: '#fff',
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
    },
  ],
  animationDelay: function (idx) {
    return idx * idxTime + delay
  },
}

export const formatOption31 = (data, option) => {
  const sexList = data.sexList

  const sexData = []

  for (let i = 0; i < sexList.length; i++) {
    sexData.push({
      name: sexList[i].sex,
      value: sexList[i].num,
    })
  }

  option.series.find(item => item.name === '占比').data = sexData

  return option
}

// 左下二
export const option32 = {
  tooltip: {
    trigger: 'item',
  },
  color: ['#0f63d6', '#0f8cd6', '#0fa0d6', '#0fb4d6', '#0f78d6'],
  series: [
    {
      name: '年龄段',
      type: 'pie',
      selectedMode: 'single',
      radius: ['42%', '80%'],
      label: {
        position: 'inner',
        fontSize: 12,
        color: '#fff',
        lineHeight: 15,
        formatter: params => {
          if (params.data.name === '30岁及以下') {
            return '30岁' + '\n' + '及以下'
          } else if (params.data.name === '61岁及以上') {
            return '61岁' + '\n' + '及以上'
          } else {
            return params.data.name
          }
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      animationDelay: function (idx) {
        return idx * idxTime + delay
      },
    },
  ],
}

export const formatOption32 = (data, option) => {
  const ageList = data.ageList

  const ageData = []

  for (let i = 0; i < ageList.length; i++) {
    ageData.push({
      name: ageList[i].age,
      value: ageList[i].num,
    })
  }

  option.series.find(item => item.name === '年龄段').data = ageData

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
    top: '10',
    right: '2%',
  },
  xAxis: {
    data: [],
    axisLabel: {
      color: '#e2e9ff',
      rotate: '30',
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
      show: false,
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
  },
  series: [
    {
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
    radius: ['5%', '80%'],
  },
  series: [
    {
      type: 'bar',
      data: [12, 24, 33, 44, 43, 45, 41, 41, 43],
      coordinateSystem: 'polar',
      name: '区县目标完成度',
      stack: 'a',
      color: 'rgba(37,213,232,1)',
      z: 0,
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
        fontSize: '32',
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
        { offset: 0, color: '#324791' },
        { offset: 1, color: '#449090' },
      ]),
      data: [0.4, 0.4, 0.4],
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
          color: new echarts.graphic.LinearGradient(0, 0, 0.5, 1, [
            {
              offset: 0,
              color: '#5acef2',
            },
            {
              offset: 0.7,
              color: '#5073fb',
            },
            {
              offset: 1,
              color: '#6ae8d8',
            },
          ]),
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
  return option
}

// 右下
export const option6 = {
  tooltip: {},
  angleAxis: {
    max: Math.max(...config.seriesData) * 1.2,
    splitLine: {
      show: false,
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
      data: config.seriesData,
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
    top: '10',
    right: '2%',
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
        color: '#fff',
        fontSize: 14,
        rotate: '45',
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
        formatter: '{value}',
        color: '#fff',
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
      barWidth: '40%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#0be7cd' },
            { offset: 1, color: '#13dcca' },
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
