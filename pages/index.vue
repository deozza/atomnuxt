<template>
  <div>
    <HorizontalNavbar :theme="'light'"></HorizontalNavbar>
    <section>
      <h2>Standard buttons</h2>
      <div class="flex-row flex-left">
        <BaseButton :visual-type="'default'">Default</BaseButton>
        <BaseButton :visual-type="'success'">Success</BaseButton>
      </div>
      <h2>Button with style</h2>
      <div class="flex-row flex-left">
        <BaseButton :visual-type="'success'" :icon="'times'">With icon</BaseButton>
        <BaseButton :visual-type="'success'" :icon="'times'" :only-icon="true"></BaseButton>
        <BaseButton :visual-type="'success'" :disabled="true">Disabled</BaseButton>
        <BaseButton :visual-type="'success'" :loading="true">Loading</BaseButton>
        <BaseButton :visual-type="'success'" :outline="true">Outline</BaseButton>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "~/components/BaseButton.vue";
import HorizontalNavbar from "~/components/Menus/HorizontalNavbar.vue";

@Component({
  components: {
    BaseButton,
    HorizontalNavbar
  }
})
export default class IndexPage extends Vue {
}
</script>

<style>

</style>
