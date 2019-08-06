


let vm = new Vue({
    el: "#app",

    data: {
        colorlist: [
            {
                name: "yellow",
                color: "#ffeb67"
            }, {
                name: "blue",
                color: "#a5d8d6"
            }, {
                name: "red",
                color: "#ef898c"
            }, {
                name: "green",
                color: "#cbe196"
            }
        ],
        post: [
            {
                text: "都市計畫",
                color: "red",
                pos: { x: 20, y: 0 }
            },
        ],
        //起始便利貼為 不選擇
        nowID: -1,
        //滑鼠在頁面的位置
        mousepos: {
            x: 0,
            y: 0
        },
        //記錄滑鼠相對物件位置
        starpos: {
            x: 0,
            y: 0
        }
    },//--data
    methods: {

        postCss(p) {//便利貼CSS屬性
            return {
                left: p.pos.x + "px",
                top: p.pos.y + "px",
                "font-size": 240 / p.text.length - 5 + "px",
                // "font-size": 30 + "px",
                background: this.colorlist.find(o => o.name == p.color).color
            }
        },//--postCss
        newblock() {//新增便利貼
            this.post.push(
                {
                    text: "都市計畫",
                    color: "red",
                    pos: { x: 200 + Math.random() * 200, y: 200 + Math.random() * 100 }
                }
            )
        },

        seletid(id) {//獲取便利貼
            return this.nowID = id
        },
    },//--methods
    watch: {
        mousepos() {
            if (this.nowID != -1) {
                var sub = this.post[this.nowID].pos
                //物件起始點 = 滑鼠在頁面的位置 - 滑鼠相對物件位置
                sub.x = this.mousepos.x - this.starpos.x
                sub.y = this.mousepos.y - this.starpos.y
                console.log(this.starpos.y, sub.x)
            }

        }

    }//--watch
})
//取得滑鼠在頁面的位置
window.addEventListener("mousemove", (e) => {

    vm.mousepos = { x: e.pageX, y: e.pageY }
})
//取得滑鼠相對物件的位置
window.addEventListener("mousedown", (e) => {

    vm.starpos = { x: e.offsetX, y: e.offsetY }
})
window.addEventListener("mouseup", () => {
    vm.nowID = -1
})



