<template>
	<transition
    name="outer"
    @enter="enter">
    <div v-if="showOuter" class='outer'>
      <transition
        name="inner"
        @leave="leave">
        <div v-if="showInner" class='inner'></div>
      </transition>
    </div>

  </transition>
</template>

<script>
export default {
  name: "MyComponent",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      showOuter: this.show,
      showInner: this.show
    }
  },
  watch: {
    show: function(show) {
      console.log("watch:show", show);
      if(show)
        this.showOuter = true;
      else
        this.showInner = false;
    }
  },
  methods: {
    enter: function() {
      console.log("enter");
      this.showInner = true;
    },
    leave: function(){
      console.log("leave");
      this.showOuter = false;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.outer {
  height: 100px;
  width: 100px;
  padding: 10px;
  background-color: red;

  .inner {
    height: 80px;
    width: 80px;
    background-color: blue;
  }
}
</style>
