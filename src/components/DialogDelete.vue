<template>
    <v-dialog v-model="dialog"
            persistent
            width="auto">
        <template v-slot:activator="{props}">
            <ButtonOutline text="Delete" color="warning" class="mr-3" v-bind="props" @buttonclick="openDialog"/>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                Сonfirm action
            </v-card-title>
            <v-card-actions>
                <ButtonOutline text="Cancel" color="primary" class="mr-5" @buttonclick="closeDialog"/>
                <ButtonOutline text="Delete" color="warning" @buttonclick="confirmDelete"/>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import ButtonOutline from './ButtonOutline.vue';
import Vue from 'vue';

export default Vue.extend({
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            dialog: false,
        }
    },
    components: {
        ButtonOutline
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        },
        confirmDelete() {
            this.$store.dispatch('assignment/deleteAssignment', this.index);
            this.dialog = false;
        }
    }   
});
</script>