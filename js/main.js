'use strict'

{
    var app =    Vue({
        el: '#app',
        data:{
            // video1:false,
            // video2:false,
            // message:'hello world',
            // foo:'hoge',
            // price:19800,
        //     list:[],
        //     current:'',
        //     topics:[
        //         {value:'vue',name:'Vue.js'},
        //         {value:'jQuery',name:'jQuery'},
        //     ]
        },

        // filters:{
        //     round:function(val){
        //         return  Math.round(val * 100) / 100
        //     },
        //     radian:function(val){
        //         return val * Math.PI / 180
        //     },
        //     localNum:function(val){
        //         return val.toLocaleString()
        //     },
            
        //     filter:function(message,foo,num){
        //         console.log(message,foo,num)
        //     }
        // },

        // directives:{
        //     video(el,binding){
        //         binding.value ? el.play() : el.pause()
        //     }
        // }

        // watch:{
        //     current:function(val){
        //         axios.get('https://api.github.com/search/repositories',{
        //             params:{q:'topic:' + val}
        //         }).then(function(response){
        //             this.list = response.data.items
        //         }.bind(this))
        //     }
        // }

        // data:{
        //     width:800,
        //     height:600,
        //     budget:300,
        //     limit:2,
        //     list:[
        //         {id:1,name:'apple',price:100},
        //         {id:2,name:'bannana',price:200},
        //         {id:3,name:'strowbery',price:400},
        //         {id:4,name:'orange',price:300},
        //         {id:5,name:'melon',price:500},
        //     ],
        //     order:false,
        // },
        // mounted:function(){
        //     console.log(this.$el)
        // },
        // computed:{
        //     matched:function(){
        //         return this.list.filter(function(el){
        //             return el.price <= this.budget
        //         },this)
        //     },

        //     sorted:function(){
        //         return _.orderBy(this.matched,'price',this.order ? 'desc' : 'asc')
        //     },

        //     limited:function(){
        //         return this.matched.slice(0,this.limit)
        //     },

            // halfWidth:{
            //     get:function(){return this.width /2},
            //     set:function(val){this.width = val * 2},
            // }
            // halfHeight: function(){
            //     return this.height / 2
            // },

            // halfPoint:function(){
            //     return{
            //         x:this.halfWidth,
            //         y:this.halfHeight,
            //     }
            // }
        //     computedData:function(){return Math.random()}
        // },
        // methods:{
        //     methodsData:function(){
        //         return Math.random()
        //     }
        // }
    })
}