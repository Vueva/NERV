<!--
 * @FilePath: /NERV/src/components/Block.vue
 * @Author: maggot-code
 * @Date: 2023-02-26 21:19:32
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-02-26 21:36:29
 * @Description: 
-->
<script setup lang='ts'>
import { computed } from 'vue';

const props = withDefaults(defineProps<{
    index?: number;
    height?: number;
}>(), {
    index: 0,
    height: 0
});

const style = computed(() => {
    const value = props.height <= 0 ? "auto" : `${props.height}px`;
    return {
        height: value
    }
});
</script>

<template>
    <div class="block" :style="style">
        <span>{{ index }}</span>
    </div>
</template>

<style scoped lang='scss'>
.block {
    width: 100%;
    margin-bottom: 6px;
    background-color: randomColor();
}
</style>
