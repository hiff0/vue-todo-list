export interface Task {
    id: number,
    value: string,
    done: boolean
}

export interface Assignment {
    id: number,
    title: string,
    tasks: Task[],
    done: boolean
}

export interface AssignmentState {
    assignmentList: Assignment[]
}

export interface RootState {
    version: string;
}

