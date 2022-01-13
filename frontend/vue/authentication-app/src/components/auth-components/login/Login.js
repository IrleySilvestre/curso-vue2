import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "LoginComponent",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  validations: {
    password: {
      required,
      minLength: minLength(6),
    },
    email: {
      required,
      email,
    },
  },

  methods: {
    loginUser() {
      console.log("oi");
    },
  },
};
