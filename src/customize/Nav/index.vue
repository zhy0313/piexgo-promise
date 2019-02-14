<template>
  <div :class="wrapperCls">
    <div class="left">
      <div class="dimension">
        <div class="mark">
          <Logo></Logo>
        </div>
        <div class="toggle">
          <p class="text">永续合约</p>
          <div class="part">
            <p class="cont">BTC</p>
            <i class="iconfont icon-arrowdown-copy"></i>
          </div>
        </div>
      </div>
      <div class="digital">
        <div class="item">
          <p class="text">现价</p>
          <div class="change">
            <p class="amount">$ 3528.89</p>
            <p class="rate">-12.9%</p>
          </div>
        </div>
        <div class="item" v-for="(item, index) in toDayData" :key="index">
          <p class="text">{{item.text}}</p>
          <p class="count">{{item.number}}</p>
        </div>
      </div>
    </div>
    <div class="right">

    </div>
  </div>
</template>

<script>
const prefixCls = "piexGo-promise-nav";
export default {
  data() {
    return {
      prefixCls,
    }
  },
  computed: {
    wrapperCls() {
      return `${prefixCls}`
    },
    toDayData() {
      return [
        {text: "24H交易量", number: 123456789},
        {text: "合约持仓量", number: 123456789},
      ]
    }
  },
}
</script>
