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
          areaColor: '#244779',
          borderColor: '#0177ff',
        },
        emphasis: {
          areaColor: '#071537',
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
          // stroke
          brushType: 'fill',
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
    backgroundColor: 'rgb(0,0,0,0)',
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
          color: ['#4ab2e5', '#5abead', '#f56321', '#f58f0e', '#d5b314', '#b9be23'],
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
          fontSize: 14, // 字体大小
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
        distance: 160, //默认视角距离主体的距离(常用)
        projection: 'perspective',
        autoRotate: true, //会有自动旋转查看动画出现,可查看每个维度信息
        autoRotateDirection: 'cw', //物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
        autoRotateSpeed: 2, //物体自传的速度
        autoRotateAfterStill: 1, //在鼠标间静止操作后恢复自动旋转的时间隔。在开启 autoRotate 后有效。
        // distance:90,//默认视角距离主体的距离(常用)
        // alpha:90,//视角绕 x 轴，即上下旋转的角度(与beta一起控制视野成像效果)
        // beta: 90, //视角绕 y 轴，即左右旋转的角度。
        // center:[]//视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。
        // zlevel://组件所在的层。
        minAlpha: -36000000,
        maxAlpha: 36000000,
        minBeta: -36000000,
        maxBeta: 36000000,
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
