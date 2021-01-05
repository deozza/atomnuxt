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
      <BaseHeader html-type="h2">Buttons</BaseHeader>
      <BaseHeader html-type="h3">Button colours</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton visual-type="primary">Primary</BaseButton>
        <BaseButton visual-type="secondary">Secondary</BaseButton>
        <BaseButton visual-type="success">Success</BaseButton>
        <BaseButton visual-type="danger">Danger</BaseButton>
        <BaseButton visual-type="warning">Warning</BaseButton>
        <BaseButton visual-type="info">Info</BaseButton>
      </div>
      <BaseHeader html-type="h3">Button with style</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton icon="times">With icon</BaseButton>
        <BaseButton icon="times" only-icon></BaseButton>
        <BaseButton disabled>Disabled</BaseButton>
        <BaseButton loading>Loading</BaseButton>
        <BaseButton outline>Outline</BaseButton>
      </div>
    </section>

    <section>
      <BaseHeader html-type="h2">Typography</BaseHeader>

      <BaseHeader html-type="h3">Headers</BaseHeader>

      <BaseHeader html-type="h4">Headers sizes</BaseHeader>
      <BaseHeader html-type="h1">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h2">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h3">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h4">Lorem ipsum dolor sit amet</BaseHeader>

      <BaseHeader html-type="h4">Headers colours</BaseHeader>
      <BaseHeader html-type="h1" visual-type="primary">Lorem ipsum dolor sit amet in primary</BaseHeader>
      <BaseHeader html-type="h1" visual-type="secondary">Lorem ipsum dolor sit amet in secondary</BaseHeader>
      <BaseHeader html-type="h1" visual-type="success">Lorem ipsum dolor sit amet in success</BaseHeader>
      <BaseHeader html-type="h1" visual-type="danger">Lorem ipsum dolor sit amet in danger</BaseHeader>
      <BaseHeader html-type="h1" visual-type="warning">Lorem ipsum dolor sit amet in warning</BaseHeader>
      <BaseHeader html-type="h1" visual-type="info">Lorem ipsum dolor sit amet in info</BaseHeader>

      <BaseHeader html-type="h3">Paragraphs</BaseHeader>
      <BaseParagraph>Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="primary">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="secondary">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="success">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="danger">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="warning">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph visual-type="info">Lorem ipsum dolor sit amet</BaseParagraph>
    </section>

    <section>
      <BaseHeader html-type="h2">Form and inputs</BaseHeader>
      <BaseForm submit-text="Submit" submit-alignement="center" class="bg-info" :form="form" @formSubmitted="getFormData"/>
    </section>

    <section>
      <BaseTable :table="table" caption="Responsive table"/>
    </section>

    <section>
      <BaseHeader html-type="h2">Progress bar</BaseHeader>
      <BaseProgressBar :value="75" visual-type="primary"></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="secondary"></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="success"></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="danger"></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="warning"></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="info"></BaseProgressBar>

      <BaseHeader html-type="h3">Progress bar with animation</BaseHeader>
      <BaseProgressBar :value="75" visual-type="primary" animated></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="secondary" animated></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="success" animated></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="danger" animated></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="warning" animated></BaseProgressBar>
      <BaseProgressBar :value="75" visual-type="info" animated></BaseProgressBar>
    </section>

    <section>
      <BaseImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="image test"></BaseImage>
      <BaseImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="image test" max-width="50%"></BaseImage>
      <BaseImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="image test" :thumbnail="true" max-width="50%"></BaseImage>
    </section>

    <section>
      <BaseVideo src="https://www.youtube.com/embed/hGnBI0rDgA4" alt="Test vidéo" :iframe="true"></BaseVideo>
    </section>

    <section>
      <BaseBreadcrumb :links="breadcumbLinks"></BaseBreadcrumb>
    </section>

    <section>
      <BasePagination :links="paginationLinks"></BasePagination>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseTextInputModel from "~/components/Atoms/Input/TextInput/BaseTextInputModele";
