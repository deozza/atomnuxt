<template>
  <n-link v-if="link.internalLink === true" :to="link.link" :class="link.customClasses">
    <i v-if="link.icon !== undefined && link.icon.length > 0" :class="link.icon"></i>
    {{link.title}}
  </n-link>
  <a v-else :href="link.link" target="_blank" :class="link.customClasses">
    <i v-if="link.icon !== undefined && link.icon.length > 0" :class="link.icon"></i>
    {{link.title}}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BaseLinkModele from "./BaseLinkModele";

interface BaseLinkInterface {
  link: BaseLinkModele;
}

@Component
export default class BaseLink extends Vue implements BaseLinkInterface{
  @Prop({required:true, type:Object}) link!: BaseLinkModele;
}
</script>

<style scoped>

</style>
