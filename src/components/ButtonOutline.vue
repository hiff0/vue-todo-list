<template>
    <div>
        <v-btn 
            :color="color" 
            variant="outlined" 
            @click="onClick" 
            :size="size" 
            :disabled="disabled"
            :type="type"
        >
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
        },
        preIcon: {
            type: String,
            default: ''
        },
        appendIcon: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'button'
        }
    },
    methods: {
        onClick() {
            this.$emit('buttonclick');
        }
    }
})
</script>