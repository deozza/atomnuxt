<template>
  <div>
    <HorizontalNavbar :theme="'light'"></HorizontalNavbar>
    <section>
      <BaseHeader html-type="h1">Nuxt toolbox</BaseHeader>
      <BaseParagraph>A cool toolbox of pre-baked components. Only need to add CSS to it to change colors and animations.</BaseParagraph>
    </section>
    <section>
      <BaseHeader html-type="h2">Standard buttons</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton :visual-type="'default'">Default</BaseButton>
        <BaseButton :visual-type="'success'">Success</BaseButton>
      </div>
      <BaseHeader html-type="h2">Button with style</BaseHeader>
      <div class="flex-row flex-left">
        <BaseButton :visual-type="'success'" :icon="'times'">With icon</BaseButton>
        <BaseButton :visual-type="'success'" :icon="'times'" :only-icon="true"></BaseButton>
        <BaseButton :visual-type="'success'" :disabled="true">Disabled</BaseButton>
        <BaseButton :visual-type="'success'" :loading="true">Loading</BaseButton>
        <BaseButton :visual-type="'success'" :outline="true">Outline</BaseButton>
      </div>
    </section>

    <section>
      <BaseHeader html-type="h2">Typography</BaseHeader>
      <BaseParagraph>Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseParagraph :visual-type="'success'">Lorem ipsum dolor sit amet</BaseParagraph>
      <BaseHeader html-type="h2">Headers</BaseHeader>
      <BaseHeader html-type="h1">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h1" visual-type="success">Lorem ipsum dolor sit amet in green</BaseHeader>
      <BaseHeader html-type="h2">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h3">Lorem ipsum dolor sit amet</BaseHeader>
      <BaseHeader html-type="h4">Lorem ipsum dolor sit amet</BaseHeader>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import BaseParagraph from "~/components/Typography/BaseParagraph.vue";
import BaseHeader from "~/components/Typography/BaseHeader.vue";
import HorizontalNavbar from "~/components/Menus/HorizontalNavbar.vue";

@Component({
  components: {
    BaseButton,
    BaseParagraph,
    BaseHeader,
    HorizontalNavbar
  }
})
export default class IndexPage extends Vue {
}
</script>

<style>

</style>
