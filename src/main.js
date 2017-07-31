/**
 * Created by lenovo on 2017/7/31.
 */
//引入vue
import Vue from "vue";
//引入App.vue
import App from "./App.vue";
//引入路由
import vueRouter from "vue-router";
Vue.use(vueRouter);
//引入各个组件；
import home from "./components/Home.vue";
//引入mit-ui
import mit from "mint-ui";
import "mint-ui/lib/style.min.css";
Vue.use(mit);
import "../statics/css/site.css"
import "../statics/mui/css/mui.css";
//导入resource
import resource from "vue-resource";
Vue.use(resource);
import { Toast } from 'mint-ui';
Vue.prototype.Toast=Toast;
var router=new vueRouter({
    linkActiveClass:"mui-active",
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:home}
    ]
});

new Vue({
    el:"#app",
    router:router,
    render:c => c(App)
});