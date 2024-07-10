<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="cargar">Load Submitted Experiences</base-button>
      </div>
      <p v-if="cargando">CARGANDO ...</p>
      <p v-else-if="!cargando && (!results || results.length === 0)">TTete esta vacio o eres gilipollas</p>
      <ul v-else-if="!cargando && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';
export default {
  components: {
    SurveyResult,
  },
  data(){
    return{
      results:[],
      cargando: false
    }
  },
  methods:{
    cargar(){
      this.cargando=true
      axios.get('https://vue-http-demo-ac9f0-default-rtdb.europe-west1.firebasedatabase.app/usuarios.json').then(response =>{
        console.log("Respuesta exitosa:", response.data);
        this.cargando=false
        const results=[];
        for(const id in response.data){
          results.push({
            id:id,
            name:response.data[id].name,
            rating:response.data[id].rating,
          });
        }
        this.results = results
      })
      .catch(error => {
          console.error('Error fetching data:', error);
        });
      
    }
  },
  mounted(){
    this.cargar();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>