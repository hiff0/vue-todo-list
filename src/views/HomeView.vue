<template>
  <v-container>
    <AssigmentHeader />

    <Assignment />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AssigmentHeader from '@/components/AssigmentHeader.vue';
import Assignment from '@/components/Assignment.vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',

  components: {
    AssigmentHeader,
    Assignment,
  }
})
</script>
