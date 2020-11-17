<template>
  <p
    :class="[
	      { [`p-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseParagraphInterface {
  visualType: String
}

@Component
export default class BaseParagraph extends Vue implements BaseParagraphInterface{
  @Prop({required:false, type:String, default:"default"}) visualType!: String;
}
</script>

<style scoped>
p.p-success{
  color: var(--green_bg);
}
</style>
