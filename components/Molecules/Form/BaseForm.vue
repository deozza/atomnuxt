<template>
  <form action="">
    <ul>
      <div v-for="(input, index) in form.inputs">
        <BaseTextInput v-if="input.globalType === 'text'" :key="index" :html-type="input.htmlType" :name="input.name" :id="input.id" :readonly="input.readonly" :required="input.required">{{ input.label }}</BaseTextInput>
        <BaseSelectInput v-else-if="input.globalType === 'select'" :key="index" :html-type="input.htmlType" :name="input.name" :id="input.id" :readonly="input.readonly" :required="input.required" :items="input.items">{{ input.label }}</BaseSelectInput>
      </div>
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
import BaseButton from "~/components/Atoms/Button/BaseButton.vue";
import Form from "~/components/Molecules/Form/Form";
import BaseTextInput from "~/components/Atoms/Input/BaseTextInput.vue";
import BaseSelectInput from "~/components/Atoms/Input/BaseSelectInput.vue";

interface BaseFormInterface{
  submitText:string;
  submitAlignement:string;
  form:Form;
}

@Component({
  components: {
    BaseTextInput,
    BaseSelectInput,
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
  @Prop({required:true, type:Form}) form!: Form;

}
</script>

<style scoped>

</style>
