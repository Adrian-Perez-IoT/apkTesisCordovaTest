<template>
  <v-app>
    <v-container centered>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title class="pb-0">
          <h2>Register</h2>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="onSignup">
            <v-text-field
              name="email"
              id="email"
              v-model="email"
              required
              type="email"
              label="Mail"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              name="password"
              id="password"
              v-model="password"
              required
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
            <v-text-field
              name="confirmPassword"
              id="confirmPassword"
              v-model="confirmPassword"
              required
              :type="showConfirmPassword ? 'text' : 'password'"
              label="Confirm Password"
              prepend-icon="mdi-lock"
              :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showConfirmPassword = !showConfirmPassword"
              :rules="[comparePasswords]"
            />            
            <v-card-actions>
              <v-btn block color="success" type="submit" :disabled="loading" :loading="loading">Register</v-btn>                            
              <!-- <v-btn color="success">Register</v-btn> -->
              
              <!-- <v-btn color="info">Login</v-btn> -->
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "SignupUser",
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    comparePasswords() {
      return this.password !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    onSignup() {
      this.$store.dispatch("signUserUp", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  }
};
</script>