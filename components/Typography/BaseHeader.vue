<template>
  <h1 v-if="htmlType === 'h1'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h1>

  <h2 v-else-if="htmlType === 'h2'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h2>

  <h3 v-else-if="htmlType === 'h3'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h3>

  <h4 v-else-if="htmlType === 'h4'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h4>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseHeaderInterface {
  htmlType: String,
  visualType: String
}

@Component
export default class BaseHeader extends Vue implements BaseHeaderInterface{
  @Prop({required:true, type:String}) htmlType!: String;
  @Prop({required:false, type:String, default:"default"}) visualType!: String;
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

.h-success{
  color: var(--green_bg);
}

</style>
