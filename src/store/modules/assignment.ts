import { Assignment } from "@/interfaces"
import { Task } from "@/interfaces"
import { AssignmentState, RootState } from "@/interfaces"
import { Module } from 'vuex'

const tasksListOne: Task[] = [
    {
        id: 1,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 2,
        value: 'Подзадача',
        done: false
    },
    {
        id: 3,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 4,
        value: 'Подзадача 2',
        done: false
    },
    {
        id: 5,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 6,
        value: 'Подзадача 3',
        done: false
    },
    {
        id: 7,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 8,
        value: 'Подзадача 2',
        done: false
    },
    {
        id: 9,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 10,
        value: 'Подзадача 3',
        done: false
    }
]

const tasksListTwo: Task[] = [
    {
        id: 1,
        value: 'Добавляйте задачу!',
        done: true
    },
    {
        id: 2,
        value: 'Подзадача',
        done: false
    },
    {
        id: 3,
        value: 'Добавляйте задачу!',
        done: true
    },
]

const assignmentList: Assignment[] = [
    {
        id: 1,
        title: 'Задача 1',
        tasks: tasksListOne,
        done: false
    },
    {
        id: 2,
        title: 'Задача 2',
        tasks: tasksListTwo,
        done: false
    }
]

const assignment: Module<AssignmentState, RootState> = {
    namespaced: true,
    state: {
        assignmentList
    },
    getters: {
        assignments(state): Assignment[] {
            return state.assignmentList
        },
        assignment: (state) => (id: number): Assignment | undefined => {
            for (const assign of state.assignmentList) {
                if (assign.id === id) {
                    return assign
                }
            }
        },
        tasks: (state) => (index: number): Task[] => {
            return state.assignmentList[index].tasks
        }
    },
    mutations: {
        deleteAssignment(state, index: number): void { 
            state.assignmentList.splice(index, 1)
        }
    },
    actions: {
        deleteAssignment({ commit }, index: number): void { 
            commit('deleteAssignment', index)
        }
    },
}

export default assignment;