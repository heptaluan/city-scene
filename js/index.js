import { geoData } from './xinxiang.js'
import { symbolStr, domImgSrc, domImgHoverSrc } from './Icon.js'

var myChart = null

// 初始化图表
myChart = echarts.init(document.getElementById('chart-city'))

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.showLoading()

echarts.registerMap('xinxiang', geoData)
myChart.hideLoading()

let geoCoordMap = {
  海门: [121.15, 31.89],
  鄂尔多斯: [109.781327, 39.608266],
  招远: [120.38, 37.35],
}

var convertData = function (data) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      })
    }
  }
  // console.log(res)
  return res
}

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
  visualMap: [
    {
      type: 'continuous',
      seriesIndex: 0,
      text: ['bar3D'],
      calculable: true,
      max: 300,
      inRange: {
        color: ['#87aa66', '#eba438', '#d94d4c'],
      },
    },
    {
      type: 'continuous',
      seriesIndex: 1,
      text: ['scatter3D'],
      left: 'right',
      max: 100,
      calculable: true,
      inRange: {
        color: ['#000', 'blue', 'purple'],
      },
    },
  ],
  geo3D: {
    map: 'xinxiang',
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
        fontSize: 16,
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
          fontSize: 16,
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
    //柱状图
    {
      name: 'bar3D',
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      barSize: 1, //柱子粗细
      shading: 'lambert',
      opacity: 1,
      bevelSize: 0.3,
      label: {
        show: false,
        formatter: '{b}',
      },
      data: convertData([
        {
          name: '海门',
          value: (Math.random() * 300).toFixed(2),
        },
        {
          name: '鄂尔多斯',
          value: (Math.random() * 300).toFixed(2),
        },
        {
          name: '招远',
          value: (Math.random() * 300).toFixed(2),
        },
      ]),
    },

    {
      name: 'scatter3D',
      type: 'scatter3D',
      coordinateSystem: 'geo3D',
      symbol: 'pin',
      symbolSize: 30,
      opacity: 1,
      label: {
        show: false,
        formatter: '{b}',
      },
      itemStyle: {
        borderWidth: 0.5,
        borderColor: '#fff',
      },
      data: convertData([
        {
          name: '阳泉',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
        {
          name: '莱州',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
        {
          name: '湖州',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
        {
          name: '汕头',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
        {
          name: '昆山',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
        {
          name: '张家口',
          value: (Math.random() * 100 + 50).toFixed(2),
        },
      ]),
    },
  ],
}

myChart.setOption(option)