import BaseForm from "~/components/Molecules/Form/BaseForm.vue";
import HorizontalNavbar from "~/components/Molecules/Menu/HorizontalNavbar.vue";
import BaseLinkModele from "~/components/Atoms/Link/BaseLinkModele";
import BaseTable from "~/components/Molecules/Table/BaseTable.vue";
import Table from "~/components/Molecules/Table/Table";
import BaseColumn from "~/components/Atoms/Table/BaseColumn";
import Columns from "~/components/Atoms/Table/Columns";
import Form from "~/components/Molecules/Form/Form";
import BaseButton from "~/components/Atoms/Button/BaseButton.vue";
import BaseParagraph from "~/components/Atoms/Typography/Paragraph/BaseParagraph.vue";
import BaseTextInput from "~/components/Atoms/Input/TextInput/BaseTextInput.vue";
import BaseSelectInput from "~/components/Atoms/Input/SelectInput/BaseSelectInput.vue";
import BaseHeader from "~/components/Atoms/Typography/Header/BaseHeader.vue";
import BaseProgressBar from "~/components/Atoms/ProgressBar/BaseProgressBar.vue";
import BaseImage from "~/components/Atoms/Media/Image/BaseImage.vue";
import BaseVideo from "~/components/Atoms/Media/Video/BaseVideo.vue";
import BaseFileInputModele from "~/components/Atoms/Input/FileInput/BaseFileInputModele";
import SelectItem from "~/components/Atoms/Input/SelectInput/SelectItem";
import BaseSelectInputModele from "~/components/Atoms/Input/SelectInput/BaseSelectInputModele";
import BaseBreadcrumb from "~/components/Molecules/Breadcrumb/BaseBreadcrumb.vue";
import BasePagination from "~/components/Molecules/Pagination/BasePagination.vue";

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
    BaseProgressBar,
    BaseImage,
    BaseVideo,
    BaseBreadcrumb,
    BasePagination
  }
})
export default class IndexPage extends Vue {


  form = this.createForm()

  private createForm(): Form{
    let form:Form = new Form();

    let inputText     = new BaseTextInputModel('text', 'Text input', 'text');
    let inputEmail    = new BaseTextInputModel('email', 'Email input', 'email');
    let inputTel      = new BaseTextInputModel('tel', 'Telephone input', 'tel');
    let inputPassword = new BaseTextInputModel('password', 'Password input', 'password');
    let inputNumber   = new BaseTextInputModel('number', 'Number input', 'number');
    let inputUrl      = new BaseTextInputModel('url', 'Url input', 'url');
    let inputRequired = new BaseTextInputModel('text', 'Required input', 'required', '', '', true);
    let inputReadonly = new BaseTextInputModel('text', 'Readonly input', 'readonly', '', '', false, true);
    let inputFile     = new BaseFileInputModele('file', 'File input', 'file', false, false, null, '', ['application/pdf']);

    const itemsForSelectInput: Array<SelectItem> = [
      {name:'Foo',value:1},
      {name:'Bar',value:2},
    ];

    let inputSelect         = new BaseSelectInputModele('select', 'Simple select input', 'select',  itemsForSelectInput);
    let inputRequiredSelect = new BaseSelectInputModele('select', 'Required select','select-required',  itemsForSelectInput, '', false, true);
    let inputRadio          = new BaseSelectInputModele('radio', 'Radio input','radio',  itemsForSelectInput);
    let inputCheckbox       = new BaseSelectInputModele('checkbox', 'Checkbox input','checkbox',  itemsForSelectInput);

    form.inputs.push(inputText, inputEmail, inputTel, inputPassword, inputNumber, inputUrl, inputRequired, inputReadonly, inputFile, inputSelect, inputRequiredSelect, inputRadio, inputCheckbox);

    return form;
  }

  private getFormData(e:Event){
    console.log(e);
  }

  menuLinks: Array<BaseLinkModele> = [
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

  breadcumbLinks: Array<BaseLinkModele> = [
    {
      link : "foo",
      title : 'foo',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
    {
      link : "bar",
      title : 'bar',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
    {
      link : "here",
      title : 'here',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
  ]

  paginationLinks: Array<BaseLinkModele> = [
    {
      link : "foo",
      title : '0',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
    {
      link : "foo",
      title : '2',
      customClasses: [],
      internalLink: true,
      icon: ""
    },
    {
      link : "foo",
      title : '3',
      customClasses: ['active'],
      internalLink: true,
      icon: ""
    },
    {
      link : "foo",
      title : '10',
      customClasses: [],
      internalLink: true,
      icon: ""
    },

  ]


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
