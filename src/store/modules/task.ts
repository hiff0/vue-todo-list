import { Task } from "@/interfaces"

export const tasksList: Array<Task> = [
    {
        id: 1,
        value: 'Добавляйте задачу!',
        done: false
    }
]

export default {
    namespaced: true,
    state: {
        tasksList
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
}