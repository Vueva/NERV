<!--
 * @FilePath: /NERV/src/App.vue
 * @Author: maggot-code
 * @Date: 2023-02-26 01:36:33
 * @LastEditors: maggot-code
 * @LastEditTime: 2023-02-26 21:37:37
 * @Description: 
-->
<script setup lang="ts"></script>

<template>
    <div class="app">
        <template v-for="(index) in 100" :key="index">
            <Block :index="index"></Block>
        </template>
    </div>
</template>

<style scoped lang="scss">
</style>
