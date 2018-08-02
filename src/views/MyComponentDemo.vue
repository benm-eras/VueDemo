<template>
  <div>
    <button type="button" @click="toggle">toggle</button>
    <my-component :show="show"></my-component>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: "MyComponentDemo",
  components: {
    MyComponent
  },
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
};
</script>
