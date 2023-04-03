<template>
  <v-dialog v-model="dialog" persistent width="auto">
    <template v-slot:activator="{ props }">
      <ButtonOutline 
        text="Add" color="primary" 
        @buttonclick="openDialog" 
        append-icon="mdi-plus" 
        v-bind="props"
        v-bind:title="message"
       />
    </template>
    <v-card style="min-width: 350px">
      <v-card-title>
        <span class="text-h5">Adding assignment</span>
      </v-card-title>
      <v-card-text>
        <v-form v-model="form">
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  v-model="additionAssignmentTitle" 
                  :rules="[rules.required]"
                  label="Assignment title" 
                  clearable 
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <ButtonOutline 
                  text="Add task" 
                  color="primary" 
                  @buttonclick="addTask" 
                />
              </v-col>
            </v-row>
            <v-row v-for="(task, index) in additionTasks" :key="index">
              <v-col cols="11">
                <v-text-field 
                  v-model="task.value"
                  :rules="[rules.required]"
                  label="Task title"
                  clearable  
                >
                </v-text-field>
              </v-col>
              <v-col cols="1">
                <v-icon 
                  @click="deleteTask(index)" 
                  :title="'Delete Task'"
                >
                  mdi-minus-circle
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <ButtonOutline 
          text="Close" 
          color="warning" 
          @buttonclick="closeDialog" 
          class="mr-3" 
        />
        <ButtonOutline 
          text="Save" 
          color="success" 
          @buttonclick="addAssignment" 
          :disabled="!form"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Task } from '@/interfaces';
import ButtonOutline from './ButtonOutline.vue';

interface TaskInterface extends Task { 
  pattern: RegExp;
  class: string;
}

interface Rules {
  required: (value: string) => true | "Field is required";
}

interface DataInerface {
  dialog: boolean;
  additionAssignmentTitle: string;
  additionTasks: TaskInterface[];
  message: string;
  form: boolean;
  rules: Rules
}

// FIXME убрать валидацию сразу после добавления задания
// скорее всего из-за того. что присваиваю additionAssignmentTitle = ''

export default Vue.extend({
  data: (): DataInerface => {
    return {
      dialog: false,
      additionAssignmentTitle: '',
      additionTasks: [],
      message: 'Add assignment',
      form: false,
      rules: {
        required: value => !!value || 'Field is required',
      },
    }
  },
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
    addTask(): void {
      const task = {
        id: this.additionTasks.length + 1,
        value: '',
        done: false,
        pattern: /^\s*$/,
        class: 'textfield__valid'
      }
      this.additionTasks.push(task);
    },
    deleteTask(index: number): void {
      this.additionTasks.splice(index, 1);
    },
    addAssignment(): void {
      const assignment = {
        title: this.additionAssignmentTitle,
        tasks: this.additionTasks,
      }
      this.$store.dispatch('assignment/addAssignment', assignment);
      this.additionAssignmentTitle = '';
      this.additionTasks = [];
      this.dialog = false;
    },
  },
})
</script>