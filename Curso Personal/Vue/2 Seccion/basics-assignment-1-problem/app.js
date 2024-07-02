const app=Vue.createApp({
    data(){
        return{
            name:"Marc Meola Escrivá",
            age:19,
            vuelink:"https://i.blogs.es/6717aa/camera-traps---ru/450_1000.jpg"
        };
    },
    methods:{
        aleatorio(){
            // const ale=Math.random();
            return Math.random()
        }
    }
});

app.mount('#assignment');