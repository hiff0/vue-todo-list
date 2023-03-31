<template>
    <v-dialog v-model="dialog" persistent width="auto">
      <template v-slot:activator="{ props }">
        <ButtonOutline text="Add" color="primary" @buttonclick="openDialog" v-bind="props" append-icon="mdi-plus"/>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Adding assignment</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                
              </v-col>
            </v-row>
            <v-row>
              <v-col>

              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <ButtonOutline text="Close" color="warning" @buttonclick="closeDialog" class="mr-3"/>
          <ButtonOutline text="Save" color="primary" @buttonclick="closeDialog"/>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonOutline from './ButtonOutline.vue';


// TODO добавить тип для data
export default Vue.extend({
    data: () => ({
      dialog: false,
      additionAssignmentTitle: '',
      additionTasksTitle: []
    }),
    components: {
      ButtonOutline
    },
    methods: {
      openDialog(): void {
        this.dialog = true;
      },
      closeDialog(): void {
        this.dialog = false;
      },
    },
})
</script>