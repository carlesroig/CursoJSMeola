export default{
    coaches(state){
        return state.coaches;
    },
    hascoach(state){
        return state.coaches && state.coaches.length >0
    },
    isCoach(_,getters,_2,rootGetters){
        const coaches=getters.coaches
        const userId=rootGetters.userId
        return coaches.some(coach=> coach.id===userId)
    },
    shouldUpdate(state){
        const lastFetch =state.lastFetch
        if(!lastFetch){
            return true
        }
        const currenTime=new Date().getTime()
        return(currenTime-lastFetch)/1000*60
    }

}