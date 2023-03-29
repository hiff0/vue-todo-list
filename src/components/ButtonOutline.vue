<template>
    <div>
        <v-btn :color="color" variant="outlined">
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
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true,
            validator: function (value: string) {
                return ['success', 'warning', 'danger', 'primary'].includes(value)
            }
        },
        preIcon: {
            type: String,
            default: ''
        },
        appendIcon: {
            type: String,
            default: ''
        }
    }
}
</script>