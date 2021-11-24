<template>
  <v-container tag="div">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <validation-provider v-slot="{ errors }" name="tarefa" rules="required|max:10">
          <v-text-field
            v-model="tarefa"
            :counter="20"
            :error-messages="errors"
            label="Tarefa"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn class="mr-4" type="submit" :disabled="invalid">Incluir</v-btn>
        <v-btn @click="clear">Limpar</v-btn>
      </form>
    </validation-observer>
  </v-container>
</template>

<script>
import { required, max } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} Não pode ser vazio.",
});
extend("max", {
  ...max,
  message: "{_field_} Tarefa não pode ter mais que  {length} caracteres",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    tarefa: "",
  }),

  methods: {
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.tarefa = "";
      this.$refs.observer.reset();
    },
  },
};
</script>