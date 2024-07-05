<template>
  <li>
    <h2>{{ name }} {{ isFavorite ==='1' ? '(Favorito)' : ''}}</h2>
    <button @click="mostrarDetalles"> {{details ? "Hide" : "Show"}} Details</button>
    <ul v-if="details">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Phone:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>
<script>
export default {
  props:[
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ],
  data() {
    return {
      details: false,
      friend: 
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0213 1346 4846",
          email: "manuel@local.com",
          
        }
    };
  },
  methods: {
    mostrarDetalles(){
        this.details = !this.details
    }
  },
};
</script>
