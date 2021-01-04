# Button

## Description

## How to use

```vue
<template>
      <BaseButtonModele>Default</BaseButtonModele>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButtonModele from "~/components/Atoms/Button/BaseButtonModele.vue";

@Component({
  components: {
    BaseButtonModele,
  }
})
export default class MyPage extends Vue {
  
}
</script>
```

**Properties**

 * `visualType` : used to determine the global style of the button and to apply the corresponding CSS
 * `htmlType` : used to determine the kind of the button (`submit`, `button`, ...)
 * `icon` : used to add a font-awesome icon to the button
 * `onlyIcon` : used to only display the font-awesome icon
 * `outline` : used to determine the style of the button (solid or outline)
 * `round` : used to determine the shape of the button (round or square)
 * `disabled` : used to determine if the button should be disabled
 * `loading` : used to determine if the button should be disabled and display a loading
