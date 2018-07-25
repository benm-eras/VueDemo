<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<script>
export default {
  name: "MyComponent",
  data: function() {
    return {
      container: null,
      pages: []
    }
  },
  mounted: function() {
    this.container = this.$el;
    this.pages = this.container.querySelectorAll(".page");
    console.info("all children:", this.container.childNodes);
    console.info("only pages:", this.pages);
  }
}
</script>
