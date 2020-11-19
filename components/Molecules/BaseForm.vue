<template>
  <form action="">
    <ul>
      <slot></slot>
    </ul>
    <div
      :class="[
          { [`flex-${submitAlignement}`]: submitAlignement },
      ]"
      class="flex-row"
    >
      <BaseButton html-type="submit">{{submitText}}</BaseButton>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseButton from "~/components/Atoms/BaseButton.vue";

interface BaseFormInterface{
  submitText:string,
  submitAlignement:string
}

@Component({
  components: {
    BaseButton,
  }
})
export default class BaseForm extends Vue implements BaseFormInterface{
  @Prop({required:true, type:String}) submitText!: string;
  @Prop({required:false, type:String, default:'center', validator(value: string): boolean {
      let expectedSubmitAlignement = ['center', 'left', 'right'];
      return expectedSubmitAlignement.includes(value);
    }
  }) submitAlignement!: string;
}
</script>

<style scoped>

</style>
