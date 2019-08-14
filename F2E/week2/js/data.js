let data = {
    colorlist: [
        {
            name: "red",
            ssss: "#f071a5"
        },
        {
            name: "black",
            ssss: "#39dfde"
        },
 
        {
            title: "heart",
            src:"url(../image/heart.png) center center"
        },
        {
            title: "diamond",
            src:"url(../image/diamond.png) center center"
        },
        {
            title: "spade",
            src:"url(../image/spade.png) center center"
        },
        {
            title: "club",
            src:"url(../image/club.png) center center"
        }
    ],
    cards: [
        { color: "red", title: "heart", number: "A", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "2", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "3", pos: { x: 0, y: 0 } },
        { color: "red", title: "heart", number: "4", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "5", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "6", pos: { x: 0, y: 0 } },
        { color: "red", title: "heart", number: "7", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "8", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "9", pos: { x: 0, y: 0 } },
        { color: "red", title: "heart", number: "10", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "J", pos: { x: 0, y: 0 } }, { color: "red", title: "heart", number: "Q", pos: { x: 0, y: 0 } },
        { color: "red", title: "heart", number: "K", pos: { x: 0, y: 0 }, src:"url(../image/heart.png) center center" },

        { color: "red", title: "diamond", number: "A", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "2", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "3", pos: { x: 250, y: 0 } },
        { color: "red", title: "diamond", number: "4", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "5", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "6", pos: { x: 250, y: 0 } },
        { color: "red", title: "diamond", number: "7", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "8", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "9", pos: { x: 250, y: 0 } },
        { color: "red", title: "diamond", number: "10", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "J", pos: { x: 250, y: 0 } }, { color: "red", title: "diamond", number: "Q", pos: { x: 250, y: 0 } },
        { color: "red", title: "diamond", number: "K", pos: { x: 250, y: 0 },src:"url(../image/diamond.png) center center" },

        { color: "black", title: "spade", number: "A", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "2", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "3", pos: { x: 100, y: 120 } },
        { color: "black", title: "spade", number: "4", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "5", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "6", pos: { x: 100, y: 120 } },
        { color: "black", title: "spade", number: "7", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "8", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "9", pos: { x: 100, y: 120 } },
        { color: "black", title: "spade", number: "10", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "J", pos: { x: 100, y: 120 } }, { color: "black", title: "spade", number: "Q", pos: { x: 100, y: 120 } },
        { color: "black", title: "spade", number: "K", pos: { x: 100, y: 120 } },

        { color: "black", title: "club", number: "A", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "2", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "3", pos: { x: 250, y: 120 } },
        { color: "black", title: "club", number: "4", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "5", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "6", pos: { x: 250, y: 120 } },
        { color: "black", title: "club", number: "7", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "8", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "9", pos: { x: 250, y: 120 } },
        { color: "black", title: "club", number: "10", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "J", pos: { x: 250, y: 120 } }, { color: "black", title: "club", number: "Q", pos: { x: 250, y: 120 } },
        { color: "black", title: "club", number: "K", pos: { x: 250, y: 120 } }
    ],
    //卡片序號
    nowCid: -1,
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

}