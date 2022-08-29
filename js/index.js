import { geoData } from './xinxiang.js'
import { symbolStr, domImgSrc, domImgHoverSrc } from './Icon.js'

var myChart = null

// 初始化图表
myChart = echarts.init(document.getElementById('chart-city'))

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.showLoading()

echarts.registerMap('xinxiang', geoData)
myChart.hideLoading()

var option = {
  title: {
    text: '测试bar3D、scatter3D、geo3D',
    x: 'left',
    top: '10',
    textStyle: {
      color: '#000',
      fontSize: 14,
    },
  },
  tooltip: {
    show: true,
    // formatter:(params)=>{
    //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
    //   return data;
    // },
  },
  geo3D: {
    map: 'xinxiang',
    show: true,
    roam: true,
    shading: 'realistic',
    realisticMaterial: {
      detailTexture: '../images/bg.jpg',
      roughness: 0,
    },
    itemStyle: {
      areaColor: '#fff',
      opacity: 1,
      borderWidth: 0.4,
      borderColor: '#000',
    },
    label: {
      show: true,
      textStyle: {
        color: '#fff', //地图初始化区域字体颜色
        fontSize: 14,
        opacity: 1,
        backgroundColor: 'rgba(0,23,11,0)',
      },
    },
    emphasis: {
      //当鼠标放上去  地区区域是否显示名称
      label: {
        show: true,
        textStyle: {
          color: '#fff',
          fontSize: 14,
          backgroundColor: 'rgba(0,23,11,0)',
        },
      },
    },
    //shading: 'lambert',
    light: {
      //光照阴影
      main: {
        color: '#fff', //光照颜色
        intensity: 1.2, //光照强度
        //shadowQuality: 'high', //阴影亮度
        shadow: false, //是否显示阴影
        alpha: 55,
        beta: 10,
      },
      ambient: {
        intensity: 0.3,
      },
    },
  },
  series: [
    // 柱状图
    {
      name: 'bar3D',
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      barSize: 1,
      shading: 'lambert',
      opacity: 0.8,
      bevelSize: 0.3,
      label: {
        show: false,
        formatter: '{b}',
      },
      data: [
        { name: '红旗区', value: [113.87523, 35.30367, 122] },
        { name: '卫滨区', value: [113.82578, 35.30211, 222] },
        { name: '凤泉区', value: [113.91507, 35.38399, 444] },
      ],
    },
  ],
}

myChart.setOption(option)
