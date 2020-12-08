<template>
  <li
    class="flex-row"
  >
    <label :for="'text-'+id">
      <slot></slot>
    </label>
    <input
      :type="htmlType"
      :id="'text-'+id"
      :required="required"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :minlength="(minlength !== undefined && minlength !== null && htmlType === 'text') ? minlength : null"
      :maxlength="(maxlength !== undefined && maxlength !== null && htmlType === 'text') ? maxlength : null"
      :min="(min !== undefined && min !== null && htmlType === 'number') ? min : null"
      :max="(max !== undefined && max !== null && htmlType === 'number') ? max : null"
    >

  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseInputInterface from "~/components/Atoms/Input/BaseInputInterface";
interface BaseTextInputInterface extends BaseInputInterface{
  minlength: number;
  maxlength: number;
  min: number;
  max: number;
}

@Component
export default class BaseTextInput extends Vue implements BaseTextInputInterface{
  @Prop({required:true, type:String}) id!: string;
  @Prop({required:true, type:String}) name!: string;
  @Prop({
    required:false,
    type:String,
    default:"text",
    validator(value: string): boolean {
      let expectedHtmlType = ['text', 'email', 'tel', 'password', 'url', 'number'];
      return expectedHtmlType.includes(value);
    }

  }) htmlType!: string;
  @Prop({required:false, type:String, default:''}) placeholder!: string;
  @Prop({required:false, type:Boolean, default:false}) required!: boolean;
  @Prop({required:false, type:Boolean, default:false}) readonly!: boolean;
  @Prop({required:false, type:Number, default:null, validator(value: number): boolean {
      return value >= 0;
    }
  }) minlength!: number;
  @Prop({required:false, type:Number, default:null, validator(value: number): boolean {
      return value > 0;
    }}) maxlength!: number;
  @Prop({required:false, type:Number, default:null}) max!: number;
  @Prop({required:false, type:Number, default:null}) min!: number;

}
</script>

<style scoped>
li{
  padding: .5em;
  align-items: normal;
}

li> label{
  flex: 1;
  padding: .5em 1em .5em 0;
}

li > input{
  flex: 2;
}

@media screen and (max-width:760px) {
  .flex-row {
    flex-direction: column;
  }
}

</style>
