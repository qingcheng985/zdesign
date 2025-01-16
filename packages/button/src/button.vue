<script setup lang="ts">
import { hello } from '@zdesign/shared';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <div @click="clickHandler">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@use 'styles/index';
</style>
