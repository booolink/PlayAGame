

let vm = new Vue({
    el: "#app",
    data:
    {
        //卡片序號
        nowCid: - 1,
        //滑鼠位置
        mousePos: {
            x: 0,
            y: 0
        },
        //牌子位置
        cardPos: {
            x: 0,
            y: 0
        },
        //滑鼠點擊位置
        pointPos: {
            x: 0,
            y: 0
        },
    },


    methods: {

        //取得卡片序號
        seletid(id) {
            return this.nowCid = id
        },
        cardsCss(p) {
            return {
                left: p.pos.x + "px",
                top: p.pos.y + "px",
                "font-size": 35 + "px",
                "background-color": this.colorlist.find(o => o.name == p.color).color,
            }
        },//---cardsCss
        suitsCss(item, index) {


            console.log(this.cards[index].src)
            return {
                "background": this.cards[index].src,
                "background-size": "contain"
            }
        },//---suitsCss
    },//---methods
    watch: {
        mousePos() {
            if (this.nowCid != -1) {
                var cardPos = this.cards[this.nowCid].pos
                cardPos.x = this.mousePos.x - this.pointPos.x
                cardPos.y = this.mousePos.y - this.pointPos.y
            }
        },

        pointPos() { }
    },//---watch


})//---vue

// var ww = window.innerWidth
// var wh = window.innerWidth
// console.log(ww)
//滑鼠位置
window.addEventListener("mousemove", (e) => {
    vm.mousePos = { x: e.pageX, y: e.pageY }
    e.preventDefault();
})
//取得滑鼠相對物件的位置
window.addEventListener("mousedown", (e) => {
    e.preventDefault();
    vm.pointPos = { x: e.offsetX, y: e.offsetY }
})
window.addEventListener("mouseup", (e) => {
    data.nowCid = -1
    e.preventDefault();
})