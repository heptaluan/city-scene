var myChart = null
var loadedDataURL = './map/xinxiang.json'
let mapName = 'xinxiang'

setCityChart()

function setCityChart() {
  const allAreaData = []
  if (myChart) {
    myChart.dispose()
  }

  // 初始化图表
  myChart = echarts.init(document.getElementById('chart-city'))

  // 显示加载动画效果,可以在加载数据前手动调用该接口显示加载动画，在数据加载完成后调用 hideLoading 隐藏加载动画。
  myChart.showLoading()

  // 引入JSON文件
  $.getJSON(loadedDataURL, function (geoJson) {
    const data = geoJson.features.map((item, index) => {
      const geoAreaName = item.properties.name
      const currentArea = allAreaData.find(item => {
        return item.name == geoAreaName
      })
      let taskNumber = index,
        volunteerNumber = index
      if (currentArea) {
        taskNumber = currentArea.taskNumber
        volunteerNumber = currentArea.volunteerNumber
      }
      return {
        name: geoAreaName,
        value: volunteerNumber,
        taskNumber: taskNumber,
        volunteerNumber: volunteerNumber * 10,
        // coord: item.properties.center,
        coord: item.properties.centroid,
        selected: true,
        // x: 150,
        // y: 150
      }
    })
    console.log('geoJson:', geoJson)
    // 注册地图名字(tongren)和数据(geoJson)

    echarts.registerMap(mapName, geoJson)

    // 隐藏动画加载效果。
    myChart.hideLoading()

    // 图表配置项
    var option = {
      selectedMode: 'multiple', // 选中效果固话
      tooltip: {
        // 提示框
        show: true,
        trigger: 'item',
        formatter: function (params) {
          return params.name
        },
      },
      geo3D: {
        name: 'map3D',
        type: 'map3D', // map3D / map
        map: mapName,
        label: {
          // 标签的相关设置
          show: true, // (地图上的城市名称)是否显示标签 [ default: false ]
          // distance: 5, // 标签距离图形的距离，在三维的散点图中这个距离是屏幕空间的像素值，其它图中这个距离是相对的三维距离
          //formatter:, // 标签内容格式器
          textStyle: {
            // 标签的字体样式
            color: '#ffffff', // 地图初始化区域字体颜色
            fontSize: 14, // 字体大小
            opacity: 1, // 字体透明度
            backgroundColor: 'rgba(0,23,11,0.5)', // 字体背景色
          },
          // normal:{
          //   show:true,
          //   formatter:function(params){ //标签内容
          //     // console.log(params)
          //     return  params.name;
          //   },
          //   // lineHeight: 20,
          //   backgroundColor:'rgba(255,255,255,.9)',
          //   borderColor:'#80cffd',
          //   borderWidth:'1',
          //   padding:[5,15,4],
          //   color:'#000000',
          //   fontSize: 12,
          //   fontWeight:'normal',
          // },
          emphasis: {
            show: true,
          },
        },
        tooltip: {
          //提示框组件。
          alwaysShowContent: true,
          hoverAnimation: true,
          trigger: 'item', //触发类型 散点图
          enterable: true, //鼠标是否可进入提示框
          transitionDuration: 1, //提示框移动动画过渡时间
          triggerOn: 'click',
          formatter: function (params) {
            // console.log(params.name, 'params.name')
            if (params.name) {
              var str = `
                <div class="map-tooltip">
                  <div class="city-name">${params.name}</div>
                  <div class="city-info">志愿者人数：<span class="city-num">${params.data.volunteerNumber}</span></div>
                  <div class="city-info">活动总数：<span class="city-num">${params.data.taskNumber}</span></div>
                </div>
                `
              return str
            }
          },
          borderWidth: '1px',
          borderRadius: '4',
          borderColor: '#00B2AC',
          textStyle: {
            color: 'rgba(255,255,255,1)',
          },
          padding: [5, 10],
        },
        itemStyle: {
          // 三维地理坐标系组件 中三维图形的视觉属性，包括颜色，透明度，描边等。
          // areaColor: 'rgba(95,158,160,0.5)', // 地图板块的颜色
          areaColor: '#10786c', // 地图板块的颜色
          opacity: 0.3, // 图形的不透明度 [ default: 1 ]
          borderWidth: 2, // (地图板块间的分隔线)图形描边的宽度。加上描边后可以更清晰的区分每个区域 [ default: 0 ]
          borderColor: '#5CFFE0', // 图形描边的颜色。[ default: #333 ]
        },
        data: data,
        // regions: [{
        //   name: '长垣县',
        //   itemStyle: {
        //     opacity: 1,
        //   },
        //   label: {
        //     show: true
        //   },
        // }]
      },
      series: [
        //柱状图
        {
          name: 'bar3D',
          type: 'bar3D',
          coordinateSystem: 'geo3D',
          barSize: 2, //柱子粗细
          shading: 'lambert',
          opacity: 0.8,
          bevelSize: 0.3,
          label: {
            show: false,
            formatter: '{b}',
          },
          data: [
            { name: '红旗区', value: [113.87523, 35.30367, (Math.random() * 300).toFixed(2)] },
            { name: '卫滨区', value: [113.82578, 35.30211, (Math.random() * 300).toFixed(2)] },
            { name: '凤泉区', value: [113.91507, 35.38399, (Math.random() * 300).toFixed(2)] },
          ],
        },
      ],
    }

    // 设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过setOption完成，ECharts 会合并新的参数和数据，然后刷新图表。
    myChart.setOption(option)

  //   let count = 0
  //   setInterval(function() {
  //     option.geo3D.regions[0].name = option.geo3D.data[count].name
  //     myChart.setOption(option);
  //     count ++
  //     if (count === option.geo3D.data.length) {
  //         count = 0
  //     }
  // }, 1000);

    // 动态显示tootip /*map3D中 不生效*/
    // setTimeout(() => {
    //   console.log('dispatchAction');
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: 1
    //   });
    // }, 3000);
  })
}
