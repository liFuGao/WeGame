import router from "@/router";
import store from "@/store";

router.beforeEach((to,from,next) => {
    if(store.state.token) {
        next()
    }else {
        if(to.path=='/login'){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }
    }
})
