<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <p>Pankaj Tiwari</p>
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "@/components/SignIn.vue";
export default {
  name: "Login",
  components: {
    SignIn
  }
};
</script>
