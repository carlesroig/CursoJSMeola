import axios from 'axios'
export default{
    async ContactCoach(context, payload){
        const newRequeset={
            coachId:payload.coachId,
            userEmail: payload.email,
            message:payload.message
        }
        const response = await axios.post(`https://vue-http-demo-ac9f0-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`)
        if(!response.status >200){
            const error=new Error(response.data.message || 'failed to send')
            throw error
        }
        newRequeset.id=response.data.name
        newRequeset.coachId=payload.coachId
        context.commit('anadirRequesets', newRequeset)
    },
    async fetchRequests(context){
        const coachId=context.rootGetters.userId
        const response =await axios(`https://vue-http-demo-ac9f0-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
        if(!response.status >200){
            const error=new Error(response.data.message || 'failed to axios requests')
            throw error
        }

        const requests=[]
        for(const key in response.data){
            const request={
                id:key,
                coachId:coachId,
                userEmail:response.data[key].userEmail,
                message:response.data[key].message
            }
            requests.push(request)
        }
        context.commit('setRequests',requests)
    }
}