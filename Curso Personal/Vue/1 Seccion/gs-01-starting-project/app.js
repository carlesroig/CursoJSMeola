Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue != "") {
        this.goals.push(this.enteredValue);
        this.enteredValues = "";
      } else {
        console.error("tonto");
      }
    },
  },
}).mount("body");

// const buttonn=document.querySelector("button");
// const inputt=document.querySelector("input");
// const listt=document.querySelector("ul");
// inputt.placeholder="Escribe un texto";

// function addGoal(){
//     if(inputt.value!=""){
//         inputt.style.border="1px solid black";
//         const agregar=inputt.value;
//         const lista=document.createElement('li');
//         lista.textContent=agregar;
//         listt.appendChild(lista);
//         inputt.value=""
//         inputt.placeholder="Escribe un texto";
//     }else{
//         inputt.placeholder="TETE ESTA VACIO";
//         inputt.style.border="1px solid red";
//     }
// }

// buttonn.addEventListener('click',addGoal);
