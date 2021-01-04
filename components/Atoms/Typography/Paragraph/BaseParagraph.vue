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
import BaseParagraphInterface from "~/components/Atoms/Typography/Paragraph/BaseParagraphInterface";

@Component
export default class BaseParagraph extends Vue implements BaseParagraphInterface{
  @Prop({required:false, type:String, default:"light", validator(value: string): boolean {
      let expectedValues:Array<string> = ['light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'];
      return expectedValues.includes(value);
    }}) visualType!: string;
}
</script>

<style scoped>

p.p-light{
  color: black;
}
p.p-dark{
  color: white;
}

p.p-primary{
  color: var(--primary_text);
}

p.p-secondary{
  color: var(--secondary_text);
}

p.p-success{
  color: var(--success_text);
}

p.p-danger{
  color: var(--danger_text);
}

p.p-warning{
  color: var(--warning_text);
}

p.p-info{
  color: var(--info_text);
}
</style>
