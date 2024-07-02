

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmName:'',
      fullname:'',
      lastname:''
    };
  },
  computed:{
    fullname(){
      if(this.name==='' || this.lasname===''){
        return ''
      }else{
        return this.name+' '+this.lasname
      }
      
    },
  },
  methods:{
    
    confirm(){
      this.confirmName = this.name
    },
    fform(){
      alert('Submitted')
    },
    setName(event,lastname){
      this.name=event.target.value
    },
    add(num){
      this.counter+= +num
    },
    eliminar(num){
      if(this.counter==0){
        console.log("no")
      }else{
        this.counter+= -num
      }
      
    },
    resetInput(){
      this.name=''
    }
  },
  watch:{
    // name(value){
    //   if(value===''){
    //     this.fullname=''
    //   }else{
    //     this.fullname= value+' '+this.lastname
    //   }
    // },

    // lastname(value){
    //   if(value===''){
    //     this.fullname=''
    //   }else{
    //     this.fullname= this.name+' '+value
    //   }
    // }
  }
});

app.mount('#events');
