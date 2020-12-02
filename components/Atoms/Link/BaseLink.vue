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
import Link from "./Link";

interface BaseLinkInterface {
  link: Link;
}

@Component
export default class BaseLink extends Vue implements BaseLinkInterface{
  @Prop({required:true, type:Object}) link!: Link;
}
</script>

<style scoped>

</style>
