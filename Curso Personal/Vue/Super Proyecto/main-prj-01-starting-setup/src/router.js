import { createRouter,createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import RequestReceive from './pages/request/RequestReceive.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/request/ContactCoach.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';

const router=createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',redirect:'/coaches'},
        {path:'/coaches',component:CoachesList},
        {path:'/coaches/:id',component:CoachDetail,props:true,children:[
            {path:'/contact',component:ContactCoach}
        ]},
        {path:'/register',component:CoachRegister},
        {path:'/requests',component:RequestReceive},
        {path:'/:notFound(.*)',component:NotFound}
    ],
})
export default router