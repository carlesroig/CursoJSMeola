export default{
    registrar(state,payload){
        state.coaches.push(payload)
        console.log(state.coaches)
    },
    
}