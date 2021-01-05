<template>
  <div>
    <BaseLink v-for="link in links" :link="link"></BaseLink>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseLink from "~/components/Atoms/Link/BaseLink.vue";
import BaseLinkModele from "~/components/Atoms/Link/BaseLinkModele";
import BasePaginationInterface from "./BasePaginationInterface";

@Component({
  components: {BaseLink}
})
export default class BasePagination extends Vue implements BasePaginationInterface{
  @Prop({required:true, type:Array}) links!: Array<BaseLinkModele>;

}
</script>

<style scoped>
div {
  display: inline-block;
}

div a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

div a.active {
  background-color: #4CAF50;
  color: white;
}

div a:hover {
  background-color: #ddd;
}
</style>
