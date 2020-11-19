<template>
  <li
    :class="[
	      { [`flex-${inputOrientation}`]: inputOrientation },
    ]"
  >
    <label :for="'select-'+id">
      <slot></slot>
    </label>
    <select
      :id="'select-'+id"
      :required="required"
      :readonly="readonly"
      :name="name"
      :multiple="multiple"
    >
      <option :value="null"></option>
      <option v-for="option in items" :value="option.value" :name="option.name">{{option.name}}</option>
    </select>

  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseInputInterface from "~/components/Atoms/Inputs/BaseInputInterface";
interface BaseSelectInputInterface extends BaseInputInterface{
  items: Array<object>;
  multiple: boolean;
}

@Component
export default class BaseSelectInput extends Vue implements BaseSelectInputInterface{
  @Prop({required:true, type:String}) id!: string;
  @Prop({required:true, type:String}) name!: string;
  @Prop({required:true, type:String, validator(value: string): boolean {
      let expectedInputOrientation = ['row'];
      return expectedInputOrientation.includes(value);
    }}) inputOrientation!: string;
  @Prop({
    required:false,
    type:String,
    default:"select",
    validator(value: string): boolean {
      let expectedHtmlType = ['checkbox', 'radio', 'select'];
      return expectedHtmlType.includes(value);
    }

  }) htmlType!: string;
  @Prop({required:false, type:Boolean, default:false}) required!: boolean;
  @Prop({required:false, type:Boolean, default:false}) readonly!: boolean;
  @Prop({required:false, type:Array, default:[]}) items!: Array<object>;
  @Prop({required:false, type:Boolean, default:false}) multiple!: boolean;
}
</script>

<style scoped>
li{
  padding: .5em;
  align-items: normal;
}

li.flex-row > label{
  flex: 1;
  padding: .5em 1em .5em 0;
}

li.flex-row > select{
  flex: 2;
}

</style>
