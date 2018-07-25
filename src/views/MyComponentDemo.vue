<template>
  <div class='demo'>
    <my-component>
      <div class='page'>Page 1</div>
      <div class='page'>Page 2</div>
      <div class='page'>Page 3</div>
    </my-component>
  <hr/>
    <my-component>
      <div class='shade'></div>
      <div class='page'>Page 1</div>
      <div class='page'>Page 2</div>
      <div class='page'>Page 3</div>
      <div class='shade'></div>
    </my-component>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: "MyComponentDemo",
  components: {
    MyComponent
  }
}
</script>
