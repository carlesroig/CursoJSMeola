<template id="app">
  <section>
      <the-header titulo="RememberMe"></the-header>
      <the-recurso></the-recurso>
  </section>
</template>

<script>
import TheHeader from './Components/layouts/TheHeader.vue';
import TheRecurso from './Components/Recursos-Listado/TheRecurso.vue';
export default {
  components: {
    TheHeader,
    TheRecurso
  },
//   data() {
//     return {
//       listaObjetivos: [
//         {
//           id: 'guia-Vue',
//           titulo: 'Curso Vue',
//           descripcion: 'Documentacion oficial de VUE',
//           link: 'https://vuejs.com',
//         },
//         {
//           id: 'guia-Java',
//           titulo: 'Curso JavaScript',
//           descripcion: 'Documentacion oficial de JavaScript',
//           link: 'https://java.com',
//         },
//       ],
//     };
//   },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
