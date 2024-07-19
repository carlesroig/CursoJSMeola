<template>
  <div class="div">
    <div class="div-2">{{ cityName.text }}</div>
    <img loading="lazy" :src="weatherIcon" class="img" />
    <div class="div-3">
      <div class="div-4">{{ dayOfWeek }}</div>
      <div class="div-5"></div>
      <div class="div-6">{{ date }}</div>
    </div>
    <div class="div-7">
      <div class="div-8">{{ temperature }}°</div>
    </div>
    <div class="div-10">{{ weatherDescription }}</div>
    <div class="div-11"></div>
    <div class="div-12">
      <div class="div-13">
        <div class="div-14">
            <svg class="img2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.983 28C13.1857 28.0033 13.3846 27.9449 13.5534 27.8326C13.7222 27.7202 13.8528 27.5593 13.928 27.371L17.769 17.77L27.371 13.929C27.5567 13.8548 27.7159 13.7266 27.8281 13.561C27.9402 13.3954 28.0001 13.2 28 13L28 12.984C27.9968 12.7815 27.9322 12.5847 27.8147 12.4197C27.6972 12.2547 27.5324 12.1292 27.342 12.06L5.342 4.05999C5.16303 3.9945 4.96906 3.98152 4.78296 4.02257C4.59685 4.06362 4.42636 4.157 4.29154 4.29171C4.15673 4.42642 4.06322 4.59684 4.02202 4.78292C3.98082 4.96899 3.99365 5.16296 4.059 5.34199L12.059 27.342C12.1284 27.5324 12.254 27.6973 12.4192 27.8148C12.5844 27.9323 12.7813 27.9969 12.984 28L12.983 28Z" fill="white"/>
</svg>

          <!-- Si tienes una segunda imagen -->
          <svg class="img3" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2.66663C17.1066 2.66653 18.1714 3.08983 18.9759 3.8497C19.7804 4.60958 20.2637 5.64845 20.3267 6.75329L20.3333 6.99996L20.3347 17.6026L20.4413 17.6946C21.6839 18.8024 22.466 20.3357 22.6333 21.992L22.6587 22.328L22.6667 22.6666C22.6669 23.765 22.3956 24.8465 21.8771 25.8148C21.3586 26.7832 20.6089 27.6084 19.6946 28.2171C18.7802 28.8258 17.7297 29.1992 16.6363 29.304C15.5429 29.4089 14.4405 29.2419 13.4272 28.818C12.4139 28.3941 11.521 27.7264 10.8279 26.8742C10.1348 26.022 9.66309 25.0118 9.45457 23.9334C9.24605 22.8549 9.30723 21.7417 9.63267 20.6926C9.95811 19.6435 10.5377 18.691 11.32 17.92L11.56 17.6933L11.6653 17.6026L11.6667 6.99996C11.6664 5.93503 12.0584 4.90731 12.7676 4.11295C13.4769 3.31859 14.4539 2.81322 15.512 2.69329L15.7547 2.67329L16 2.66663ZM16 4.66663C15.4142 4.66668 14.8499 4.88707 14.4191 5.28402C13.9883 5.68098 13.7225 6.22545 13.6747 6.80929L13.6667 6.99996V18.592L13.2547 18.892C12.4675 19.4645 11.8791 20.2689 11.5718 21.1925C11.2645 22.1161 11.2537 23.1127 11.5408 24.0427C11.828 24.9727 12.3988 25.7897 13.1734 26.3792C13.9479 26.9688 14.8874 27.3014 15.8604 27.3304C16.8333 27.3595 17.791 27.0836 18.5994 26.5414C19.4077 25.9992 20.0263 25.2178 20.3685 24.3065C20.7107 23.3953 20.7594 22.3999 20.5078 21.4596C20.2562 20.5193 19.7169 19.6812 18.9653 19.0626L18.7453 18.8933L18.336 18.5933L18.3333 6.99996C18.3333 6.38112 18.0875 5.78763 17.6499 5.35004C17.2123 4.91246 16.6188 4.66663 16 4.66663ZM16 10.6666C16.2652 10.6666 16.5196 10.772 16.7071 10.9595C16.8946 11.1471 17 11.4014 17 11.6666V19.4866C17.7601 19.7256 18.4095 20.2287 18.8307 20.9051C19.2518 21.5814 19.4169 22.3862 19.2961 23.1737C19.1752 23.9612 18.7764 24.6794 18.1718 25.1983C17.5672 25.7172 16.7967 26.0025 16 26.0025C15.2033 26.0025 14.4328 25.7172 13.8282 25.1983C13.2236 24.6794 12.8248 23.9612 12.7039 23.1737C12.5831 22.3862 12.7482 21.5814 13.1693 20.9051C13.5905 20.2287 14.2399 19.7256 15 19.4866V11.6666C15 11.4014 15.1054 11.1471 15.2929 10.9595C15.4804 10.772 15.7348 10.6666 16 10.6666Z" fill="white"/>
