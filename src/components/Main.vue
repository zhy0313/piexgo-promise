<template>
  <div :class="wrapperCls">
    <h1>hello world</h1>
  </div>
</template>

<script>
const prefixCls = "piexGo-promise-main";
export default {
  data() {
    return {
      prefixCls,
    }
  },
  computed: {
    wrapperCls() {
      return `${prefixCls}`
    }
  }
}
</script>
