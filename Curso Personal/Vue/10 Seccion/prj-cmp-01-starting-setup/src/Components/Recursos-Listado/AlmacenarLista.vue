<template>
  <ul>
    <lista-recursos
      v-for="lista in recursos"
      :key="lista.id"
      :id="lista.id"
      :titulo="lista.titulo"
      :descripcion="lista.descripcion"
      :link="lista.link"
    >
    </lista-recursos>
  </ul>
</template>
<script>
import listaRecursos from './ListaRecursos.vue';
export default {
    inject: ['recursos'],
    components:{
        listaRecursos
    }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
