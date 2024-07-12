<template>
    <section>
        <div class="container">
            <h2>All Users</h2>
            <router-link to="/goals">Course Goals</router-link>
        </div>
        <div class="container">
            <users-list></users-list>
        </div>
    </section>
</template>
<script>
import UsersList from '../components/UsersList.vue';

export default {
  components: { UsersList }
}
</script>