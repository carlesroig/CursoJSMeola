<template>
  <div>
    <active-user :nombre="user.name" :edad="user.age"></active-user>
    <user-data @change-data="cambiar"></user-data>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: "Marc Meola Escrivá",
        age: 19,
      },
    };
  },
  methods: {
    cambiar(nombre, edad) {
      this.user = {
        name:nombre,
        age:edad
      };
    },
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
  background-color: #013f57;
}
section {
  text-align: center;
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 20px;
  background-color: #038c65;
  box-shadow: 0px 0px 10px #025959;
}
</style>
