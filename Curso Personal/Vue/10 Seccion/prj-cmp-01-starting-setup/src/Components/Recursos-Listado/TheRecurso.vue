<template>
  <section>
    <base-card>
      <base-button @click="setSeleccionar('almacenar-lista')" :mode="seleccionar === 'almacenar-lista' ? null : 'flat'">Listar Recursos</base-button
      >
      <base-button @click="setSeleccionar('anadir-recurso')" :mode="seleccionar === 'anadir-recurso' ? null : 'flat'">Añadir Recurso</base-button
      >
    </base-card>
    <keep-alive>
        <component :is="seleccionar"></component>
    </keep-alive>
  </section>
</template>
<script>
import AlmacenarLista from './AlmacenarLista.vue';
import AnadirRecurso from './AnadirRecurso.vue';
export default {
  components: {
    AlmacenarLista,
    AnadirRecurso,
  },
  data() {
    return {
      seleccionar: 'almacenar-lista',
      listaObjetivos: [
        {
          id: 'guia-Vue',
          titulo: 'Curso Vue',
          descripcion: 'Documentacion oficial de VUE',
          link: 'https://vuejs.com',
        },
        {
          id: 'guia-Java',
          titulo: 'Curso JavaScript',
          descripcion: 'Documentacion oficial de JavaScript',
          link: 'https://java.com',
        },
      ],
    };
  },
  provide(){
    return{
        recursos:this.listaObjetivos,
        anadirRecursos:this.anadirRecursos,
        eliminar:this.eliminar
    }
  },
  methods: {
    setSeleccionar(tab) {
      this.seleccionar = tab;
    },
    anadirRecursos(titulo,descripcion,link){
        const nuevoRecurso={
            id:new Date().toISOString(),
            titulo:titulo,
            descripcion:descripcion,
            link:link
        }
        this.listaObjetivos.push(nuevoRecurso)
        this.seleccionar='almacenar-lista'
    },
    eliminar(ident){
        const index = this.listaObjetivos.findIndex(
        (recurso) => recurso.id === ident
      );
      if (index !== -1) {
        this.listaObjetivos.splice(index, 1);
      }
    }
  },
};
</script>
