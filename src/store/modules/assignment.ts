import { Assignment } from "@/interfaces"
import { Task } from "@/interfaces"
import { AssignmentState } from "@/interfaces"
import { AssignmentGetters } from "@/interfaces"

const tasksList: Task[] = [
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
    }
]


const assignmentList: Assignment[] = [
    {
        id: 1,
        title: 'Задача 1',
        tasks: tasksList,
        done: false
    },
    {
        id: 2,
        title: 'Задача 2',
        tasks: tasksList,
        done: false
    }
]


export default {
    namespaced: true,
    state: {
        assignmentList
    },
    getters: {
        assignments(state: AssignmentState) {
            return state.assignmentList
        },
        assignment: (state: AssignmentState) => (id: number) => {
            for (const assign of state.assignmentList) {
                if (assign.id === id) {
                    return assign
                }
            }
        },
        tasks: (state: AssignmentState) => (index: number): Task[] => {
            return state.assignmentList[index].tasks
        }
    },
    mutations: {
    },
    actions: {
    },
}