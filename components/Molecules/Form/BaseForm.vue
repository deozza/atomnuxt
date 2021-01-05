<template>
  <form @submit.prevent="submitForm()">
    <ul>
      <li v-for="(input, index) in form.inputs" class="flex-column">
        <BaseParagraph v-if="input.error !== undefined && input.error !== null && input.error !== ''" visual-type="danger">{{input.error}}</BaseParagraph>
        <div class="flex-row input-row">

          <label :for="input.id">
            {{input.label}}<span v-if="input.required" class="required-field">*</span>
          </label>

          <input
            v-if="input.constructor.name === 'BaseTextInputModele'"
            :type="input.htmlType"
            :id="input.id"
            :required="input.required"
            :readonly="input.readonly"
            :placeholder="input.placeholder"
            :name="input.name"
            :minlength="(input.minlength !== undefined && input.minlength !== null && input.htmlType === 'text') ? input.minlength : null"
            :maxlength="(input.maxlength !== undefined && input.maxlength !== null && input.htmlType === 'text') ? input.maxlength : null"
            :min="(input.min !== undefined && input.min !== null && input.htmlType === 'number') ? input.min : null"
            :max="(input.max !== undefined && input.max !== null && input.htmlType === 'number') ? input.max : null"
            v-model="input.value"
          >

          <input
            v-if="input.constructor.name === 'BaseFileInputModele'"
            :type="input.htmlType"
            :id="input.id"
            :required="input.required"
            :readonly="input.readonly"
            :accept="input.accept"
            v-on:change="handleFileChange(index)"
          >

          <select
            v-if="input.constructor.name === 'BaseSelectInputModele' && input.htmlType === 'select'"
            :id="input.id"
            :required="input.required"
            :readonly="input.readonly"
            :name="input.name"
            :multiple="input.multiple"
            v-model="input.value"
          >
            <option :value="null"></option>
            <option v-for="option in input.items" :value="option.value" :name="option.name">{{option.name}}</option>
          </select>

          <label
            v-if="input.constructor.name === 'BaseSelectInputModele' && input.htmlType !== 'select'"
            v-for="option in input.items" :for="'select-'+option.value"
          >
            <input
              :type="input.htmlType"
              :id="'select'+option.value"
              :name="input.name"
              :value="option.value"
              :required="input.required"
              v-model="input.value"
            >
            {{option.name}}
          </label>

        </div>

      </li>
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
import Form from "~/components/Molecules/Form/Form";
import BaseTextInput from "~/components/Atoms/Input/TextInput/BaseTextInput.vue";
import BaseSelectInput from "~/components/Atoms/Input/SelectInput/BaseSelectInput.vue";
import BaseButton from "~/components/Atoms/Button/BaseButton.vue";
import BaseParagraph from "~/components/Atoms/Typography/Paragraph/BaseParagraph.vue";

interface BaseFormInterface{
  submitText:string;
  submitAlignement:string;
  form:Form;
  formIsSubmitted: string;
}

@Component({
  components: {
    BaseTextInput,
    BaseSelectInput,
    BaseButton,
    BaseParagraph
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
  formIsSubmitted = "formSubmitted";

  submitForm(){
    this.$emit(this.formIsSubmitted, this.form.inputs)
  }

  handleFileChange(index:number){
    let reader = new FileReader();
    reader.onload =  evt => {
      if(evt.target !== null){
        this.form.inputs[index].value = evt.target.result;
      }
    }
  }

}
</script>

<style scoped>
form > ul > li > div{
  padding: .5em;
  align-items: normal;
}

form > ul > li > div > label{
  flex: 1;
  padding: .5em 1em .5em 0;
}

form > ul > li > div > input, form > ul > li > div > select{
  flex: 2;
}

form > ul > li > div > label span.required-field{
  margin-left: 6px;
  color: var(--danger_text);
}

form ul li div.input-row{
  width: 98%;
}

@media screen and (max-width:760px) {
  .flex-row {
    flex-direction: column;
  }
}
</style>
