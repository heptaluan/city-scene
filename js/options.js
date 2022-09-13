const animationDelay = 300

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
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 11,
        },
        rotate: '45',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)',
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
  animationDelay: animationDelay,
}

export const formatOption1 = (data, option) => {
  const list = data.countyList
  const xAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    xAxisData.push(list[i].name)
    seriesData.push(list[i].num)
  }

  option.xAxis.find(item => item.type === 'category').data = xAxisData
  option.series.find(item => item.type === 'line').data = seriesData

  return option
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
    trigger: 'item',
    // formatter: '{a} <br/>{b}: {c} ({d}%)',
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
      data: [],
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
      data: [],
    },
  ],
}

export const formatOption3 = (data, option) => {
  const ageList = data.ageList
  const sexList = data.sexList

  const ageData = []
  const sexData = []

  for (let i = 0; i < ageList.length; i++) {
    ageData.push({
      name: ageList[i].age,
      value: ageList[i].num,
    })
  }

  for (let i = 0; i < sexList.length; i++) {
    sexData.push({
      name: sexList[i].sex,
      value: sexList[i].num,
    })
  }

  option.series.find(item => item.name === '年龄段').data = ageData
  option.series.find(item => item.name === '占比').data = sexData

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
}

export const formatOption5 = (data, option) => {
  const list = data.completionList
  const angleAxisData = []
  const seriesData = []

  for (let i = 0; i < list.length; i++) {
    angleAxisData.push(list[i].name)
    seriesData.push(parseFloat(list[i].num))
  }

  option.angleAxis.data = angleAxisData
  option.series.find(item => item.type === 'bar').data = seriesData

  return option
}

// 右下
export const option6 = {
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
    radius: '80%',
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

export const formatOption6 = (data, option) => {
  const list = data.completionList
  const angleAxisData = []
  const seriesData = []

  // for (let i = 0; i < list.length; i++) {
  //   angleAxisData.push(list[i].name)
  //   seriesData.push(parseFloat(list[i].num))
  // }

  // option.angleAxis.data = angleAxisData
  // option.series.find(item => item.type === 'bar').data = seriesData

  return option
}

// 中间地图

var rangeColorList = [
  '#244779',
  '#244c81',
  '#244e85',
  '#24518a',
  '#24548e',
  '#245996',
  '#245c9b',
  '#2460a1',
  '#2463a6',
  '#2466ab',
  '#2469b0',
  '#246cb5',
  '#256fba',
  '#2572bf',
  '#2884db',
]

export const option7 = {
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
    regions: [],
  },
  tooltip: {
    show: true,
    formatter: params => {
      let data = params.name + '<br/>' + '累计数:' + params.value[2]
      return data
    },
  },
  series: [
    {
      name: 'bar3D',
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      barSize: 0.8,
      shading: 'lambert',
      itemStyle: {
        color: 'rgba(37,213,232,1)',
      },
      data: [],
    },
  ],
}

export const formatOption7 = (data, option) => {
  const list = data.completionList
  const place = data.placeList
  const angleAxisData = []
  const seriesData = []

  console.log(data)
  console.log(option)

  // 处理区域颜色
  const cityList = []
  const city = list.sort(compare)
  for (let i = 0; i < city.length; i++) {
    if (city[i] !== '新乡市经开区' || city[i] !== '新乡市高新区' || city[i] !== '平原新区') {
      cityList.push({
        name: city[i].name.replace('新乡市', ''),
        itemStyle: { color: rangeColorList[i] },
      })
    }
  }

  // 处理柱状图
  const barData = []
  for (let i = 0; i < place.length; i++) {
    barData.push({
      name: place[i].name,
      value: [place[i].longitude, place[i].latitude, place[i].num],
    })
  }

  // for (let i = 0; i < list.length; i++) {
  //   angleAxisData.push(list[i].name)
  //   seriesData.push(parseFloat(list[i].num))
  // }

  // const newCityList = cityList.filter(
  //   item => item.name !== '经开区' && item.name !== '平原新区' && item.name !== '高新区'
  // )
  // option.geo3D.regions = newCityList
  // option.series.find(item => item.type === 'bar3D').data = barData

  return option
}

function compare(obj1, obj2) {
  var val1 = parseFloat(obj1.num)
  var val2 = parseFloat(obj2.num)
  if (val1 < val2) {
    return 1
  } else if (val1 > val2) {
    return -1
  } else {
    return 0
  }
}
