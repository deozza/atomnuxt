<template>
  <div
    class="menu flex-row flex-between"
    :class="[
	      { [`menu-${theme}`]: theme },
    	]"
  >
    <div>
      <n-link to="/" class="logo">
        Toolbox
      </n-link>
    </div>
    <div class="flex-row flex-right">
    </div>

  </div>

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
interface HorizontalNavbarInterface {
  theme:string;
}

@Component
export default class HorizontalNavbar extends Vue implements HorizontalNavbarInterface{
  @Prop({required:true, type:String}) theme!: string;
}
</script>

<style scoped>
div.menu{
  height: 7vh;
}

.menu-light{
  background-color: white;
  border-bottom: 1px solid black;
}

.menu-dark{
  background-color: black;
}

div.menu a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  display: block;
}

.menu-light a {
  color: black
}

.menu-dark a {
  color: white
}

div.menu a:hover {
  transition: all ease .2s;
}

.nuxt-link-active{
  font-weight: bold;
}

div.menu .logo{
  font-size: 24px !important;
  font-weight: bold;
}

@media only screen and (max-width:1024px) {

}
</style>
