

var ww, wh
var canvas = document.querySelector('#mycanvas') //畫布
var ctx = canvas.getContext('2d')//使用2D畫圖方式
var Fps = 30


function init() {//畫布設定 滿視窗
    ww = window.innerWidth //取得視窗寬高
    wh = window.innerHeight
    canvas.width = ww  //畫布寬高
    canvas.height = wh
    console.log(ww, wh)
}
init()
window.addEventListener("resize", init)// 縮放視窗 執行一次 取得視窗

class Vec2 { //設定一個原型class
    constructor(x, y) {//構造 (x,y)是傳入值
        this.x = x,
        this.y = y
        // let def={     第二種方法
        //     x:x,
        //     y:y
        // }
        // Object.assign(this,def)//外部值 向前覆蓋
    }
    set(x,y){
        this.x=x,
        this.y=y
    }
    move(x,y){
        this.x+=x,
        this.y+=y
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


var obj = { //設定物件
    p: new Vec2(0, 0),
    size: new Vec2(100, 100),
    v: new Vec2(5, 0)
    // p: {   //裡面有個P  設為原始點 X,Y
    //     x: 0,
    //     y: 0
    // },
    // size: { //距離大小 
    //     x: 100,
    //     y: 100
    // },
    // v: {//速度
    //     x: 5,
    //     y: 0
    // }
}



// function draw() {//畫一個向量圖形 
//     //蓋掉背景  canvas特色
//     ctx.fillStyle = "#00000080" //  fill 填滿 顏色
//     ctx.fillRect(0, 0, ww, wh)
//     //圖
//     ctx.fillStyle = "#fff" //  fill 填滿 顏色
//     ctx.fillRect(obj.p.x, obj.p.y, obj.size.x, obj.size.y)
//     // requestAnimationFrame(draw)  //重新畫一次
// }
// setInterval(draw, Fps)//定時執行一次
// // draw()//執行圖
// function updata() {//速度設定
//     obj.p = obj.p.add(obj.v)
//     // obj.p.x += obj.v.x
//     // obj.p.y += obj.v.y
// }
// setInterval(updata, Fps)//時間設定  定時執行 