<template>
  <h1 v-if="htmlType === 'h1'">
    <slot></slot>
  </h1>

  <h2 v-else-if="htmlType === 'h2'">
    <slot></slot>
  </h2>

  <h3 v-else-if="htmlType === 'h3'">
    <slot></slot>
  </h3>

  <h4 v-else-if="htmlType === 'h4'">
    <slot></slot>
  </h4>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseHeaderInterface {
  htmlType: String
}

@Component
export default class BaseHeader extends Vue implements BaseHeaderInterface{
  @Prop({required:true, type:String}) htmlType!: String;
}
</script>

<style scoped>
h1 {
  font-size: 4vw;
}

h2 {
  font-size: 2rem
}

h3 {
  font-size: 1.75rem
}

h1, h2, h3, h4, h5, h6 {
  margin: 20px 0 20px 0;
}

</style>
