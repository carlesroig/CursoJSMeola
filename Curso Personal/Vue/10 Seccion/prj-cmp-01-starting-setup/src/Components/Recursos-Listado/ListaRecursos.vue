<template>
    <li>
        <base-card>
            <header>
                <h3>{{ titulo }}</h3>
                <base-button mode="flat" @click="eliminar(id)">Eliminar</base-button>
            </header>
        
        <p>{{ descripcion }}</p>
        <nav>
            <a :href="link">Enlace</a>
        </nav>
      </base-card>
    </li>
</template>
<script>

export default({
    props:['id','titulo','descripcion','link'],
    inject:['eliminar']
})
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>