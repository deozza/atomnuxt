<template>
  <img
    :src="src"
    :alt="alt"
    :style="cssVars"
    :class="[
	      { 'img-thumbnail': thumbnail },
    	]"
    @click="actionOnClick"
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface BaseImageInterface {
  src: string;
  alt: string;
  thumbnail: boolean;
  maxWidth: string;
  action: string;
}

@Component
export default class BaseImage extends Vue implements BaseImageInterface{
  @Prop({required:true, type:String}) src!: string;
  @Prop({required:true, type:String}) alt!: string;
  @Prop({required:false, type:Boolean, default:false}) thumbnail!: boolean;
  @Prop({required:false, type:String, default:"100%"}) maxWidth!: string;
  @Prop({required:false, type:String, default:"redirectToImage"}) action!: string;

  cssVars = {
    '--max-width': this.maxWidth
  };

  actionOnClick(){
    if(this.action !== 'redirectToImage'){
      this.$emit(this.action);
    }else{
      window.location.href = this.src;
    }
  }

};

</script>

<style scoped>
img:hover {
  cursor: pointer;
}

img{
  max-width: var(--max-width);
  width: 100%;
  height: auto;
}

img.img-thumbnail{
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
}
</style>
