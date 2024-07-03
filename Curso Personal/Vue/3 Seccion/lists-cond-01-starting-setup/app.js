const app = Vue.createApp({
  data() {
    return { 
      goals: [] ,
      bus:[],
      mensaje:'',
      nombre:'',
      id:'',
      found: null,
      searchQuery:''
    };
  },
  methods:{
    lista(){
      this.goals.push({nombre:this.nombre,goal:this.mensaje})
      console.log(this.goals)
      this.nombre=''
      this.mensaje=''
    },
    eliminar(ids){
      this.goals.splice(ids,1)
    },
    buscar() {
      this.found = this.goals.filter(goal => goal.nombre.includes(this.searchQuery));
      console.log(this.found);
    }
  },
  watch:{
    searchQuery() {
      this.buscar();
    }
  }
});

app.mount('#user-goals');
