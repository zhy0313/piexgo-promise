import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
var router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'HelloWorld', component: function (resolve, publicComponent) {
                // @ts-ignore
                return require(["@/components/Main"], resolve);
            } }
    ]
});
export default router;
