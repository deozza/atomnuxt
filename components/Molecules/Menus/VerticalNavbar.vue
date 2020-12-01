<template>
  <div
    class="menu"
    :class="[
	      { [`menu-${theme}`]: theme },
    	]"
  >
    <div class="flex-row flex-between">
      <n-link to="/" class="logo">
        Toolbox
      </n-link>
      <div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="hide-desktop btn-hamburger menu-icon" for="menu-btn"><i class="fas fa-bars fa-2x"></i></label>
      </div>
    </div>
    <div class="hide-mobile">
      <div v-for="link in links">
        <BaseLink :link="link" />
      </div>
    </div>

  </div>

</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";
import Link from "~/components/Atoms/Link/Link";
import MenuLinkInterface from "~/components/Atoms/Link/MenuLinkInterface";
import BaseLink from "~/components/Atoms/Link/BaseLink.vue";

@Component({
  components: {BaseLink}
})
export default class VerticalNavbar extends Vue implements MenuLinkInterface{
  @Prop({required:true, type:String}) theme!: string;
  @Prop({required:true, type:Array}) links!: Array<Link>;
}
</script>

<style scoped>
div.menu{
  height: 100%;
  width: 20vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
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

.menu-light a, .menu-light .btn-hamburger  {
  color: black
}

.menu-dark a, .menu-dark .btn-hamburger {
  color: white
}

div.menu a:hover {
  transition: all ease .2s;
}

.nuxt-link-active{
  font-weight: bold;
}

div .menu .logo{
  font-size: 24px !important;
  font-weight: bold;
}

@media only screen and (max-width:1024px) {
  div.menu{
    height: 48px;
    width: 100%;
  }
  .btn-hamburger{
    padding: 6px 8px 6px 16px;
  }
}
</style>
