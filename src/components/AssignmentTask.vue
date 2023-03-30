<template>
    <div>
        <div v-for="(task, index) of getTasks" :key="index">
            <p class="mt-3">
                <v-icon v-if="task.done" color="success">
                    mdi-check
                </v-icon>
                {{ task.value }}
            </p>
        </div>
        <ButtonOutline text="" pre-icon="mdi-arrow-down" color="indigo-lighten-3"/>
    </div>
</template>

<script lang="ts">
import { Task } from '@/interfaces';
import Vue from 'vue';
import ButtonOutline from './ButtonOutline.vue';

export default Vue.extend({
    props: {
        index: {
            type: Number,
            required: true,
            validator: function (value: number) {
                return value >= 0
            }
        }
    },
    components: {
        ButtonOutline
    },
    computed: {
        getTasks(): Task[] {
            const todos = this.$store.getters['assignment/tasks'](this.index)
            if (todos.length > 5) {
                return todos.slice(0, 5)
            }

            return this.$store.getters['assignment/tasks'](this.index)
        }
    }
})
</script>