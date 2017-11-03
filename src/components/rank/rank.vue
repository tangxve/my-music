<template>
  <div>
    排行页面
  </div>
</template>

<script type="text/ecmascript-6">
  import * as txnpm from 'txnpm'
  export default {
    created () {
      console.log(window.location.href)
      // 获取url参数
      console.log(txnpm.urlParse().shopId)
      // 判断是否是微信浏览器
      console.log(txnpm.isWechat())
      // 时间戳转换
      let isTime = Date.parse(new Date()) / 1000
      console.log(txnpm.formatTime(isTime, 'yyyy-MM-dd hh:mm'))
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
