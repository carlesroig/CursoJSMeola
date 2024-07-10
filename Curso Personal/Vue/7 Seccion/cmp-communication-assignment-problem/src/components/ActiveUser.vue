<template>
  <section>
    <header>
      <h1>USUARIO</h1>
    </header>
    <h2>{{ nombre }}</h2>
    <h3>{{ edad }}</h3>
  </section>
</template>
<script>
export default {
  props:{
    nombre:{
        type:String,
    },
    edad:{
        type:Number
    }
  }
};
</script>
<style></style>
