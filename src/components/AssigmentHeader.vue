<template>
    <div class="d-flex mb-3">
        <h2 class="text-h4 text-success fs-2">
            Assignment:&nbsp;
            <v-fade-transition leave-absolute>
                <span>
                    {{ assignmentList.length }}
                </span>
            </v-fade-transition>
        </h2>
        <v-spacer></v-spacer>
        <DialogAddition />
    </div>
</template>

<script lang="ts">
import DialogAddition from './DialogAddition.vue';
import { mapGetters } from 'vuex';
import Vue from 'vue';

export default Vue.extend({
    components: {
        DialogAddition
    },
    computed: {
        ...mapGetters('assignment', {
            assignmentList: 'assignments',
        })
    }
})
</script>