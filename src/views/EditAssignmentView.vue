<template>
  <!-- <v-container style="max-width: 500px">
    <v-text-field v-model="newTask" label="What are you working on?" variant="solo" @keydown.enter="create">
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="create">
            mdi-plus-circle
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <h2 class="text-h4 text-success ps-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 text-info-darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 text-success-darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular v-model="progress" class="me-2"></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="i">
            <v-list-item-action>
              <v-checkbox v-model="task.done" :color="task.done && 'grey' || 'primary'">
                <template v-slot:label>
                  <div :class="task.done && 'text-grey' || 'text-primary'" class="ms-4" v-text="task.text"></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
    {{ assignmentList(parseInt($route.params.id) - 1) }}
  </v-container> -->
  <v-container>
    <v-card>
      <v-text-field
        v-model="assignment.title"
        :rules="[rules.required]"
        label="Assignment title" 
        clearable
      >
      </v-text-field>
      <v-row v-for="(task, index) in assignment.tasks" :key="index">
        <v-col cols="12">
          <v-checkbox 
            v-model="task.done" 
          >
          </v-checkbox>
          <v-text-filed
            v-model="task.value"
          >
          </v-text-filed> -->
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Assignment } from '@/interfaces';
import Vue from 'vue';

interface Rules {
  required: (value: string) => true | "Field is required";
}

interface DataInerface {
  enabled: boolean;
  rules: Rules
}

export default Vue.extend({
  data(): DataInerface {
    return {
      enabled: false,
      rules: {
        required: value => !!value || 'Field is required',
      },
    }
  },
  computed: {
    assignment(): Assignment { 
      return this.$store.getters['assignment/getAssignmentByIndext'](parseInt(this.$route.params.id) - 1);
    },
    // completedTasks() {
    //   return this.tasks.filter(task => task.done).length
    // },
    // progress() {
    //   return this.completedTasks / this.tasks.length * 100
    // },
    // remainingTasks() {
    //   return this.tasks.length - this.completedTasks
    // },
  },
  methods: {
    // create() {
    //   this.tasks.push({
    //     done: false,
    //     text: this.newTask,
    //   })

    //   this.newTask = null
    // },
  },
})
</script>