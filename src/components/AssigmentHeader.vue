<template>
    <div class="d-flex mb-3">
        <h2 class="text-h4 text-success ps-4">
            Assignment:&nbsp;
            <v-fade-transition leave-absolute>
                <span>
                    {{ assignmentList.length }}
                </span>
            </v-fade-transition>
        </h2>
        <v-spacer></v-spacer>
        <ButtonOutline text="Add" color="success" append-icon="mdi-plus" />
    </div>
</template>

<script lang="ts">
import ButtonOutline from './ButtonOutline.vue';
import { mapGetters } from 'vuex';

export default {
    components: {
        ButtonOutline
    },
    computed: {
        ...mapGetters('assignment', {
            assignmentList: 'assignments',
        })
    }
}
</script>