<template>
  <v-app>
    <NavBar/>
    <v-main class="mx-7 mt-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  components: {NavBar},
};
</script>
<style>

</style>