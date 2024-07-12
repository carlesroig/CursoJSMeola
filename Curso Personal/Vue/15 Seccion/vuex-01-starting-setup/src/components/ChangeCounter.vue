<template>
    <button @click="AddOne">Add 1</button>
</template>
<script>
export default {
    methods:{
        AddOne(){
            this.$store.dispatch('increment')
        }
    }
}
</script>ri