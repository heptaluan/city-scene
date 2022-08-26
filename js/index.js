import { geoData } from './xinxiang.js'
import { symbolStr, domImgSrc, domImgHoverSrc } from './Icon.js'

var myChart = null

// 初始化图表
myChart = echarts.init(document.getElementById('chart-city'))

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.showLoading()

var domImg = document.createElement('img')
domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px'
domImg.src = domImgSrc

var domImgHover = document.createElement('img')
domImgHover.style.height = domImgHover.height = domImgHover.width = domImgHover.style.width = '8px'
domImgHover.src = domImgHoverSrc

var mapDate = [
  {
    name: '辉县市',
    value: [113.685875273438, 35.8323744941406],
    datas: 1354,
    img: 'image://../images/icon-1.png',
  },
  {
    name: '长垣县',
    value: [114.976221953125, 35.2949684882813],
    datas: 1402,
    img: 'image://../images/icon-2.png',
  },
  {
    name: '凤泉区',
    value: [113.91507, 35.38399],
    datas: 2468,
    img: 'image://../images/icon-3.png',
  },
  // {
  //   name: '定州市',
  //   value: [115.050014, 38.460198],
  //   datas: 768,
  //   img: 'https://www.isqqw.com/asset/get/s/data-1619321685306-EvjlgDOXi.png',
  // },
  // {
  //   name: '曲阳县',
  //   value: [114.654083, 38.700813],
  //   datas: 589,
  //   img: 'https://www.isqqw.com/asset/get/s/data-1619059838735-QE9mBZmhh.png',
  // },
  // {
  //   name: '唐县',
  //   value: [114.798254, 38.898656],
  //   datas: 1500,
  //   img: 'https://www.isqqw.com/asset/get/s/data-1619321685306-EvjlgDOXi.png',
  // },
]

var img2 = 'image://../images/label-bg.png'

let series = []

let tempList = [['凤泉区', mapDate]]

var targetGeoCoordMap = {
  原阳县: [113.946793242188, 35.1873146796876],
}

const convertData = function (data) {
  let res = []
  for (let i = 0; i < data.length; i++) {
    let dataItem = data[i]
    let fromCoord = dataItem.value
    let toCoord = [114.3, 36.3]
    if (fromCoord && toCoord) {
      res.push({
        fromName: dataItem.name,
        coords: [fromCoord, toCoord],
        value: dataItem.datas,
      })
    }
  }
  return res
}

tempList.map(function (item, i) {
  series.push(
    // 线条
    {
      type: 'lines',
      zlevel: 2,
      effect: {
        show: true,
        period: 4, //箭头指向速度，值越小速度越快
        trailLength: 0, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbol: 'arrow', //箭头图标
        symbolSize: 5, //图标大小
        color: '#FFE269',
        symbol: symbolStr,
        symbolSize: 100,
        // loop: false
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255,226,105,0)',
            },
            {
              offset: 0.5,
              color: 'rgb(255,226,105,0.5)',
            },
            {
              offset: 1,
              color: 'rgb(255,226,105,1)',
            },
          ]),
          width: 0, //尾迹线条宽度
          opacity: 1, //尾迹线条透明度
          curveness: 0, //尾迹线条曲直度
        },
      },
      data: convertData(item[1]),
    },
    // 起始点
    {
      type: 'effectScatter',
      tooltip: {
        show: false,
      },
      coordinateSystem: 'geo',
      rippleEffect: {
        scale: 10,
        brushType: 'stroke',
      },
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          shadowColor: '#0ff',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
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
        },
      },
      label: {
        normal: {
          color: '#fff',
        },
      },
      symbol: 'circle',
      symbolSize: [10, 5],
      data: mapDate,
      zlevel: 1,
    },
    // 终点
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      itemStyle: {
        color: '#f00',
      },
      symbol: function (value, params) {
        return params.data.img
      },
      symbolSize: [32, 41],
      symbolOffset: [0, -20],
      z: 9999,
      data: mapDate,
    }
  )
})

series.push(
  // 地图纹理
  {
    type: 'map',
    roam: false,
    label: {
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
        borderColor: '#2ab8ff',
        borderWidth: 1.5,
        areaColor: {
          image: domImg,
          repeat: 'repeat',
        },
      },
      emphasis: {
        areaColor: '#2ab8ff',
        borderWidth: 1.5,
        color: 'green',
        areaColor: {
          image: domImgHover,
          repeat: 'repeat',
        },
      },
    },
    zoom: 1.1,
    roam: false,
    map: 'xinxiang',
  },
  // label
  {
    type: 'scatter',
    coordinateSystem: 'geo',
    label: {
      normal: {
        show: true,
        formatter: function (params) {
          var name = params.name
          var value = params.data.datas
          var text = `{fline|${value}}\n{tline|${name}}`
          return text
        },
        color: '#fff',
        rich: {
          fline: {
            padding: [0, 25],
            color: '#fff',
            textShadowColor: '#030615',
            textShadowBlur: '0',
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            fontSize: 14,
            fontWeight: 400,
          },
          tline: {
            padding: [0, 27],
            color: '#ABF8FF',
            fontSize: 12,
          },
        },
      },
      emphasis: {
        show: true,
      },
    },
    itemStyle: {
      color: '#00FFF6',
    },
    symbol: img2,
    symbolSize: [100, 50],
    symbolOffset: [0, -60],
    z: 999,
    data: mapDate,
  }
)

console.log(series)

echarts.registerMap('xinxiang', geoData)
myChart.hideLoading()

var option = {
  backgroundColor: 'rgb(2,30,52)',
  geo: {
    map: 'xinxiang',
    aspectScale: 0.75,
    zoom: 1.1,
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#013c62',
        shadowColor: '#182f68',
        shadowOffsetX: 0,
        shadowOffsetY: 25,
      },
      emphasis: {
        areaColor: '#2ab8ff',
        borderWidth: 0,
        color: 'green',
        label: {
          show: false,
        },
      },
    },
  },
  series: series,
}

myChart.setOption(option)
