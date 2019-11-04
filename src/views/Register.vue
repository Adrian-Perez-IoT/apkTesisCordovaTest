<template>
  <v-app>
    <v-container centered>
      <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h2>Register</h2>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Username" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <!-- <v-btn color="info">Login</v-btn> -->
      </v-card-actions>
    </v-card>  
    </v-container>
    
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showPassword:false
    }
  },
};
</script>