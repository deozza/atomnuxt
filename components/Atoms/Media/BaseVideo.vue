<template>
  <div
    <iframe
      v-if="iframe === true"
      :src="src"
      :alt="alt"
      height="315"
      width="560"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameborder="0"
      allowfullscreen
    ></iframe>

  <video
    v-else
    :src="src"
    :alt="alt"
    :style="cssVars"
    controls
  ></video>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseVideoInterface {
  src: string;
  alt: string;
  iframe: boolean;
}

@Component
export default class BaseVideo extends Vue implements BaseVideoInterface{
  @Prop({required:true, type:String}) src!: string;
  @Prop({required:true, type:String}) alt!: string;
  @Prop({required:false, type:Boolean, default: false}) iframe!: boolean;

};

</script>

<style scoped>

</style>