</svg>

        </div>
        <div class="div-15">
          <div class="div-16">{{ windSpeed }}</div>
          <div class="div-17">Wind</div>
          <div class="div-18">{{ pressure }}</div>
          <div class="div-19">Pressure</div>
        </div>
      </div>
      <div class="div-20">
        <div class="div-21">
          <!-- Si tienes una tercera imagen -->
          <svg class="img4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5.33337C20.2253 5.33337 22.6213 8.13071 22.9693 11.5067H23.076C23.7219 11.5057 24.3617 11.6319 24.9588 11.8782C25.5559 12.1246 26.0986 12.4862 26.5559 12.9423C27.0132 13.3985 27.3761 13.9403 27.6239 14.5368C27.8717 15.1333 27.9995 15.7728 28 16.4187C27.9993 17.0645 27.8714 17.7038 27.6235 18.3002C27.3756 18.8965 27.0127 19.4382 26.5554 19.8942C26.0982 20.3503 25.5555 20.7117 24.9585 20.958C24.3615 21.2042 23.7218 21.3304 23.076 21.3294H22.3L20.1907 24.8414C20.0639 25.0606 19.8586 25.2236 19.6163 25.2974C19.374 25.3712 19.1128 25.3503 18.8853 25.2389C18.6578 25.1275 18.4811 24.934 18.3907 24.6974C18.3004 24.4607 18.3032 24.1987 18.3987 23.964L18.4587 23.8414L19.9907 21.3294H17.1427L15.0333 24.8414C14.9065 25.0606 14.7013 25.2236 14.459 25.2974C14.2167 25.3712 13.9554 25.3503 13.7279 25.2389C13.5005 25.1275 13.3237 24.934 13.2334 24.6974C13.1431 24.4607 13.1459 24.1987 13.2413 23.964L13.3013 23.8414L14.8333 21.3294H11.984L9.87467 24.84C9.74674 25.057 9.54165 25.2177 9.30039 25.29C9.05913 25.3623 8.79947 25.3409 8.57329 25.2301C8.34712 25.1193 8.17109 24.9272 8.08038 24.6923C7.98967 24.4573 7.99096 24.1968 8.084 23.9627L8.14267 23.84L9.67467 21.328H8.924C8.2782 21.3291 7.63852 21.2029 7.0415 20.9566C6.44449 20.7104 5.90185 20.3489 5.44458 19.8929C4.98731 19.4369 4.62437 18.8952 4.3765 18.2989C4.12864 17.7025 4.0007 17.0632 4 16.4174C4.00087 15.7718 4.1289 15.1327 4.37676 14.5366C4.62462 13.9405 4.98746 13.3991 5.44458 12.9432C5.90169 12.4873 6.44411 12.1259 7.04089 11.8797C7.63766 11.6335 8.27709 11.5072 8.92267 11.508H9.02933C9.38133 8.10671 11.776 5.33337 16 5.33337ZM16 7.33071C13.2387 7.33071 10.8307 9.50937 10.8307 12.5174C10.8307 12.9934 10.4053 13.3667 9.91867 13.3667H8.99867C7.31733 13.3667 5.95333 14.7027 5.95333 16.3494C5.95333 17.996 7.31733 19.3307 8.99867 19.3307H23.0027C24.6827 19.3307 26.0467 17.996 26.0467 16.3494C26.0467 14.7027 24.6827 13.3667 23.0013 13.3667H22.0813C21.5947 13.3667 21.1693 12.9934 21.1693 12.5174C21.1693 9.47071 18.7613 7.33071 16 7.33071Z" fill="white"/>
</svg>

          <!-- Si tienes una cuarta imagen -->
          <svg class="img5" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 20.0001C25 25.5232 21.5231 29.0001 16 29.0001C10.4769 29.0001 7 25.5232 7 20.0001C7 14.0732 13.4519 6.07193 15.4306 3.75755C15.501 3.67533 15.5884 3.60931 15.6867 3.56406C15.7851 3.5188 15.8921 3.49536 16.0003 3.49536C16.1086 3.49536 16.2155 3.5188 16.3139 3.56406C16.4122 3.60931 16.4996 3.67533 16.57 3.75755C18.5481 6.07193 25 14.0732 25 20.0001Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
