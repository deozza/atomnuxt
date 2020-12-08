# Link

## Description

## How to use

```vue
<template>
          <BaseLink :link="link" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseLink from "~/components/Atoms/Link/BaseLink.vue";
import Link from "~/components/Atoms/Link/Link";

@Component({
  components: {
    BaseLink,
  }
})
export default class MyPage extends Vue {
  link:Link = new Link("https://github.com/deozza/toolbok", 'My awesome repo', ['custom-class-1', 'custom-class-2'], 'font-awesome-icon', true)
}
</script>
```

**Properties**

 * `link` : an object that defines all the properties of the link
   * link : the url
   * title : the title of the link to display
   * customClasses : custom classes to apply to the link
   * icon : the font awesome icon to display
   * internalLink : should open the link in the same tab or in a new one
