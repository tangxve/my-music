<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      },
      // scroll组件要不要监听滚动事件
      listenScroll: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      setTimeout(() => {
        this._initScroll()
      }, 20)
    },
    methods: {
      _initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })

        // 判断是否监听scroll事件别派发出去
        if (this.listenScroll) {
          let me = this
          this.scroll.on('scroll', (pos) => {
            // 这里的this指向是betterScroll 上面需要转换下
            me.$emit('scroll', pos)
          })
        }
      },
      // 代理BScroll 方法 enable disable refresh scrollTo scrollToElment
      enable() {
        // 如果有 this.scroll 执行 this.scroll.enable() if(this.scroll) {this.scroll.enable()}
        this.scroll && this.scroll.enable()
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      // 重新计算scroll
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      // 滚动到指定位置 scrollTo要接受参数传给this.scroll.scrollTo，用到了apply方法
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      // 滚到某个元素
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
