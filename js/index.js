var myChart = null
var loadedDataURL = './map/xinxiang.json'
let mapName = 'xinxiang'

// 初始化图表
myChart = echarts.init(document.getElementById('chart-city'))

// 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
myChart.showLoading()

var domImg = document.createElement('img')
domImg.style.height = domImg.height = domImg.width = domImg.style.width = '8px'
domImg.src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII='

var domImgHover = document.createElement('img')
domImgHover.style.height = domImgHover.height = domImgHover.width = domImgHover.style.width = '8px'
domImgHover.src =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII='

var mapDate = [
  {
    name: '红旗区',
    value: [113.87523, 35.30367],
    datas: 1354,
    img: '../images/icon-1.png',
  },
  {
    name: '卫滨区',
    value: [113.82578, 35.30211],
    datas: 1402,
    img: '../images/icon-2.png',
  },
  {
    name: '凤泉区',
    value: [113.91507, 35.38399],
    datas: 2468,
    img: '../images/icon-3.png',
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

$.getJSON(loadedDataURL, function (geoJson) {
  echarts.registerMap('xinxiang', geoJson)
  myChart.hideLoading()

  var option = {
    backgroundColor: '#020933',
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

    series: [
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
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: 'fill',
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: '#ffff',
            shadowBlur: 10,
            shadowColor: '#333',
          },
        },
        symbol: 'circle',
        symbolSize: [10, 5],
        data: mapDate,
        zlevel: 1,
      },
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
      },
    ],
  }
  myChart.setOption(option)
})
