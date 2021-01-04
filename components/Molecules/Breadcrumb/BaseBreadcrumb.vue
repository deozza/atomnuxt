<template>
  <ul>
    <li v-for="link in links">
      <BaseLink :link="link"></BaseLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseBreadcrumbInterface from "./BaseBreadcrumbInterface";
import BaseLink from "~/components/Atoms/Link/BaseLink.vue";
import BaseLinkModele from "~/components/Atoms/Link/BaseLinkModele";
import BaseParagraph from "~/components/Atoms/Typography/Paragraph/BaseParagraph.vue";

@Component({
  components: {BaseParagraph, BaseLink}
})
export default class BaseBreadcrumb extends Vue implements BaseBreadcrumbInterface{
  @Prop({required:true, type:Array}) links!: Array<BaseLinkModele>;

}
</script>

<style scoped>
ul {
  padding: 10px 16px;
  list-style: none;
  background-color: #eee;
}

ul li {
  display: inline;
  font-size: 18px;
}

ul li+li:before {
  padding: 8px;
  color: black;
  content: "/\00a0";
}

ul li a {
  color: #0275d8;
  text-decoration: none;
}

ul li a:hover {
  color: #01447e;
  text-decoration: underline;
}
</style>
