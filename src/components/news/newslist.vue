<template>
    <div id="container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to:'/news/newsinfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis' v-text="item.zhaiyao"></p>
                        <div class="fl">
                            <span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="click">点击数：{{item.click}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[]
            }
        },
        methods: {
            getData(){
                var url ="http://182.254.146.100:8899/api/getnewslist";
                this.$http.get(url).then(function(response){
                    var data=response.body;
                    if(data.status!=0){
                        this.Toast(data.message);
                        return;
                    };
                    this.list=data.message;
                })
            }
        },
        created(){
            this.getData();
        }
    }
</script>
<style scoped>
    .fl{
        color: #3b88ff;
        font-size:12px;
        margin-top:2em;
    }
    .click{
        float:right;
    }
    #container .mui-table-view .mui-media img{
        max-width:none;
        height:80px;
        width:90px;
    }
</style>
