import { createApp } from 'vue';
import {createRouter,createWebHistory} from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NoFunciona from './components/nav/NoFunciona.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
const router=createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/',redirect: '/teams'},
        {name:'teams',path: '/teams',components: {default:TeamsList,footer:TeamsFooter},children:[
            {name:'team-members', path: '/teams/:teamId',component: TeamMembers,props:true},
        ]},
        {path: '/users',components: {default:UsersList,footer:UsersFooter}},
        
        {path: '/:notFound(.*)',component: NoFunciona},
    ],
    linkActiveClass:'active',
    scrollBehavior(to,from,savedPosition){
        console.log(to,from,savedPosition)
        return{left:0,top:0}
    }
});

const app = createApp(App)
app.use(router);
app.mount('#app');
