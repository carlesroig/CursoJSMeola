<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now</h2>
          <base-button link :to="coachContactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>
<script>
export default{
    props: ['id'],
    data(){
        return{
            selecccioanr:null,
        }
    },
    computed:{
        fullName(){
            return this.selecccioanr.firstName + ' ' + this.selecccioanr.lastName;
        },
        coachContactLink(){
            return this.$route.path +'/contact'
        },
        areas(){
            return this.selecccioanr.areas
        },
        description(){
            return this.selecccioanr.description
        },
        rate(){
            return this.selecccioanr.hourlyRate
        },
    },
    created(){
        this.selecccioanr=this.$store.getters['coaches/coaches'].find(
            (coach)=>coach.id ===this.id
        );
    },
};
  

</script>