<path d="M21.5 20.5C21.5 21.6935 21.0259 22.8381 20.182 23.682C19.3381 24.5259 18.1935 25 17 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <div class="div-22">
          <div class="div-23">{{ humidity }}</div>
          <div class="div-24">Chance of rain</div>
          <div class="div-25">{{ humidity }}</div>
          <div class="div-26">Humidity</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      city: 'Gandia',
      key: '271f9d2143fd7796664166eee9f5893f',
      lang: 'es',
      units: 'metric',
      cityName: { text: '' },
      weatherIcon: '',
      temperature: '',
      weatherDescription: '',
      dayOfWeek: '',
      date: '',
      cloudsIcon: '',
      windSpeed: '',
      pressure: '',
      humidity: '',
    };
  },
  methods: {
    async weather() {
      this.items = [];

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&lang=${this.lang}&units=${this.units}`
        );

        console.log(response.data);

        this.cityName.text = response.data.name;
        // this.weatherIcon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
        this.weatherIcon =response.data.weather[0].icon;
        // if(this.weatherIcon==='03d'){
        //     this.weatherIcon = require('@/assets/nube.png');
        // }
        this.weatherIcon = require(`@/assets/${response.data.weather[0].icon}.png`);


        this.temperature = response.data.main.temp;
        this.weatherDescription = response.data.weather[0].description;

        const dateObj = new Date();
        this.dayOfWeek = dateObj.toLocaleDateString('en-US', {
          weekday: 'long',
        });
        this.date = dateObj.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        });

        this.cloudsIcon = ''; // Set accordingly
        this.windSpeed = `${response.data.wind.speed} km/h`;
        this.pressure = `${response.data.main.pressure} mbar`;
        this.humidity = `${response.data.main.humidity}%`;

        console.log(this.items);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
  },
  mounted() {
    this.weather();
  },
};
</script>

<style scoped>
.div {
  border-radius: 30px;
  background: linear-gradient(
    180deg,
    #64f4f4 0%,
    #6d5bdb 38.98%,
    #661bb1 77.96%
  );
  box-shadow: 0px 0 15px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  max-width: 358px;
  flex-direction: column;
  align-items: center;
  padding: 18px 16px;
}
.div-2 {
  color: var(--ffffff, #fff);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  letter-spacing: -0.24px;
  font: 600 16px Poppins, sans-serif;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 150px;
  height: 100px;
  margin-top: 12px;
  max-width: 100%;
}
.div-3 {
  display: flex;
  gap: 11px;
  font-size: 16px;
  color: var(--ffffff, #fff);
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 120%;
}
.div-4 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  flex-grow: 1;
}
.div-5 {
  background-color: var(--ffffff, #fff);
  width: 2px;
  height: 19px;
}
.div-6 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin: auto 0;
}
.div-7 {
  display: flex;
  margin-top: 25px;
  gap: 4px;
  font-size: 72px;
  color: var(--ffffff, #fff);
  font-weight: 600;
  white-space: nowrap;
  letter-spacing: -0.24px;
  line-height: 120%;
}
.div-8 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  flex-grow: 1;
}
.div-9 {
  stroke-width: 2px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  align-self: start;
  width: 12px;
  height: 12px;
}
.div-10 {
  color: var(--ffffff, #fff);
  font-feature-settings: 'clig' off, 'liga' off;
  letter-spacing: -0.24px;
  margin-top: 21px;
  font: 400 16px/120% Poppins, sans-serif;
}
.div-11 {
  background-color: var(--ffffff, #fff);
  align-self: stretch;
  margin-top: 16px;
  height: 1px;
}
.div-12 {
  display: flex;
  margin-top: 16px;
  width: 100%;
  max-width: 280px;
  gap: 20px;
  justify-content: space-between;
}
.div-13 {
  display: flex;
  gap: 4px;
}
.div-14 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}
.img-2 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
}
.img-3 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  margin-top: 24px;
}
.div-15 {
  align-self: start;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--ffffff, #fff);
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 120%;
}
.div-16 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
}
.div-17 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 7px;
}
.div-18 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 29px;
}
.div-19 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 10px;
}
.div-20 {
  display: flex;
  gap: 4px;
}
.div-21 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
}

.img-4 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
}
.img-5 {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 32px;
  margin-top: 22px;
}
.div-22 {
  align-self: start;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--ffffff, #fff);
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 120%;
}
.div-23 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
}
.div-24 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 9px;
}
.div-25 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 29px;
}
.div-26 {
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins, sans-serif;
  margin-top: 9px;
}
</style>
