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

  <h5 v-else-if="htmlType === 'h5'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h5>

  <h6 v-else-if="htmlType === 'h6'"
      :class="[
	      { [`h-${visualType}`]: visualType },
    	]"
  >
    <slot></slot>
  </h6>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseHeaderInterface {
  htmlType: string;
  visualType: string;
}

@Component
export default class BaseHeader extends Vue implements BaseHeaderInterface{
  @Prop({required:true, type:String, validator(value: string): boolean {
      let expectedValues:Array<string> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
      return expectedValues.includes(value);
    }}) htmlType!: string;
  @Prop({required:false, type:String, default:"light", validator(value: string): boolean {
      let expectedValues:Array<string> = ['light', 'dark', 'default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'];
      return expectedValues.includes(value);
    }}) visualType!: string;
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

.h-light{
  color: black;
}
.h-dark{
  color: white;
}
.h-primary{
  color: var(--primary_text);
}

.h-secondary{
  color: var(--secondary_text);
}

.h-success{
  color: var(--success_text);
}

.h-danger{
  color: var(--danger_text);
}

.h-warning{
  color: var(--warning_text);
}

.h-info{
  color: var(--info_text);
}

</style>
