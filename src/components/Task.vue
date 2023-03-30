<template>
    <div>
        <v-card-item v-for="(task, index) of getTasks" :key="index">
            <p class="fs-4 mt-3">
                <v-icon v-if="task.done" color="success">
                    mdi-check
                </v-icon>
                {{ task.value }}
            </p>
        </v-card-item>
    </div>
</template>

<script lang="ts">
import { Task } from '@/interfaces'
import task from '@/store/modules/task'
import Vue from 'vue'

interface Props {
    tasks: Task[]
}

export default Vue.extend({
    //TODO Добавить тип пропса
    props: {
        index: {
            type: Number,
            required: true,
            validator: function (value: number) {
                return value >= 0
            }
        }
    },
    computed: {
        getTasks(): Task[] {
            // const taks: Task[] = this.$store.getters['assignment/tasks'](this.index)
            // if (task.length > 5) {
            //     return taks.slice(4, task.length)
            // }

            // return task
            return this.$store.getters['assignment/tasks'](this.index)
        }
    }
})
</script>