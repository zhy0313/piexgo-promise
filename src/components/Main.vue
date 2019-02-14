<template>
  <div :class="wrapperCls">
    <Nav></Nav>
    <div class="container">
      <div class="left">
        <div id="tradingview"></div>
      </div>
      <div class="right">

      </div>
    </div>
  </div>
</template>

<script>
import Tv from "@/tv";
import {ws_open} from "../ws/websocket";
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
  },
  mounted() {
    ws_open(_ =>  Tv.start());
  }
}
</script>
