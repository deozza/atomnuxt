<template>
  <div class="horizontal-menu-content">
    <HorizontalNavbar
      theme="dark"
      :links="menuLinks"
    />
    <section>
      <BaseHeader html-type="h1">Nuxt toolbox</BaseHeader>
      <BaseParagraph>A cool toolbox of pre-baked components. Only need to add CSS to it to change colors and animations.</BaseParagraph>
    </section>
    <section>
      <BaseHeader html-type="h2">Standard buttons</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton visual-type="default">Default</BaseButton>
        <BaseButton visual-type="success">Success</BaseButton>
      </div>
      <BaseHeader html-type="h2">Button with style</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton visual-type="success" icon="times">With icon</BaseButton>
        <BaseButton visual-type="success" icon="times" :only-icon="true"></BaseButton>
        <BaseButton visual-type="success" :disabled="true">Disabled</BaseButton>
        <BaseButton visual-type="success" :loading="true">Loading</BaseButton>
        <BaseButton visual-type="success" :outline="true">Outline</BaseButton>
      </div>
    </section>

    <section>
      <BaseHeader html-type="h2">Typography</BaseHeader>
      <BaseParagraph>Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="success">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseHeader html-type="h2">Headers</BaseHeader>
      <BaseHeader html-type="h1">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h1" visual-type="success">Lorem ipsum dolor sit amet in green</BaseHeader>
      <BaseHeader html-type="h2">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h3">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h4">Lorem ipsum dolor sit amet</BaseHeader>
    </section>

    <section>
      <BaseHeader html-type="h2">Inputs</BaseHeader>
      <BaseForm submit-text="Submit" submit-alignement="center">
          <BaseTextInput name="Text input as a row" id="text-row"      html-type="text">Text input as a row</BaseTextInput>
          <BaseTextInput name="Email input"         id="email"         html-type="email">Email input</BaseTextInput>
          <BaseTextInput name="Tel input"           id="tel"           html-type="tel">Tel input</BaseTextInput>
          <BaseTextInput name="Password input"      id="password"      html-type="password">Password input</BaseTextInput>
          <BaseTextInput name="Number input"        id="number"        html-type="number">Number input</BaseTextInput>
          <BaseTextInput name="Url input"           id="url"           html-type="url">Url input</BaseTextInput>
          <BaseTextInput name="Required text input" id="text-required" html-type="text" :required="true">Text input required</BaseTextInput>
          <BaseTextInput name="Readonly input"      id="text-readonly" html-type="text" :readonly="true">Text input readonly</BaseTextInput>
          <BaseSelectInput name="Select"            id="select"        html-type="select"   :items="itemsForSelectInput">Simple select input</BaseSelectInput>
          <BaseSelectInput name="Radio"             id="radio"         html-type="radio"    :items="itemsForSelectInput">Simple radio input</BaseSelectInput>
          <BaseSelectInput name="Checkbox"          id="checkbox"      html-type="checkbox" :items="itemsForSelectInput">Simple checkbox input</BaseSelectInput>
      </BaseForm>
    </section>

    <section>
      <BaseTable :table="table" caption="Responsive table"/>
    </section>

    <section>
      <BaseProgressBar :value="75" animated></BaseProgressBar>
    </section>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "~/components/Atoms/Button/BaseButton.vue";
import BaseParagraph from "~/components/Atoms/Typography/BaseParagraph.vue";
import BaseTextInput from "~/components/Atoms/Input/BaseTextInput.vue";
import BaseSelectInput from "~/components/Atoms/Input/BaseSelectInput.vue";
import BaseForm from "~/components/Molecules/Form/BaseForm.vue";
import BaseHeader from "~/components/Atoms/Typography/BaseHeader.vue";
import HorizontalNavbar from "~/components/Molecules/Menu/HorizontalNavbar.vue";
import Link from "~/components/Atoms/Link/Link";
import BaseTable from "~/components/Molecules/Table/BaseTable.vue";
import Table from "~/components/Molecules/Table/Table";
import BaseColumn from "~/components/Atoms/Table/BaseColumn";
import Columns from "~/components/Atoms/Table/Columns";
import BaseProgressBar from "~/components/Atoms/ProgressBar/BaseProgressBar.vue";

@Component({
  components: {
    BaseButton,
    BaseParagraph,
    BaseTextInput,
    BaseSelectInput,
    BaseForm,
    BaseHeader,
    HorizontalNavbar,
    BaseTable,
    BaseProgressBar
  }
})
export default class IndexPage extends Vue {
  itemsForSelectInput: Array<object> = [
    {name:'Foo',value:1},
    {name:'Bar',value:2},
  ];

  menuLinks: Array<Link> = [
    {
      link : "verticalNavbar",
      title : 'VerticalNavbar',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
    {
      link : "https://github.com/deozza/toolbox",
      title : 'Mon repo git',
      customClasses: [],
      internalLink: false,
      icon: "fab fa-github"
    }
  ];


  objectForTable: Array<object> = [
    {
      id: 1,
      name: 'Dom',
      salary: '6000',
      link: 'https://fake-url/1'
    },
    {
      id: 2,
      name: 'Melissa',
      salary: '4000',
      link: 'https://fake-url/2'
    }
  ];

  baseColumns: Array<BaseColumn> = [
    new BaseColumn('id', 'id'),
    new BaseColumn('Nom', 'name'),
    new BaseColumn('Salaire', 'salary')
  ];

  actionColumns: Array<BaseColumn> = [
    new BaseColumn('voir', 'link', 'fas fa-eye'),
    new BaseColumn('supprimer', 'link', 'fas fa-times')
  ];

  columns: Columns = new Columns(this.baseColumns, this.actionColumns);

  table: Table = new Table(this.columns, this.objectForTable);
}
</script>

<style>

</style>
