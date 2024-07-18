<template>
  <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
        <base-card>
          <header>
            <h2>Requesets Received</h2>
          </header>
          <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRequests">
            <requests-item
              v-for="req in receivedRequests"
              :key="req.id"
              :email="req.userEmail"
              :message="req.message"
            ></requests-item>
          </ul>
          <h3 v-else>You haven't received any requests yet</h3>
        </base-card>
    </section>
</div>
</template>
<script>
import RequestsItem from '../../components/requests/RequestsItem.vue';
export default {
  components: {
    RequestsItem,
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
  created(){
    this.loadRequests()
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      console.log(this.isLoading);
      this.isLoading = false;
      console.log(this.isLoading);
    },
    handleError() {
      this.error = null;
      console.log(this.error);
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
