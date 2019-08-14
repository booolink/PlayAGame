

new Vue({
    el: '#menublock',

    data: {
        active:0,
        open: true,
        time: '25:00',
        List: [
            {
                tosolist: '讀書'
            },
            {
                tosolist: '電影'
            },
         
        ],
        new_list: '',
    },

    methods: {
        del: function (index) {
      
            this.List.splice(index, 1);
        },
        addHandler() {
            if (this.new_list) {
                this.List.push({
                    tosolist: this.new_list
                })
                this.new_list = ''
            }
        },


    }
})


