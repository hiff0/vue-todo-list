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

export interface AssignmentGetters {
    assignments: (state: AssignmentState) => Assignment[];
    assignment: (state: AssignmentState, id: number) => Assignment | undefined;
    tasks: (state: AssignmentState) => (index: number) => Task[];
}

