const app= Vue.createApp({
    data(){
        return{
            usuario:'',
            usu1:false,
            usu2:false,
            boton:false,
            color:''
        };
    },
    computed:{
        users(){
            return{
                 user1: this.usu1,
                 user2: this.usu2,
                 hidden: this.boton,
            }
        }
    },
    methods:{
        boto(){
            this.boton= !this.boton
        }
    },
    watch:{
        usuario(value){
            if(value=='user1'){
                this.usu1=true
                this.usu2=false
            }else if(value=='user2'){
                this.usu2=true
                this.usu1=false
            }else{
                this.usu2=false
                this.usu1=false
            }
        }
        
    }
});
app.mount('#assignment')