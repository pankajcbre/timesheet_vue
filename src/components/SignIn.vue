<template>
  <v-container>
    <v-col cols="12">
      <v-card width="450px" class="mx-auto mt-5">
        <v-app-bar dark color="light-blue darken-1">
          <h1 class="title">User Login</h1>
        </v-app-bar>
        <v-card-text>
          <v-form>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
              label="Password"
              prepend-icon="mdi-lock"
              :type="showPassword ? 'text':'password'"
              :append-icon="showPassword ? 'mdi-eye':'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-container>
</template>
<script>
export default {
  name: "SignIn",
  data: () => ({
    showPassword: false
  })
};
</script>
<style lang="scss">
.v-application {
  background: transparent !important;
}
body {
  background-color: red;
  background-image: url("~@/assets/login_back.jpg");
  background-clip: content-box;
  background-size: cover;
}
</style>