<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(Favorito)' : ''}}</h2>
    <button @click="serFavorito">Favorito</button>
    <button @click="mostrarDetalles"> {{details ? "Hide" : "Show"}} Details</button>
    <ul v-if="details">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>E-Mail:</strong>{{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete',id)">Eliminar</button>  
  </li>
  
</template>
<script>
export default {
  props:{
    id:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:String,
      required:true
    },
    emailAddress:{
      type:String,
      required:true
    },
    isFavorite:{
      type:Boolean,
      required:false,
      default: false,
    },
  },
  emits: ['ser-Favorito','delete'],
  // emits:{
  //   'ser-Favorito':function(id){
  //     if(id){
  //       return true;
  //     }else{
  //       console.warn('Id no existe')
  //       return false
  //     }
  //   }
  // },
  data() {
    return {
      details: false,
    };
  },
  methods: {
    mostrarDetalles(){
        this.details = !this.details
    },
    serFavorito(){
      this.$emit('ser-Favorito',this.id)  
    },
    
  },
};
</script>
