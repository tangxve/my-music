import { playMode } from '../common/js/config'

const state = {
  singer: {},
  // 播放器开关
  playing: false,
  // 全屏im
  fullScreen: false,
  // 播放列表
  playlist: [],
  // 顺序列表
  sequenceList: [],
  // 播放模式  语义化引入
  mode: playMode.sequence,
  // 当前播放格式 索引
  currentIndex: -1
}

export default state
