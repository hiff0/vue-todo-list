<template>
  <v-dialog v-model="dialog" persistent width="auto">
    <template v-slot:activator="{ props }">
      <ButtonOutline text="Add" color="primary" @buttonclick="openDialog" append-icon="mdi-plus" v-bind="props"
        v-bind:title="message" />
    </template>
    <v-card style="min-width: 350px">
      <v-card-title>
        <span class="text-h5">Adding assignment</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="additionAssignmentTitle" label="Assignment title" variant="solo"
                @input="assignmentValidation">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <ButtonOutline text="Add task" color="primary" @buttonclick="addTask" />
            </v-col>
          </v-row>
          <v-row v-for="(task, index) in additionTasks" :key="index">
            <v-col cols="11">
              <v-text-field v-model="task.value" label="Task title" @input="taskValidation">
              </v-text-field>
            </v-col>
            <v-col cols="1">
              <v-icon @click="deleteTask(index)" :title="'Delete Task'">
                mdi-minus-circle
              </v-icon>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <ButtonOutline text="Close" color="warning" @buttonclick="closeDialog" class="mr-3" />
        <ButtonOutline text="Save" color="success" @buttonclick="addAssignment" :disabled="buttonDisabled" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { Task } from '@/interfaces';
import ButtonOutline from './ButtonOutline.vue';

interface DataInerface {
  dialog: boolean;
  additionAssignmentTitle: string;
  additionTasks: Task[];
  message: string;
  isTasksMatching: boolean;
  isAssignmentTitleMatching: boolean;
}

// TODO добавить валидацию для title задания и value задачи

export default Vue.extend({
  data: (): DataInerface => {
    return {
      dialog: false,
      additionAssignmentTitle: '',
      additionTasks: [],
      message: 'Add assignment',
      isTasksMatching: false,
      isAssignmentTitleMatching: false,
    }
  },
  components: {
    ButtonOutline
  },
  computed: {
    buttonDisabled() {
      if (this.isAssignmentTitleMatching === true && this.isTasksMatching === true) {
        return true;
      }

      return false;
    }
  },
  methods: {
    openDialog(): void {
      this.dialog = true;
    },
    closeDialog(): void {
      this.dialog = false;
    },
    assignmentValidation(): void {
      if (/.*/s.test(this.additionAssignmentTitle)) {
        this.isAssignmentTitleMatching = true;
      } else {
        this.isAssignmentTitleMatching = false;
      }
    },
    taskValidation(): void {
      for (const task of this.additionTasks) {
        if (!(/^[A-Z0-9]/.test(task.value))) {
          this.isTasksMatching = false;
          return;
        }
      }

      this.isTasksMatching = true;
    },
    addTask(): void {
      const task = {
        id: this.additionTasks.length + 1,
        value: '',
        done: false
      }
      this.additionTasks.push(task);
      this.isTasksMatching = false;
    },
    deleteTask(index: number): void {
      this.additionTasks.splice(index, 1);
    },
    addAssignment(): void {
      const assignment = {
        title: this.additionAssignmentTitle,
        tasks: this.additionTasks
      }
      this.$store.dispatch('assignment/addAssignment', assignment);
      this.additionAssignmentTitle = '';
      this.additionTasks = [];
      this.dialog = false;
    },
  },
})
</script>