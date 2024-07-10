<template>
    <ul>
        <li><button :class="{active: activeOption ==='poor'}" type="button" @click="activade('Poor')">Poor</button></li>
        <li><button :class="{active: activeOption ==='Average'}" type="button" @click="activade('Average')">Average</button></li>
        <li><button :class="{active: activeOption ==='Great'}" type="button" @click="activade('Great')">Great</button></li>
    </ul>
</template>

<script>
export default {
    data() {
        return{
            activeOption:null
        }
    },
    methods:{
        activade(option){
            this.activeOption=option
        }
    }
}
</script>

<style scoped>
.active{
    border-color: rgb(179, 0, 164);
}
.active button{
    color: rgb(179, 0, 164);
}
ul{
    list-style: none;
    margin: 0.5 rem;
    padding: 0;
    display: flex;
}
li{
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>