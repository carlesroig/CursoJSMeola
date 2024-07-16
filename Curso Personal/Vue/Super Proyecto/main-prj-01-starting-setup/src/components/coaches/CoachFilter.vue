<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <input type="checkbox" id="frontend" checked @change="setFilters">
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="backend" checked @change="setFilters">
            <label for="backend">Backend</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="career" checked @change="setFilters">
            <label for="career">Career</label>
        </span>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            filters:{
                frontend:true,
                backend:true,
                career:true,

            }
        }
    },
    methods:{
        setFilters(event){
            const inputId=event.target.id
            const isActive=event.target.checked
            const update={
                ...this.filters,
                [inputId]:isActive
            };
            this.filters =update
            this.$emit('change-filter',update)
        }
    }
}
</script>