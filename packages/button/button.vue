<template>
    <div class="x-button" :class="[buttonType]">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "XButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
    type: {
        type: String,
        default: "default",
    },
});

const buttonType = computed(() => `x-button--${props.type}`);
</script>
<style lang="scss" scoped></style>
