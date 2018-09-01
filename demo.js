var tt = new Vue({
    el: '#app1',
    data: {
        name: 'james',
        age: '18',
        lock: true,
        second: new Date().getSeconds(),
        minute: new Date().getMinutes(),
        hour: new Date().getHours(),
        show: true,
        margin: 1,
        left: 40,
        top: 15
    },
    methods: {
        buttonClick: function () {
            this.lock = !this.lock
        },
        getData: function () {
            this.second = new Date().getSeconds()
            this.minute = new Date().getMinutes()
            this.hour = new Date().getHours()
            if (this.second < 10) {
                this.second = '0' + this.second
            }
            this.minute < 10 ? '0' + this.minute : this.minute
            this.hour < 10 ? '0' + this.hour : this.hour

        },
        moveDiv: function () {
            // var height = this.$refs.mybody.height;
            //     width = this.$refs.mybody.offsetWidth;
            //     console.log(height)
            // this.top += 1
            this.left += 1
        },

        set1: function () {

            var time1 = setInterval(this.getData)
            var time2 = setInterval(this.moveDiv, 10)
            if (this.left > 900) {
                clearInterval(time2)
                setInterval(this.moveDiv1)

            }


        },
        timeReady: function () {
            if (this.second % 2 == 0) {
                this.margin = 100
                return this.show = true
            } else {
                this.margin = 10
                return this.show = true

            }
        },
        moveDiv1: function () {
            // this.top -=1
            this.left -= 1

        }


    },
    computed: {
        myLeft: function () {

        }
    }
})
tt.set1();
tt.moveDiv();
Vue.component("send", {
    props: ["value", "step"],
    data: function () {
        return {
            flag: false,
            sites: this.value,//站点个数
            status: this.step
        }
    },
    watch: {
        sites: function (val) {
            if (!val) {
                this.flag = true;
                this.status = 1;
            } else {
                this.sites = Number(val);
                this.flag = false
            }
        }
    },
    computed: {
        place: function () {//站点距离
            if (this.sites == 1) {
                return 0;
            } else {
                return 1200 / (this.sites - 1)
            }
        },
        distance: function () {//到达距离
            var s = this.place == 0 ? 600 : this.status * this.place - this.place / 2
            return s + 30
        }
    },
    template: '<div><div class="content"><div class="box"><div class="state"><div class="cirl" v-for="item in sites" :style="{left:(item-1)*place-30+\'px\'}"></div></div></div><div class="box2" :style="{width:distance+\'px\'}"><div class="state"><div class="cirl" v-for="item in sites" :style="{left:(item-1)*place-30+\'px\'}">√</div><div class="fraud" v-show="flag">√</div></div></div></div><h4><p>站点个数:</p><input type="text" v-model="sites" value=\'3\'></h4><h4><p>请输入要到达的站点:</p><input type="text" v-model="status"></h4></div>'

})
var app = new Vue({
    el: "#app",
    data: {
        nums: 3,//站点个数
        step: 1
    }
})

//更新验证
//每次的更改都能被远程仓库接收