# Typography

## Description

These elements are used to display basic text content in your page.

## How to use

### Paragraph

```vue
<template>
      <BaseParagraph>This is a cool but basic paragraph</BaseParagraph>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseParagraph from "~/components/Atoms/Typography/BaseParagraph.vue";

@Component({
  components: {
    BaseParagraph,
  }
})
export default class MyPage extends Vue {
  
}
</script>
```

**Properties**

 * `visualType` : used to determine the style of the paragraph and to apply the corresponding CSS
 
Exemple : 

```vue
<template>
      <BaseParagraph visualType="primary">This is a cool but basic paragraph</BaseParagraph>
</template>
```

Adding `visualType="primary` will add the class `p-primary` to the paragraph and the corresponding style.

### Headers

```vue
<template>
      <BaseHeader>This is a cool but basic header</BaseHeader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseHeader from "~/components/Atoms/Typography/BaseHeader.vue";

@Component({
  components: {
    BaseHeader,
  }
})
export default class MyPage extends Vue {
  
}
</script>
```

**Properties**

 * `visualType` : used to determine the style of the header and to apply the corresponding CSS
 * `htmltype` : used to determine the HTML element (`h1`, `h2`, ...) of the header
 
 
Exemple : 

 ```vue
 <template>
       <BaseHeader visualType="primary" htmlType="h3">This is a cool but basic paragraph</BaseHeader>
 </template>
 ```
 
You'll get a h3 header with the class `h-primary` and its corresponding style.
