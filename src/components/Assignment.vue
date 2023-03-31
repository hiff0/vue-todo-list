<template>
    <div>
        <v-row v-for="(assigment, index) of assignmentList" :key="index">
            <v-col>
                <v-card :title="assigment.title" variant="outlined" class="pa-3">
                    <h2>{{ assigment.title }}</h2>
                    <AssignmentTask :index="index" />
                    <v-card-actions>
                        <ButtonOutline text="Change" color="primary" class="mr-3" />
                        <DialogDelete :index="index"/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import AssignmentTask from './AssignmentTask.vue';
import ButtonOutline from './ButtonOutline.vue';
import DialogDelete from './DialogDelete.vue';
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        AssignmentTask,
        ButtonOutline,
        DialogDelete

    },
    computed: {
        ...mapGetters('assignment', {
            assignmentList: 'assignments',
        }),
    }
})
</script>