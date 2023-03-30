<template>
    <div>
        <v-btn :color="color" variant="outlined" @click="onClick">
            {{ text }}
            <v-icon size="medium" v-if="preIcon">
                {{ preIcon }}
            </v-icon>
            <v-icon end size="medium" v-if="appendIcon">
                {{ appendIcon }}
            </v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        text: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '',
            // validator: function (value: string) {
            //     return ['success', 'warning', 'danger', 'primary', ''].includes(value)
            // }
        },
        preIcon: {
            type: String,
            default: ''
        },
        appendIcon: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick() {
            this.$emit('buttonclick');
        }
    }
})
</script>