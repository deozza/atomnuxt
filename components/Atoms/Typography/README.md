# Typography

## Description

These elements are used to display basic text content in your page.

## How to use

### Paragraph

```vue
<template>
      <BaseParagraphModele>This is a cool but basic paragraph</BaseParagraphModele>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseParagraphModele from "~/components/Atoms/Typography/BaseParagraphModele.vue";

@Component({
  components: {
    BaseParagraphModele,
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
      <BaseParagraphModele visualType="primary">This is a cool but basic paragraph</BaseParagraphModele>
</template>
```

Adding `visualType="primary` will add the class `p-primary` to the paragraph and the corresponding style.

### Headers

```vue
<template>
      <BaseHeaderModele>This is a cool but basic header</BaseHeaderModele>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseHeaderModele from "~/components/Atoms/Typography/BaseHeaderModele.vue";

@Component({
  components: {
    BaseHeaderModele,
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
       <BaseHeaderModele visualType="primary" htmlType="h3">This is a cool but basic paragraph</BaseHeaderModele>
 </template>
 ```
 
You'll get a h3 header with the class `h-primary` and its corresponding style.
