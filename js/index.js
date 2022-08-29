import { geoData } from './xinxiang.js'
import { symbolStr, domImgSrc, domImgHoverSrc } from './Icon.js'

var myChart = null

// 初始化图表
myChart = echarts.init(document.getElementById('chart-city'))

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.showLoading()

echarts.registerMap('xinxiang', geoData)
myChart.hideLoading()

const chinaName = 'xinxiang'

LoadMap(chinaName, myChart)

// 配置二维地图贴图
function LoadMapping(name, data) {
  var chartOption = {
    geo: {
      show: true,
      roam: true,
      map: name,
      top: '0',
      width: 1024,
      // 贴图颜色
      itemStyle: {
        normal: {
            areaColor: '#21729a',
            borderColor: '#68ebf0', //线
            borderWidth: 0,
            borderJoin: 'round',
            shadowColor: 'rgba(18, 216, 250, 1)', //外发光
            shadowOffsetX: -3,
            shadowOffsetY: 5,
            shadowBlur: 2, //图形阴影的模糊大小
        },
        emphasis: {
            areaColor: '#2f9eff', //悬浮区背景
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
          scale: 6,
          brushType: 'fill',
        },

        hoverAnimation: true,
        
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
            shadowColor: '#0ff',
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
        },
        symbolSize: 16,
        data: [
          { name: '红旗区', value: [113.87523, 35.30367, 122] },
          { name: '卫滨区', value: [113.82578, 35.30211, 222] },
          { name: '凤泉区', value: [113.91507, 35.38399, 444] },
        ],
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
    geo3D: {
      map: name,
      roam: true,
      show: true,
      shading: 'color',
      width: 1024,
      boxHeight: 20,
      label: {
        show: true, //是否显示市
        distance: 130,
        textStyle: {
          color: '#fff',
          fontSize: 24
        },
      },
      itemStyle: {
        color: '#fff',
        opacity: 1, // 透明度
        borderWidth: 1.5, //分界线宽度
        borderColor: '#207fce', //分界线颜色
      },
      colorMaterial: {
        detailTexture: mapBg, // 纹理贴图
        textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
      },
      viewControl: {
        distance: 160, //默认视角距离主体的距离(常用)
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
        data: [
          { name: '红旗区', value: [113.87523, 35.30367, 122] },
          { name: '卫滨区', value: [113.82578, 35.30211, 222] },
          { name: '凤泉区', value: [113.91507, 35.38399, 444] },
        ],
      },
    ],
  }
  myChart.setOption(option, true)
}
