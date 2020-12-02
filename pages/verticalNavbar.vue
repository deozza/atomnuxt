<template>
  <div >
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
import Link from "~/components/Atoms/Link/Link";
import VerticalNavbar from "~/components/Molecules/Menus/VerticalNavbar.vue";
import BaseHeader from "~/components/Atoms/Typography/BaseHeader.vue";
import BaseParagraph from "~/components/Atoms/Typography/BaseParagraph.vue";

@Component({
  components: {
    VerticalNavbar,
    BaseHeader,
    BaseParagraph
  }
})
export default class verticalNavbarPage extends Vue {
  menuLinks: Array<Link> = [
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
