

// --------------------------設定變數-----------------------
var ww, wh
var canvas = document.querySelector('#mycanvas') //畫布
var ctx = canvas.getContext('2d')//使用2D畫圖方式
var Fps = 30
var bgcolor = "#000000"
var time = 0
var mousepos
var lastpos

function initCanvas() {//畫布設定 滿視窗
    ww = canvas.width = window.innerWidth
    wh = canvas.height = window.innerHeight
}

initCanvas()
window.addEventListener("resize", initCanvas)// 縮放視窗 執行一次 取得視窗

//-----------------------------設定圖形起始環境-----------------------
class Vec2 { //設定一個原型class
    constructor(x, y, color) {//構造 (x,y)是傳入值
        this.x = x,
            this.y = y,
            this.color = color

    }
    set(x, y) {
        this.x = x,
            this.y = y
    }
    move(x, y) {
        this.x += x,
            this.y += y
    }
    add(v) { //把第二次疊在第一次數值:(new Vec2(5,5)).add(new Vec2(7,7))=12,12
        return new Vec2(this.x + v.x, this.y + v.y)
    }
    mul(s) { //乘法 (new Vec2(5,5)).mul(2)
        return new Vec2(this.x * s, this.y * s)
    }
    sub(v) { //sub自己設定?  這段不懂 可以成為減法
        return this.add(v.mul(-1))
    }
}

ctx.circle = function (v, r) { //圓的方法
    this.arc(v.x, v.y, r, 0, Math.PI * 2)
}

ctx.line = function (v1, v2) {//直線方法
    this.moveto(v1.x, v1.y)
    this.lineto(v2.x, v2.y)
}

function update() {//時間
    time++
}

function background() {//蓋掉背景 
    ctx.fillStyle = bgcolor
    ctx.fillRect(0, 0, ww, wh)
}
//設定圖形預設值----------------------------------------------

class guiobj {
    constructor(args) { //從new guiobj({物件}) 取得參數
        let def = {
            p: new Vec2(0, 0),  //起始原點
            size: new Vec2(0, 0), //圖形原始大小
            el: document.querySelector('canvas'),
            Hover: false,
            drag: false,
            draging: false
        }

        Object.assign(def, args)
        Object.assign(this, def)
        this.mouseHandler()
        this.mouseDown()
        this.mouseup()
    }
    draw() { //畫出圖形
        ctx.fillStyle = this.color //圖形顏色
        ctx.fillRect(this.p.x, this.p.y, this.size.x, this.size.y)
    }
    mouseHandler() {//滑鼠位置控制
        this.el.addEventListener('mousemove', (e) => {
            mousepos = new Vec2(e.x, e.y)
            var point1 = this.p
            var point2 = this.p.add(this.size)
            if (mousepos.x > point1.x && mousepos.y > point1.y &&
                mousepos.x < point2.x && mousepos.y < point2.y) {
                this.Hover = true
                this.draw()
            } else {
                this.Hover = false
                this.draw()
            }
            if (this.drag === true) {

                this.draging = true

                if (this.draging === true) {
                    mousepos = mousepos.sub(lastpos) //滑鼠移動 - 點擊 距離
                    lastpos = lastpos.add(mousepos)  //滑鼠點擊 + 距離
                    this.p = this.p.add(mousepos)//圖形加上 移動距離
                }
            } else {
                this.draging = false
            }

        })

    }
    //滑鼠放開時 清空
    mouseup() {
        this.el.addEventListener('mouseup', (e) => {
            this.drag = false
            this.draging = false
            lastpos = null
            mousepos = null
        })
    }
    //  在範圍內 取得滑鼠點擊時的距離
    mouseDown() {
        this.el.addEventListener('mousedown', (e) => {
            var pos = new Vec2(e.x, e.y)
            var point1 = this.p
            var point2 = this.p.add(this.size)
            if (pos.x > point1.x && pos.y > point1.y &&
                pos.x < point2.x && pos.y < point2.y) {
                this.drag = true
                if (this.drag === true) {
                    lastpos = pos
                }

            }
        })

    }
}

//群組
class Scene {
    constructor(args) {
        let def = {
            children: []
        }
        Object.assign(def, args)
        Object.assign(this, def)

    }

    draw() { //畫出圖形
        this.children.forEach(obj => {
            obj.draw()
        })
        
        ctx.fillStyle = this.color //圖形顏色
        // if (this.Hover === true) {
        //     ctx.fillStyle = "green"
        // }
        ctx.fillRect(this.p.x, this.p.y, this.size.x, this.size.y)
        scene.draw()
    }
    addChild(obj) {
        if (obj instanceof guiobj) { //檢查obj是guiobj的延伸
            this.children.push(obj)
        }
    }
}

var sence = new Scene()
function init() {
    let sss = new guiobj({
        p: new Vec2(400, 400),//第3個方塊起始原點
        size: new Vec2(50, 50), //大小
        color: "bule",
    })
    scene.addChild(sss)
}

function draw() {
    background()
    scene.draw()
}





//----------------------------------測試用-----------------
// var obj = { //設定物件基礎值
//     p: new Vec2(0, 0),
//     size: new Vec2(100, 100),
//     v: new Vec2(5, 0)
// }

// function draw() {//畫一個向量圖形 
//     background()
//     //圖
//     ctx.fillStyle = "#fff" //  fill 填滿 顏色
//     ctx.fillRect(obj.p.x, obj.p.y, obj.size.x, obj.size.y)
// }
// setInterval(draw, Fps)

// function mmov() {
//     obj.p.x += obj.v.x
//     obj.p.y += obj.v.y
// }
// setInterval(mmov, Fps)
