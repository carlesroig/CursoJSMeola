export default{
    anadirRequesets(state,payload){
        state.requests.push(payload)
    },
    setRequests(state,payload){
        console.log(state.requests)
        state.requests=payload
    }
}