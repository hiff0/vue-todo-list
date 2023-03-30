import { Store } from 'vuex'
import { Task } from './interfaces'
import { Assignment } from './interfaces'

declare module '@vue/runtime-core' {

    interface State {
        assignmentList: Assignment[]
    }

    //  Типизация для this.$store
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}