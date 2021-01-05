<template>
  <div class="vertical-menu-content">
    <VerticalNavbar
      theme="dark"
      :links="menuLinks"
    ></VerticalNavbar>
      <section>
        <BaseHeader html-type="h1">Vertical navbar exemple</BaseHeader>
        <BaseParagraph>Here is an exemple of a vertical, fixed and full height navbar.</BaseParagraph>
      </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLinkModele from "~/components/Atoms/Link/BaseLinkModele";
import VerticalNavbar from "~/components/Molecules/Menu/VerticalNavbar.vue";
import BaseHeader from "~/components/Atoms/Typography/Header/BaseHeader.vue";
import BaseParagraph from "~/components/Atoms/Typography/Paragraph/BaseParagraph.vue";

@Component({
  components: {
    VerticalNavbar,
    BaseHeader,
    BaseParagraph
  }
})
export default class verticalNavbarPage extends Vue {
  menuLinks: Array<BaseLinkModele> = [
    {
      link : "/",
      title : 'index',
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
    },
  ]
}
</script>

<style>

</style>
