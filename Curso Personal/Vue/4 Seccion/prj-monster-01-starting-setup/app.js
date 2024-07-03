const app = Vue.createApp({
  data() {
    return {
      vidaju: 100,
      vidamos: 100,
      mensaje: [],
      contador:0
    };
  },
  methods: {
    atacar() {
      if (this.vidaju != 0 && this.vidamos != 0) {
        this.contador++
        this.vidaju -= Math.round(Math.random() * (25 - 8) + 8);
        this.vidamos -= Math.round(Math.random() * (25 - 8) + 8);
        console.log(this.vidaju);
        this.mensaje.push(
          "Daño recibido " +
            this.vidaju +
            " daño inflingido " +
            this.vidamos +
            ""
        );
        if (this.vidaju <= 0 && this.vidamos <= 0) {
          this.mensaje.push("Empate");
        } else if (this.vidaju <= 0) {
          this.mensaje.push("Has perdido");
        } else if (this.vidamos <= 0) {
          this.mensaje.push("Has ganado");
        }
      }
    },
    ataqueespecial(){
        this.vidaju -= Math.round(Math.random() * (35 - 15) + 15);
        this.vidamos -= Math.round(Math.random() * (35 - 15) + 15);
        this.contador++
    },
    curar() {
      if (
        this.vidaju != 0 &&
        this.vidamos != 0 &&
        this.vidaju != 100 &&
        this.vidamos != 100
      ) {
        this.vidamos += 10;
        this.vidaju += 10;
        console.log(this.vidaju);
      }
    },
  },
  watch: {
    vidamos(value) {
      if (value < 0) {
        this.vidamos = 0;
      } else if (value > 100) {
        this.vidamos = 100;
      }
    },
    vidaju(value) {
      if (value < 0) {
        this.vidaju = 0;
      } else if (value > 100) {
        this.vidaju = 100;
      }
    },
  },
});
app.mount("#game");
