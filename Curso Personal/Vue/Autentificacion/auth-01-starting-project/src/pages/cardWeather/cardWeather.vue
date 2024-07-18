<template>
    <section>
        <div class="card">
            <h1 @click="weather">TIEMPO</h1>
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <div style="display: inline-flex;">
                        <span>{{ item.text}}</span>
                        <img v-if="item.icon" :src="item.icon" alt="Weather Icon" width="10%" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            items: [],
            city: 'Gandia',
            key: '271f9d2143fd7796664166eee9f5893f',
            lang: 'sp',
            units: 'metric'
        };
    },
    methods: {
        async weather() {
            this.items = []; 

            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&lang=${this.lang}&units=${this.units}`);
                
                console.log(response.data);

                const temperature = {text:`Temperatura: ${response.data.main.temp}`};
                const cityName = {text:`Ciudad: ${response.data.name}`};
                const cloudsImg = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
                const clouds = 'Nubes:' + response.data.weather[0].description;

                this.items.push(temperature);
                this.items.push(cityName);
                this.items.push({text:clouds,icon:cloudsImg});

                console.log(this.items);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    }
};
</script>

<style scoped>
.card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
  
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  
}
</style>
