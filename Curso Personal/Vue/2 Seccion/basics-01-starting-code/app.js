const app = Vue.createApp({
    data() {
        return{
            courseGoal:"Finalizado el curso tetaco",
            courseGoal2:"Socio",
            vuelLink:'https://vuejs.org/'
        };
        
    },
    methods:{
        outputGoal(){
            const aleatorio= Math.random();
            if(aleatorio<0.5){
                return this.courseGoal2;
            }else{
                return this.courseGoal
            }
        }
    }
});

app.mount('#user-goal');