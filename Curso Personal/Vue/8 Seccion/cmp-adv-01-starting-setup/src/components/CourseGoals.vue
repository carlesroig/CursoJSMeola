<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="..."></slot>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return{
            goals:['Final del curso','Aprende Vue']
        }
    },
}
</script>