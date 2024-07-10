<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <label>Name</label>
        <input type="text" v-model="CambiarNom" />
      </div>
      <div>
        <label>Age</label>
        <input type="tel" v-model="CambiarEdad" />
      </div>
      <button>CAMBIAR</button>
    </form>
  </section>
</template>
<script>
export default {
  $emits: ["change-data"],
  data() {
    return {
      CambiarNom: "",
      CambiarEdad: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("change-data", this.CambiarNom, this.CambiarEdad);
    },
  },
};
</script>
