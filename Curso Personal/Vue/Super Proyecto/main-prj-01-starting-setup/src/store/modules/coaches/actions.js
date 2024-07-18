import axios from 'axios'
export default{
    async registrar(context,data){
        const userId= context.rootGetters.userId
        const coach={
            firstName:data.first,
            lastName:data.last,
            description:data.desc,
            hourlyRate:data.rate,
            areas:data.areas
        }
        const response = await axios.put(`https://vue-http-demo-ac9f0-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, coach)

        if(!response.ok){
            //error
        }
        context.commit('registrar',{
            ...coach,
            id:userId
        })
        // console.log(coach)
    },
    async loadCoaches(context,payload){
        if(!payload.forceRefresh && !context.getters.shouldUpdate){
            return
        }

        const response = await axios(`https://vue-http-demo-ac9f0-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`)
        
        if(!response.status >200){
            const error=new Error(response.data.message || 'failed to axios')
            throw error
        }

        const coaches=[]
        for(const key in response.data){
            const coach= {
                id:key,
                firstName:response.data[key].firstName,
                lastName:response.data[key].lastName,
                description:response.data[key].description,
                hourlyRate:response.data[key].hourlyRate,
                areas:response.data[key].areas
            }
            coaches.push(coach)
        }
        context.commit('setCoaches',coaches)
        context.commit('setFetchTime')
    }
} 