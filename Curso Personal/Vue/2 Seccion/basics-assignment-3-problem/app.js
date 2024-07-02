const app=Vue.createApp({
    data(){
        return{
            counter:0,
            mensaje:''
        };
        
    },
    methods:{
        sumar(num){
            this.counter += num
        }
    },
    watch:{
        counter(value){
            if(value<37){
                this.mensaje='Not there yet'
            }else if(value>37){
                this.mensaje='Too much!'
            }else if(value===37){
                this.mensaje='Grande socio'
            }

            const self = this;
            setTimeout(function() {
                self.counter=0
            },5000)

            // setTimeout(() => {
            //     this.counter=0
            // },5000)
        }
    }
    
});
app.mount('#assignment');