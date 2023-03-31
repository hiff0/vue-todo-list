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
        <template v-if="isShowButton">
            <ButtonOutline text="" pre-icon="mdi-arrow-down" color="indigo-lighten-3" class="ml-2" @buttonclick="getAllTasks" v-if="!isShowAllTasks"/>
            <ButtonOutline text="" pre-icon="mdi-arrow-up" color="indigo-lighten-3" class="ml-2" @buttonclick="closeAllTasks" v-else/>
        </template>
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
    data() {
        return {
            isShowAllTasks: false,
            isShowArrowButton: false
        }
    },
    components: {
        ButtonOutline
    },
    computed: {
        getTasks(): Task[] {
            const todos = this.$store.getters['assignment/tasks'](this.index)

            if (todos.length > 3 && this.isShowAllTasks === false) {
                return todos.slice(0, 3);
            }
            
            return this.$store.getters['assignment/tasks'](this.index);
        },
        isShowButton(): boolean {
            const todos = this.$store.getters['assignment/tasks'](this.index)

            return todos.length > 3
        }
    },
    methods: {
        getAllTasks() {
            this.isShowAllTasks = true;
        },
        closeAllTasks() {
            this.isShowAllTasks = false;
        }
    }
})
</script>