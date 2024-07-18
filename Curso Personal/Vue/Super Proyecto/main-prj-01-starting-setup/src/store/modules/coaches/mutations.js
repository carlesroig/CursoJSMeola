export default{
    registrar(state,payload){
        state.coaches.push(payload)
        console.log(state.coaches)
    },
    setCoaches(state,payload){
        console.log(state.coaches)
        state.coaches=payload
    },
    setFetchTime(state){
        state.lastFetch=new Date().getTime()
    }
    
}