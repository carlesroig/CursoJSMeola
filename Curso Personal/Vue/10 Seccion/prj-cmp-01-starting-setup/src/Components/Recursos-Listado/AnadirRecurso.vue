<template>
    <section>
        <base-dialog v-if="inputInvalido" titulo="Input Invalido" @close="confirmar">
            <template #default>
                <p>NO puedes dejar las entradas en blanco</p>
                <p>Por favor revisa todos las entradas y asegurate de no dejar nada en blanco</p>
            </template>
            <template #actions>
                <base-button @click="confirmar">Aceptar</base-button>
            </template>
        </base-dialog>
        <base-card>
            <form @submit.prevent="submitData">
                <div class="form-control">
                    <label for="titulo">Titulo</label>
                    <input id="titulo" type="text" name="titulo" ref="tituloInput">
                </div>
                <div class="form-control">
                    <label for="descripcion">Descripcion</label>
                    <textarea id="descripcion" rows="3" name="descripcion" ref="descInput"></textarea>
                </div>
                <div class="form-control">
                    <label for="link">Enlace</label>
                    <input id="link" type="url" name="link" ref="linkInput">
                </div>
                <div>
                    <base-button type="submit">Añadir</base-button>
                </div>
            </form>
        </base-card>
    </section>
</template>
<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: { BaseDialog, BaseButton },
    inject:['anadirRecursos'],
    data(){
        return{
            inputInvalido:false,
        }
    },
    methods:{
        submitData(){
            const enttitulo=this.$refs.tituloInput.value;
            const entdescripcion=this.$refs.descInput.value;
            const entlink=this.$refs.linkInput.value;

            if(enttitulo.trim() === '' || entdescripcion.trim() === '' || entlink.trim() === ''){
                this.inputInvalido=true
                return;
            }


            this.anadirRecursos(enttitulo,entdescripcion,entlink)
            
        },
        confirmar(){
            this.inputInvalido=false
        }
    }
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>