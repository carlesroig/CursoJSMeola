import {createStore} from 'vuex'
import coachesModul from './modules/coaches/index.js'
import requestsModule from './modules/requests/index.js'
const store=createStore({
    modules:{
        coaches:coachesModul,
        requests: requestsModule
    },
    state(){
        return{
            userId:'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId
        }
    }

})

export default store