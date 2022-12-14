export class lineMap {
  constructor(data, geoData) {
    this.geoData = geoData
    this.data = data
    this.container = document.body

    this.rangeColorList = [
      '#034cb4',
      '#034cb4',
      '#034cb4',
      '#005ac9',
      '#005ac9',
      '#005ac9',
      '#0f7be8',
      '#0f7be8',
      '#0f7be8',
      '#44a2fb',
      '#44a2fb',
      '#44a2fb',
      '#62bffd',
      '#62bffd',
      '#62bffd',
    ]
  }

  init() {
    this.districtInfo = document.getElementById('districtInfo')
    this.placeInfo = document.getElementById('placeInfo')
    // 渲染器
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.domElement.classList.add('mapContainer')
    this.container.appendChild(this.renderer.domElement)
    this.clock = new THREE.Clock()
    // 场景
    this.scene = new THREE.Scene()
    this.Fly = new InitFly({
      texture: '../images/star.png',
    })
    // 相机 透视相机
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.camera.position.set(0, -140, 150)
    this.camera.lookAt(0, 0, 0)

    this.setController() // 设置控制

    this.setLight() // 设置灯光

    this.setRaycaster()

    this.animate()

    this.loadFont() // 加载字体

    // this.loadMapData();

    this.setResize() // 绑定浏览器缩放事件
    this.depth = 4
    this.placeList = []

    this.districtMeshList = []
    this.districtDataList = []
    this.districtColorList = []
    this.waveArr = []
    this.itemHeight = 27 //柱子最大的高度，以此作为比例映射显示高度
    this.boxR = 0.3 //柱子半径
    this.gapWidth = 0.5 //柱子间隙
    this.textOffset = 0.8 //显示数量偏移柱子量
    this.fontSize = 12
    this.counter1 = 0
    this.districtMeshColor = '#8fd7ff'
    this.districtSideColor = '#28316c'
    this.fadeOutColor = 'rgba(2,51,121)'
    this.isHighlight = false
  }

  setResize() {
    let _this = this
    window.addEventListener('resize', function () {
      _this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  loadMapData() {
    this.placeList = this.data.placeList
    this.initMap(this.geoData)
  }

  loadFont() {
    //加载中文字体
    var loader = new THREE.FontLoader()
    var _this = this
    loader.load('font/chinese.json', function (response) {
      _this.font = response
      _this.loadMapData()
    })
  }

  createTextLabel(text, position, sizeRate) {
    const shapes = this.font.generateShapes(text, this.fontSize / sizeRate) //（文本，字体大小）
    const geometry = new THREE.ShapeBufferGeometry(shapes)
    const material = new THREE.MeshBasicMaterial()
    const textMesh = new THREE.Mesh(geometry, material)
    textMesh.position.set(position.x, position.y, position.z - 0.6)
    // textMesh.rotateX(Math.PI / 2)
    this.scene.add(textMesh)
  }

  createWave(position) {
    const textureLoader = new THREE.TextureLoader() // TextureLoader创建一个纹理加载器对象
    const texture = textureLoader.load('../images/wave.png')
    const geometry = new THREE.PlaneBufferGeometry(0, 0)
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: '#ffea00',
      map: texture,
      transparent: true, //使用背景透明的png贴图，注意开启透明计算
      opacity: 1.0,
      side: THREE.DoubleSide, //双面可见
      depthWrite: false, //禁止写入深度缓冲区数据
    })
    const waveMesh = new THREE.Mesh(geometry, waveMaterial)

    const size = 3
    waveMesh.size = size
    waveMesh.scale.set(size, size, size)
    waveMesh._s = Math.random() * 1 + 1

    waveMesh.position.set(position.x + 0.1, position.y, position.z)
    waveMesh.name = waveMesh.uuid
    this.waveArr.push(waveMesh)
    this.scene.add(waveMesh)

    let tempTimer = setTimeout(() => {
      this.scene.remove(waveMesh)
      for (let i = 0; i < this.waveArr.length; i++) {
        if (this.waveArr[i].name === waveMesh.name) {
          this.waveArr.splice(i, 1)
        }
      }
      clearTimeout(tempTimer)
    }, 3000)
  }

  initMap(chinaJson) {
    // 建一个空对象存放对象
    this.map = new THREE.Object3D()
    let _this = this
    // 墨卡托投影转换
    const projection = d3.geoMercator().center([114.1, 35.21]).scale(5200).translate([-12, 20])
    this.districtDataList = this.data.completionList.map(ele => {
      ele.num = ele.num.replace('%', '')
      return ele.name.includes('新乡市') ? { ...ele, name: ele.name.replace('新乡市', '') } : ele
    })
    this.districtDataList.sort((x, y) => {
      return y.num - x.num
    })

    chinaJson.features.forEach(elem => {
      // 定一个省份3D对象
      // console.log('province: ' ,elem)
      const province = new THREE.Object3D()
      // 每个的 坐标 数组
      const coordinates = elem.geometry.coordinates
      // 循环坐标数组
      // 存下每个区的专属颜色
      const theColor = this.districtColorHandle(elem)

      coordinates.forEach(multiPolygon => {
        multiPolygon.forEach(polygon => {
          const shape = new THREE.Shape()
          const lineMaterial = new THREE.LineBasicMaterial({
            color: '#2953af',
          })
          const lineGeometry = new THREE.Geometry()

          for (let i = 0; i < polygon.length; i++) {
            const [x, y] = projection(polygon[i])
            if (i === 0) {
              shape.moveTo(x, -y)
            }
            shape.lineTo(x, -y)
            lineGeometry.vertices.push(new THREE.Vector3(x, -y, 4.01))
          }

          const extrudeSettings = {
            depth: this.depth,
            bevelEnabled: false,
          }

          const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)

          const topMaterial = new THREE.MeshBasicMaterial({
            color: theColor,
            transparent: false,
            opacity: 1,
          })
          const sideMaterial = new THREE.MeshBasicMaterial({
            color: this.districtSideColor,
            transparent: false,
            opacity: 1,
          })

          const mesh = new THREE.Mesh(geometry, [topMaterial, sideMaterial])
          const line = new THREE.Line(lineGeometry, lineMaterial)

          // 在区中心点位置加上区名标签
          province.properties = elem.properties
          //中心点优先拿centroid
          let centroid = elem.properties.centroid || elem.properties.center
          if (centroid) {
            const [x, y] = projection(centroid)
            province.properties._centroid = [x, y]
          }
          this.createTextLabel(
            province.properties.name + '',
            {
              x: province.properties._centroid[0] - this.gapWidth,
              y: -province.properties._centroid[1],
              z: this.depth + this.textOffset, //地图的深度+偏移量
            },
            5.6
          )

          province.add(mesh)
          province.add(line)
          province.properties = elem.properties
        })
      })
      province.properties.isFadeOut = false
      _this.districtMeshList.push(province)
      _this.map.add(province)
    })
    _this.placeList.forEach(ele => {
      const tempCoordinate = projection([ele.longitude, ele.latitude])
      ele.latitude = tempCoordinate[0]
      ele.longitude = tempCoordinate[1]
      _this.createBar(_this, ele)
    })
    // console.log(this.districtMeshList)
    this.scene.add(this.map)
  }

  setRaycaster() {
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector3()
    this.eventOffset = {}
    var _this = this

    function onMouseMove(event) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components

      _this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      _this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      _this.eventOffset.x = event.clientX
      _this.eventOffset.y = event.clientY
      this.placeInfo.style.left = _this.eventOffset.x + 2 + 'px'
      this.placeInfo.style.top = _this.eventOffset.y + 2 + 'px'

      this.districtInfo.style.left = _this.eventOffset.x + 2 + 'px'
      this.districtInfo.style.top = _this.eventOffset.y + 2 + 'px'
    }

    function onWindowResize() {
      _this.camera.aspect = window.innerWidth / window.innerHeight
      _this.camera.updateProjectionMatrix()
      _this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    // 移动端必须使用 touch 事件，否则无法检测
    let clicked = 1
    let clickedTime = {
      timeA: '',
      timeB: '',
    }
    window.addEventListener(
      'touchstart',
      function (e) {
        if (clicked === 1) {
          clickedTime.timeA = new Date()
          clicked++
        } else if (clicked === 2) {
          clickedTime.timeB = new Date()
          if (Math.abs(clickedTime.timeA - clickedTime.timeB) < 300) {
            _this.highlightDistrict(e)
            clicked = 1
          } else {
            clickedTime.timeA = new Date()
          }
        }
      },
      false
    )

    window.addEventListener('dblclick', this.highlightDistrict.bind(this), false)
    window.addEventListener('mousemove', onMouseMove, false)
    window.addEventListener('resize', onWindowResize, false)

    // don't open it
    // window.addEventListener('click', this.worldCrash.bind(this), false)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    this.raycaster.setFromCamera(this.mouse, this.camera)

    // calculate objects intersecting the picking ray
    let intersects = this.raycaster.intersectObjects(this.scene.children, true)
    let intersectBars = this.raycaster.intersectObjects(this.scene.children, true)
    if (this.activeInstersect && this.activeInstersect.length > 0) {
      // 显示区域详情
      // this.createDistrict(intersects)
      // 将上一次选中的恢复颜色
      this.activeInstersect.forEach(element => {
        // 将所选区的颜色比对后恢复
        this.districtColorList.forEach(district => {
          if (
            element.object.parent &&
            element.object.geometry.type !== 'CylinderGeometry' &&
            element.object.parent.properties.adcode === district.code
          ) {
            if (this.isHighlight) {
              if (element.object.parent.properties.isFadeOut) {
                this.meshFade(element.object, this.fadeOutColor, true, false)
              } else {
                this.meshFade(element.object, this.districtMeshColor, false, false)
              }
            } else {
              element.object.material[0].color.set(district.color)
              element.object.material[1].color.set(this.districtSideColor)
            }
          }
        })
      })
    } else {
      this.districtInfo.style.visibility = 'hidden'
    }

    if (this.activeInstersectBar && this.activeInstersectBar.length > 0) {
      // 将上一次选中的恢复颜色
      this.activeInstersectBar.forEach(element => {
        element.object.material.color.set('#0DEAF8')
      })
    }

    const delta = this.clock.getDelta()
    this.Fly.animation(delta)
    this.activeInstersect = [] // 设置为空
    this.activeInstersectBar = [] // 设置为空
    this.placeInfo.style.visibility = 'hidden'

    if (
      !window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.material && intersects[i].object.material.length === 2) {
          this.activeInstersect.push(intersects[i])
          intersects[i].object.material[0].color.set(this.districtMeshColor)
          intersects[i].object.material[1].color.set(this.districtMeshColor)
          break // 只取第一个
        }
      }
    }

    for (let i = 0; i < intersectBars.length; i++) {
      if (intersectBars[i].object.material.type === 'MeshPhongMaterial') {
        if (
          intersectBars[i].object.geometry.type === 'CylinderGeometry' &&
          intersects[i].object.parent.type === 'Object3D'
        ) {
          this.activeInstersectBar.push(intersectBars[i])
          this.createPlaceInfo()

          intersectBars[i].object.material.color.set('#a9faeb')
          break
        }
      }
    }
    // the wave will flash when text location receives a new order
    if (this.waveArr && this.waveArr.length > 0) {
      this.waveAnimate()
    }

    this.renderer.render(this.scene, this.camera)
  }

  calcShowHeight(count) {
    // if(count < this.itemHeight) return count;
    let height = this.itemHeight * (count / (Math.max(...this.placeList.map(o => o.num)) || 1))
    return parseInt(height)
  }

  createFirework(id) {
    // calculate objects intersecting that picking ray
    const fireworkPoint = {
      x: null,
      y: null,
    }
    this.placeList.forEach(ele => {
      if (ele.id === id) {
        fireworkPoint.x = ele.latitude
        fireworkPoint.y = -ele.longitude
      }
    })

    let index = 0
    const time = setInterval(() => {
      if (index >= 0) {
        clearInterval(time)
      }
      const x = THREE.Math.randFloat(fireworkPoint.x, fireworkPoint.x)
      const y = THREE.Math.randFloat(fireworkPoint.y, fireworkPoint.y)
      const z = THREE.Math.randFloat(
        fireworkPoint.z ? fireworkPoint.z : 0 + 40,
        fireworkPoint.z ? fireworkPoint.z : 0 + 60
      )
      const src = new THREE.Vector3(x, y, z)
      const activePoints = this.Fly.tranformPath(
        [new THREE.Vector3(fireworkPoint.x - 0.5, fireworkPoint.y, this.depth + this.textOffset), src],
        0.15
      )
      const flyMesh = this.Fly.addFly({
        color: `rgba(255,${THREE.Math.randInt(0, 255)},${THREE.Math.randInt(0, 255)},1)`,
        curve: activePoints,
        width: 30,
        length: 100,
        speed: 1.2,
        repeat: 0,
      })
      this.scene.add(flyMesh)
      index++
    })
    this.createWave(new THREE.Vector3(fireworkPoint.x - 0.6, fireworkPoint.y, this.depth + this.textOffset))
  }

  setLight() {
    let ambientLight = new THREE.AmbientLight(0xffffff) // 环境光
    this.scene.add(ambientLight)
  }

  setController() {
    this.controller = new THREE.OrbitControls(this.camera, this.renderer.domElement)
    this.controller.enablePan = false // 禁止右键拖拽
    this.controller.enableZoom = true // false-禁止右键缩放

    /* this.controller.maxDistance = 200; // 最大缩放 适用于 PerspectiveCamera
    this.controller.minDistance = 50; // 最大缩放

    this.controller.enableRotate = true; // false-禁止旋转 */

    /* this.controller.minZoom = 0.5; // 最小缩放 适用于OrthographicCamera
    this.controller.maxZoom = 2; // 最大缩放 */
  }

  districtColorHandle(elem) {
    let tempColor = null
    const colorList = this.districtDataList
    for (let i = 0; i < this.districtDataList.length; i++) {
      if (elem.properties.name === this.districtDataList[i].name) {
        tempColor = this.rangeColorList[i]
        this.districtColorList.push({
          name: elem.properties.name,
          code: elem.properties.adcode,
          color: this.rangeColorList[i],
        })
      }
    }
    return tempColor
  }

  waveAnimate() {
    this.waveArr.forEach(waveMesh => {
      waveMesh._s += 0.02
      waveMesh.scale.set(waveMesh.size * waveMesh._s, waveMesh.size * waveMesh._s, waveMesh.size * waveMesh._s)
      if (waveMesh._s <= 1.5) {
        waveMesh.material.opacity = (waveMesh._s - 1) * 2 //2等于1/(1.5-1.0)，保证透明度在0~1之间变化
      } else if (waveMesh._s > 1.5 && waveMesh._s <= 2) {
        waveMesh.material.opacity = 1 - (waveMesh._s - 1.5) * 2 //2等于1/(2.0-1.5) waveMesh缩放2倍对应0 缩放1.5被对应1
      } else {
        waveMesh._s = 1.0
      }
    })
  }

  createPlaceInfo() {
    // 显示监测点的信息
    if (this.activeInstersectBar.length !== 0 && this.activeInstersectBar[0].object.properties.name) {
      const properties = this.activeInstersectBar[0].object.properties
      this.placeInfo.innerHTML = properties.name + '<br />'
      this.placeInfo.innerHTML += '数量：' + properties.num
      this.placeInfo.style.visibility = 'visible'
    }
  }

  createDistrict(intersects) {
    // 显示监测点的信息
    if (intersects.length > 0 && intersects[0].object.parent.properties) {
      const target = intersects.find(
        item => item.object.type === 'Mesh' && item.object.geometry.type === 'ExtrudeGeometry'
      )
      if (target) {
        this.districtInfo.style.visibility = 'visible'
        const city = target.object.parent.properties
        this.districtInfo.innerHTML = city.name
      }
    }
  }

  cancelMeshHighlight() {
    this.districtMeshList.forEach(ele => {
      ele.properties.isFadeOut = false
      this.isHighlight = false
      this.districtColorList.forEach(colorEle => {
        if (ele.properties.adcode === colorEle.code) {
          this.meshFade(ele.children[0], colorEle.color, false, true)
        }
      })
    })
  }

  worldCrash() {
    let intersects = this.raycaster.intersectObjects(this.scene.children, true)
    if (intersects.length > 0 && intersects[0].object.parent.properties) {
      const target = intersects.find(
        item => item.object.type === 'Mesh' && item.object.geometry.type === 'ExtrudeGeometry'
      )
      if (target) {
        const city = target.object.parent.properties

        this.districtMeshList.forEach(ele => {
          const rX = THREE.Math.randInt(0, 0)
          const rY = THREE.Math.randInt(0, 10)
          const rZ = THREE.Math.randInt(0, 10)
          if (ele.properties.adcode !== city.adcode) {
            const item = ele
            const itemMesh = ele.children[0]
            let pivot = new THREE.Group()
            this.scene.add(pivot)
            pivot.add(itemMesh)
            pivot.properties = ele.properties
            const box = new THREE.Box3().setFromObject(itemMesh)
            box.center(itemMesh.position)
            itemMesh.position.multiplyScalar(-1)
            box.center(pivot.position)
            new TWEEN.Tween(pivot.position)
              .to(
                {
                  z: -240,
                  isVector3: true,
                },
                10000
              )
              .delay(100)
              .easing(TWEEN.Easing.Quadratic.In)
              .onUpdate(function () {})
              .start()
            new TWEEN.Tween(pivot.rotation)
              .to(
                {
                  x: rX,
                  y: rY,
                  z: rZ,
                  isVector3: true,
                },
                8000
              )
              .delay(100)
              .easing(TWEEN.Easing.Quadratic.In)
              .onUpdate(function () {
                // geometry.rotate(rX)
              })
              .start()
          } else {
            const item = ele.children[0]
            const itemColor = item.material[0].color
            new TWEEN.Tween(itemColor)
              .to({ r: 0.8, g: 0.08, b: 0.02, isColor: true }, 1000)
              .delay(100)
              .easing(TWEEN.Easing.Quadratic.Out)
              .onUpdate(function () {})
              .start()
            ele.properties.isFadeOut = false
          }
        })
      }
    }
  }

  showDistrictData(id, name) {
    handleGetCityData && handleGetCityData({ marketId: id, name: name })
  }

  showAllDistrictData() {
    handleGetAllData && handleGetAllData()
  }

  highlightDistrict(e) {
    if (window.flag) {
      var raycaster = new THREE.Raycaster()
      var mouse = new THREE.Vector2()
      if (e.touches) {
        mouse.x = (e.touches[0].pageX / window.innerWidth) * 2 - 1
        mouse.y = -(e.touches[0].pageY / window.innerHeight) * 2 + 1
      } else {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
      }

      raycaster.setFromCamera(mouse, this.camera)

      let intersects = raycaster.intersectObjects(this.scene.children, true)
      let target = null
      // 显示监测点的信息
      if (intersects.length > 0 && intersects[0].object.parent.properties) {
        target = intersects.find(item => item.object.type === 'Mesh' && item.object.geometry.type === 'ExtrudeGeometry')
        if (target) {
          //console.log('target', target)
          this.cancelMeshHighlight()
          this.isHighlight = true
          const city = target.object.parent.properties
          this.showDistrictData(city.id, city.name)

          this.districtMeshList.forEach(ele => {
            if (ele.properties.adcode !== city.adcode) {
              // mesh - top & side
              ele.properties.isFadeOut = true
              this.meshFade(ele.children[0], this.fadeOutColor, true, false)
              // line
              // ele.children[1].material.color.set('rgba(2,51,121)')
              // ele.children[1].material.transparent = true
              // ele.children[1].material.opacity = 0.5
            } else {
              ele.properties.isFadeOut = false
              this.meshFade(ele.children[0], this.districtMeshColor, false, true)
            }
          })
          // console.log('city: ', city, ', target:', target)
        } else {
          this.cancelMeshHighlight()
        }
      } else if (intersects.length <= 0) {
        if (this.isHighlight) {
          this.showAllDistrictData()
        }
        this.cancelMeshHighlight()
      }
      if (target) {
        window.targetPlaceId = target.object.parent.properties.id
        window.targetPlaceName = target.object.parent.properties.name
      } else {
        window.targetPlaceId = null
      }
    }
  }

  meshFade(mesh, color, isTransparent, sideColor) {
    const meshArr = [0, 1] // 0: top, 1: side
    meshArr.forEach(index => {
      if (sideColor && index === 1) {
        mesh.material[index].color.set(this.districtSideColor)
      } else {
        mesh.material[index].color.set(color)
      }
      mesh.material[index].transparent = isTransparent ? true : false
      mesh.material[index].opacity = isTransparent ? 0.5 : 1
    })
  }

  setupObjectScaleAnimation(object, source, target, duration, delay, easing) {
    let l_delay = delay !== undefined ? delay : 0
    let l_easing = easing !== undefined ? easing : TWEEN.Easing.Linear.None

    object.properties.isShow = !object.properties.isShow
    new TWEEN.Tween(source)
      .to(target, duration)
      .delay(l_delay)
      .easing(l_easing)
      .onUpdate(function () {
        // object.scale.copy( source );
        // that.counter1 ++
      })
      .start()
  }

  createBar(that, place) {
    const position = [place.latitude, -place.longitude, place.num]
    const numHeight = this.calcShowHeight(position[2])
    let geometry = new THREE.CylinderGeometry(this.boxR, this.boxR, numHeight, 100)
    // set the base positon of this Matrix geometry
    geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, numHeight / 2, 0))
    let material = new THREE.MeshPhongMaterial({
      color: '#0DEAF8',
      transparent: true,
      opacity: 0.8,
    })
    let cylinder = new THREE.Mesh(geometry, material)
    // connect the bottom of cylinder with map layer
    cylinder.position.set(position[0] - this.gapWidth, position[1], this.depth)
    cylinder.rotateX(Math.PI / 2)
    cylinder.properties = {
      name: place.name,
      num: place.num,
      isShow: true,
      originalPosition: Object.assign({}, cylinder.position),
    }
    that.map.add(cylinder)
  }

  barAnimation() {
    this.renderer.setAnimationLoop(() => {
      TWEEN.update()
    })
  }
}
