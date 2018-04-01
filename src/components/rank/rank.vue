<template>
  <div>
    排行页面
    <img :src="`${item.url}.png`" alt="" width="30">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        item: {
          url: 'logo'
        }
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  img {
    width 30px
    height: 30px
  }
</style>
