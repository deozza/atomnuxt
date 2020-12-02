<template>
  <div class="menu"
       :class="[
	      { [`menu-${theme}`]: theme },
    	]"
  >
    <div class="flex-row flex-between">
      <div class="flex-row flex-between mobile-header">
        <n-link to="/" class="logo">
          Toolbox
        </n-link>
        <span class="menu-icon" @click="navbarIsToggled = !navbarIsToggled"><i class="fas fa-bars fa-2x"/></span>
      </div>

      <div>
        <div
          class="menu-content flex-row-desktop"
          :class="{
            'menu-content-toggled': navbarIsToggled,
            'flex-column-mobile': navbarIsToggled,
            'flex-around-mobile': navbarIsToggled
          }">
          <BaseLink v-for="link in links" :link="link" />
        </div>
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
export default class HorizontalNavbar extends Vue implements MenuLinkInterface{
  @Prop({required:true, type:String}) theme!: string;
  @Prop({required:true, type:Array}) links!: Array<Link>;
  navbarIsToggled = false;
}
</script>

<style scoped>
.menu {
  height: 60px;
  width: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  padding-top: 12px;
}

.menu a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 16px;
  display: block;
}
.menu a:hover {
  transition: all ease .2s;
}

.menu.menu-light{
  background-color: white;
  border-right: 1px solid black;
}

.menu.menu-light a, .menu.menu-light i{
  color: black
}

.menu.menu-dark{
  background-color: black;
}

.menu.menu-dark a, .menu.menu-dark i{
  color: white
}

div.menu .logo{
  font-size: 24px !important;
  font-weight: bold;
}

@media only screen and (min-width:1024px) {
  div.menu .menu-btn, div.menu .menu-icon{
    display: none;
  }
}
@media only screen and (max-width:1024px) {
  div.menu .menu-btn, div.menu .menu-icon{
    display: block;
    cursor: pointer;
  }

  div.menu .menu-icon i {
    padding-right: 12px;
  }

  div.menu{
    width: 100%;
  }

  .menu-content{
    display: none;
  }
  .mobile-header{
    width: 100%;
  }
  .menu-content-toggled{
    display: flex;
    width: 100vw;
    height: 100vh;
  }
}
</style>
