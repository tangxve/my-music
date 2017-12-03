<template>
  <scroll class="listview"
          :data="data"
          :listenScroll="listenScroll"
          :probeType="probeType"
          @scroll="scroll"
          ref="listview">
    <ul>
      <li class="list-group" v-for="group in data" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" @click="selectItem(item)" v-for="item in group.items">
            <img class="avatar" v-lazy="item.avatar"/>
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li class="item"
            v-for="(item, index) in shortcutList"
            :class="{'current': currenIndex === index}"
            :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="fixedTitle" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div class="loading-container" v-show="!data.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import Loading from 'base/loading/loading'
  import { getData } from 'common/js/dom'
  // 右边锚点的高度
  const ANCHOR_HEIGHT = 18
  const TITLE_HEIGHT = 29
  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        scrollY: -1,
        currenIndex: 0,
        diff: -1
      }
    },
    created() {
      // this.touch 不需要数据监听数据，不用再 props或data里面创建这两个里面会添加set和get属性
      this.touch = {}
      this.listenScroll = true
      this.listHeight = []
      this.probeType = 3
    },
    computed: {
      // 遍历数组取得 title
      shortcutList() {
        return this.data.map((group) => {
          return group.title.substr(0, 1)
        })
      },
      // 根据 this.currenIndex 动态计算  fixedTitle
      fixedTitle() {
        if (this.scrollY > 0) {
          return ''
        }
        return this.data[this.currenIndex] ? this.data[this.currenIndex].title : ''
      }
    },
    methods: {
      // 派发出点击事件。 listview只是基础组件，不是业务组件
      selectItem(item) {
        this.$emit('select', item)
      },
      // touchStart 事件
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        // 定义开始的 touch的 Y 值
        this.touch.y1 = firstTouch.pageY
        // 开始的 touch的元素的下标 Y 值
        this.touch.anchorIndex = anchorIndex
        this._scrollTo(anchorIndex)
      },
      // touctMove 事件
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        // y轴便宜滚动了几个元素
        // 结束y值 - 开始y值 / 元素高度，并且取整 |0 向下取整
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta
        this._scrollTo(anchorIndex)
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      // 滚动到指定锚点的位置
      // scrollToElement 第二个参数是滚动的时间动画，0表示没有
      _scrollTo(anchorIndex) {
        // 点击快速入口的上面空白部分
        if (!anchorIndex && anchorIndex !== 0) {
          return
        }
        // tauch move的时候  scrollY一直增加或减少的 要做判断
        if (anchorIndex < 0) {
          anchorIndex = 0
        } else if (anchorIndex > (this.listHeight.length - 2)) {
          anchorIndex = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[parseInt(anchorIndex)]
        this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex], 0)
      },
      // 计算每一个group的高度
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // 当滚动到顶部 newY > 0
        if (newY > 0) {
          this.currenIndex = 0
          return
        }
        // 当在中间部分滚动 listHeight.length比索引的length要多一个，最开始push了个0 要减-1
        for (let i = 0; i < listHeight.length - 1; i++) {
          // 1个区间的 上限height1，下限height2
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          // newY 往下滚动是一个负值 -newY为了取正
          if (-newY >= height1 && -newY < height2) {
            this.currenIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滚动到最底部 且newY大于最后一个元素的上限 本来就多一个要减2
        this.currenIndex = this.listHeight.length - 2
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        // 判断如果相等就不用改变DOM 直接return 优化性能 减少dom操作
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0, ${fixedTop}px, 0)`
      }
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .listview
    position: relative
    width: 100%
    height: 100%
    overflow: hidden
    background: $color-background
    .list-group
      padding-bottom: 30px
      .list-group-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
      .list-group-item
        display: flex
        align-items: center
        padding: 20px 0 0 30px
        .avatar
          width: 50px
          height: 50px
          border-radius: 50%
        .name
          margin-left: 20px
          color: $color-text-l
          font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
    .list-fixed
      position: absolute
      top: -1px
      left: 0
      width: 100%
      .fixed-title
        height: 30px
        line-height: 30px
        padding-left: 20px
        font-size: $font-size-small
        color: $color-text-l
        background: $color-highlight-background
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
