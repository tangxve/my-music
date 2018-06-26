<template>
  <!--<div>-->
  <!--搜索页面，待开发，完成时间不详-->
  <!--<br>-->
  <!--<br>-->
  <!--<br>-->
  <!--<br>-->
  <!--<p>(゜-゜)つロ 你随意</p>-->
  <!--</div>-->
  <div class="timeline">
    <div class="timeline_tit">
      大明湖畔
      <span>Da ming hu pan nn</span>
    </div>
    <div class="timeline_icon">
      <svg viewBox="0 0 102 102">
        <circle cx="51" cy="51" r="50" transform="rotate(90 51 51)"></circle>
      </svg>
    </div>
    <ul class="timeline_list">
      <li class="timeline_item timeline_item_sp">
        <span class="timeline_item_cnt flag"><i class="flag_sin"></i></span>
        <span class="timeline_item_cnt country">Singapore</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">09 / 20</span>
        <span class="timeline_item_cnt city">INSEAD</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">09 / 21</span>
        <span class="timeline_item_cnt city">NTU</span>
        <b></b>
      </li>
      <li class="timeline_item timeline_item_sp">
        <span class="timeline_item_cnt flag"><i class="flag_us"></i></span>
        <span class="timeline_item_cnt country">U.S</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">09 / 26</span>
        <span class="timeline_item_cnt city">UCLA</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">09 / 28</span>
        <span class="timeline_item_cnt city">UC Berkely</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">10 / 05</span>
        <span class="timeline_item_cnt city">Wharton</span>
        <b></b>
      </li>
      <li class="timeline_item timeline_item_sp">
        <span class="timeline_item_cnt flag"><i class="flag_uk"></i></span>
        <span class="timeline_item_cnt country">U.K</span>
        <b></b>
      </li>
      <li class="timeline_item">
        <span class="timeline_item_cnt time">10 / 29</span>
        <span class="timeline_item_cnt city">LBS</span>
        <b></b>
      </li>
      <li class="timeline_line"></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .timeline {
    position: absolute;
    width 100%;
    height 100%;
    left: 0px;
    top: 0px;
    background #010233;
    &_tit {
      position: relative;
      padding: 1.0371rem 0 .4445rem;
      font-size: .8889rem;
      line-height: 1.3334rem;
      color: #fff;
      text-align: center;
      span {
        display: block;
        font-size: .5334rem;
        line-height: .7408rem;
      }
      &:after {
        content: "";
        position: absolute;
        width: 1.363rem;
        height: 1px;
        background: red;
        bottom: 0;
        left: 50%;
        margin-left: -.6814rem;
      }
    }
    &_icon {
      position: relative;
      width: 1.5112rem;
      height: 1.5112rem;
      margin: .5334rem auto 0;
      background: url("./1-4.png") no-repeat center;
      background-size: .8445rem .7408rem;
      svg {
        width: 1.5112rem;
        height: 1.5112rem;
        stroke: #0084ff;
        stroke-width: 2px;
        fill: none;
        stroke-dasharray: 320
      }
    }
    .timeline_list {
      position: relative;
      bottom: 0;
      width: 13.3334rem;
      height: 18.1334rem;
      margin: 0 auto;
      padding: 1.0075rem 0;
      display: flex;
      flex-direction: column;
      color: #fff;
    }
    .timeline_line {
      position: absolute;
      width: 1px;
      height: 100%;
      background: #0084ff;
      top: 0;
      left: 50%;
    }
    &_item {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      z-index: 9;
      b {
        position: absolute;
        width: .2371rem;
        height: .2371rem;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        margin: -.1037rem 0 0 -.1037rem;
        z-index: 1;
        background: #fff;
        box-shadow: 0 0 0 0.1926rem #0084ff;
      }
      &_sp {
        b {
          background: #0084ff;
          box-shadow: none;
        }
      }
      .timeline_item_cnt {
        flex: 1;
        padding: 0 1.4815rem;
        &:nth-child(1) {
          text-align: right;
        }
        &:nth-child(2) {
          text-align: left;
        }
        &.flag {
          width: 1.6445rem;
          height: .963rem;
          i {
            display: inline-block;
            width: 1.6445rem;
            height: .963rem;
            background-size: contain;
            &.flag_sin {
              background: url("./1-1.png") no-repeat center;
            }

            &.flag_us {
              background: url("./1-2.png") no-repeat center;
            }

            &.flag_uk {
              background: url("./1-3.png") no-repeat center;
            }
          }
        }
        &.country {
          font-size: .5334rem;
          color: #66b5ff
        }
        &.time {
          font-size: .5334rem
        }
        &.city {
          font-size: .7112rem
        }
      }
    }
    .timeline_icon svg {
      animation: on_tl_iconsvg .5s .9s linear both
    }
    @keyframes on_tl_iconsvg {
      0% {
        stroke-dasharray: 320
      }
      100% {
        stroke-dasharray: 0
      }
    }
    .timeline_icon {
      animation on_tl_icon 1.2s .5s linear both;
    }
    @keyframes on_tl_icon {
      0% {
        transform: translateY(7.1112rem);
        opacity: 0;
      }
      // 先渐现
      66% {
        transform: translateY(7.1112rem);
        opacity: 1;
      }
      // 在移动
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    .timeline_tit {
      animation on_tl_tit 0.4s 1.4s ease-out both;
    }
    @keyframes on_tl_tit {
      0% {
        transform: translateY(-5.9259rem)
      }
      100% {
        transform: translateY(0)
      }
    }
    .timeline_tit:after {
      animation on_tl_tit_a 0.2s 1.8s linear both;
    }
    @keyframes on_tl_tit_a {
      0% {
        transform: scale(0, 1);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    .timeline_line {
      animation on_tl_line 1.5s 2.2s linear both;
      transform-origin top
    }
    @keyframes on_tl_line {
      0% {
        transform: scale(1, 0);
      }
      100% {
        transform: scale(1, 1);
      }
    }
    .timeline_item {
      animation on_tl_item 0.45s ease both;
      &:nth-child(1) {
        animation-delay (2.35s + 0.15s * 1)
      }
      &:nth-child(2) {
        animation-delay (2.35s + 0.15s * 2)
      }
      &:nth-child(3) {
        animation-delay (2.35s + 0.15s * 3)
      }
      &:nth-child(4) {
        animation-delay (2.35s + 0.15s * 4)
      }
      &:nth-child(5) {
        animation-delay (2.35s + 0.15s * 5)
      }
      &:nth-child(6) {
        animation-delay (2.35s + 0.15s * 6)
      }
      &:nth-child(7) {
        animation-delay (2.35s + 0.15s * 7)
      }
      &:nth-child(8) {
        animation-delay (2.35s + 0.15s * 8)
      }
      &:nth-child(9) {
        animation-delay (2.35s + 0.15s * 9)
      }
      &:nth-child(10) {
        animation-delay (2.35s + 0.15s * 10)
      }
    }

    @keyframes on_tl_item {
      0% {
        transform scale(0, 0);
        opacity 0;
      }
      100% {
        transform scale(1, 1)
        opacity 1
      }
    }
  }
</style>
