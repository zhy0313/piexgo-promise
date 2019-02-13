import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history', // 切换路径模式，变成history模式
  routes: [
    {path: '/', name: 'HelloWorld', component: resolve => require(["@/components/Main"], resolve),}
  ]
});

export default router;
