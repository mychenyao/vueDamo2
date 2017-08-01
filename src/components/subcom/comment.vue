<template>
        <div id="container">
            <div id="postcomment">
                <h3>提交评论</h3>
                <p class="p"></p>
                <textarea placeholder="请输入您要评论的内容..." v-model="content"></textarea>
                <mt-button type="primary" size="large" @click="submit_comment">发表</mt-button>
            </div>
    <!--&lt;!&ndash;2.0 实现获取评论数据列表&ndash;&gt;-->
    <div id="list">
        <h3>评论列表</h3>
        <p class="p"></p>
        <div v-for="(item,index) in list">
            <div class="title">
                <span>第楼:</span>
                <span>用户：</span>
                <span>发表时间：</span>
            </div>
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" v-text="item.content"></li>
            </ul>
        </div>
    </div>
    <!--3.0 实现获取更多按钮-->
    <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>
<script>
    export default{
        props:["send"],
        data(){
            return {
                list:[],
                content:"",
                pageIndex:1
            }
        },
        created(){
            this.getData();
        },
        methods: {
            getData(){
                var pageIndex= this.pageIndex || 1;
                var url = "http://182.254.146.100:8899/api/getcomments/"+this.send+"?pageindex="+pageIndex;
                this.$http.get(url).then(function(res){
                    var data= res.body;
                    if(data.status!=0){
                        this.Toast(data.message);
                        return;
                    };
//                    this.list=data.message;
                    this.list=this.list.concat(res.body.message);
                    console.log(this.list);
                    console.log(pageIndex);
                })
            },
            submit_comment(){
                if(this.content.trim()==""){
                    alert("内容不能为空");
                    return;
                };
                var url="http://182.254.146.100:8899/api/postcomment/"+this.send;
                this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(res){
                    this.Toast(res.body.message);
                    this.content="";
                })
            },
            getmore(){
                this.pageIndex++;
                this.getData();
            }
        }
    }
</script>
<style scoped>
    #postcomment{
        padding: 5px;
    }
    .p{
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }
    /*2.0 评论列表的样式*/
    #list{
        padding: 5px;
    }
    .title{
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0,0,0,0.1);
    }
</style>
