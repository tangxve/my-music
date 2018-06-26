/**
 * actions 用来异步修改数据
 */
import * as types from './mutation-types'

export const selcetPlay = function ({commit, state}, {list, index}) {
  // 顺序列表
  commit(types.SET_SEQUENCE_LIST, list)
  // 播放列表
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
