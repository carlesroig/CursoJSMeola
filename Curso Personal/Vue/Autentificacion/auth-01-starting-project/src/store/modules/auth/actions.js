export default{
    async login(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrf98wop9z6qvxuPuGpRJA5mGQwfs50ec',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })

        const ResponseData= await response.json()
        if (!response.ok) {
            console.log(ResponseData)
            const error = new Error(ResponseData.message || 'Failed to authenticate!');
            throw error;
        }
        console.log(ResponseData)
        context.commit('setUser',{
            token:ResponseData.idToken,
            userId:ResponseData.localID,
            tokenExpiration:ResponseData.expiresIn
        })
    },
    async signup(context,payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrf98wop9z6qvxuPuGpRJA5mGQwfs50ec',{
            method:'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password,
                returnSecureToken:true
            })
        })

        const ResponseData= await response.json()
        if (!response.ok) {
            console.log(ResponseData)
            const error = new Error(ResponseData.message || 'Failed to authenticate!');
            throw error;
        }
        console.log(ResponseData)
        context.commit('setUser',{
            token:ResponseData.idToken,
            userId:ResponseData.localID,
            tokenExpiration:ResponseData.expiresIn
        })
    }
}