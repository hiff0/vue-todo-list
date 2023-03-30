<template>
    <div>
        <v-row v-for="(assigment, index) of assignmentList" :key="index">
            <v-col>
                <v-card :title="assigment.title" variant="outlined">
                    <h2>{{ assigment.title }}</h2>
                    <AssignmentTask :index="index" />
                    <v-card-actions>
                        <ButtonOutline text="Change" color="success" class="mr-3" />
                        <ButtonOutline text="Delete" color="warning" class="mr-3" />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts">
import AssignmentTask from './Task.vue';
import ButtonOutline from './ButtonOutline.vue';
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
    components: {
        AssignmentTask,
        ButtonOutline
    },
    computed: {
        ...mapGetters('assignment', {
            assignmentList: 'assignments',
        }),
    }
})
</script>