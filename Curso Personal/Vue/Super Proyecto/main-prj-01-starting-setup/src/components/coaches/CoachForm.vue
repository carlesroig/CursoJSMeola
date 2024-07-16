<template>
  <form @submit.prevent="submit">
    <div class="from-control" :class="{ invalid: !firstname.isValid }">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstname.val" @blur="clear('firstname')"/>
      <p v-if="!firstname.isValid">Error firstName</p>
    </div>
    <div class="from-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">LastName</label>
      <input type="text" id="lastName" v-model.trim="lastName.val" @blur="clear('lastName')"/>
      <p v-if="!lastName.isValid">Error lastName</p>
    </div>
    <div class="from-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        rows="5"
        id="description"
        v-model.trim="description.val"
        @blur="clear('description')"
      ></textarea>
      <p v-if="!description.isValid">Error description</p>
    </div>
    <div class="from-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clear('rate')"/>
      <p v-if="!rate.isValid">Error rate</p>
    </div>
    <div class="from-control" :class="{ invalid: !areas.isValid }">
      <div>
        <input
          type="checkbox"
          value="frontend"
          id="frontend"
          v-model="areas.val"
          @blur="clear('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="backend"
          id="backend"
          v-model="areas.val"
          @blur="clear('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input 
        type="checkbox" 
        value="career" 
        id="career" 
        v-model="areas.val" 
        @blur="clear('areas')"
        />
        <label for="career">Career</label>
      </div>
      <p v-if="!areas.isValid">Error areas</p>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstname: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      IsValid: true,
    };
  },
  methods: {
    clear(input){
      this[input].isValid=true
    },
    validar() {
      this.IsValid = true;
      if (this.firstname.val === '') {
        this.firstname.isValid = false;
        this.IsValid = false;
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false;
        this.IsValid = false;
      }
      if (this.description.val === '') {
        this.description.isValid = false;
        this.IsValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.IsValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.IsValid = false;
      }
    },
    submit() {
      this.validar();
      console.log(!this.IsValid);
      if (!this.IsValid) {
        return;
      }

      const form = {
        first: this.firstname.val,
        last: this.lastName.val,
        rate: this.rate.val,
        desc: this.description.val,
        areas: this.areas.val,
      };
      console.log(form);
      this.$emit('save-data', form);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
