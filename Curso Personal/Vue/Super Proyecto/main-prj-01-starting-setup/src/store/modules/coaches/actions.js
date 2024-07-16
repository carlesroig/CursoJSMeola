export default{
    registrar(context,data){
        const coach={
            id:context.rootGetters.userId,
            firstName:data.first,
            lastName:data.last,
            description:data.desc,
            hourlyRate:data.rate,
            areas:data.areas
        }
        context.commit('registrar',coach)
        // console.log(coach)
    }
} 