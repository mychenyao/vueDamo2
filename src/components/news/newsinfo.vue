<template>
    <div id="container">
        <div class="title">
            <h4 v-text="info.title"></h4>
            <p>{{ info.add_time | datefmt('YYYY-MM-DD') }}  {{info.click}}次浏览</p>
        </div>
        <div id="content" v-html="info.content" ></div>
        <comp :send="id"></comp>
    </div>
</template>
<script>
    import comp from "../subcom/comment.vue";
    export default{
        components:{
            comp
        },
        data(){
            return {
                id:'',
                info:""
            }
        },
        created(){
          this.id=this.$route.params.id;
          this.getData();
        },
        methods: {
            getData(){
                var url ="http://182.254.146.100:8899/api/getimageInfo/"+this.id;
                this.$http.get(url).then(function(res){
                     var data=res.body;
                     if(data.status!=0){
                         Toast(data.message);
                         return;
                     };
                     this.info=data.message[0];
                })
            }
        }
    }
</script>
<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.5);
    }

    .title,#content{
        padding: 5px;
    }
</style>
