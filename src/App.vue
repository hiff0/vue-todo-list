<template>
  <v-app>
    <HomeNavbar />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeNavbar from './components/HomeNavbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HomeNavbar
  },
  data: () => ({
  }),
});
</script>
