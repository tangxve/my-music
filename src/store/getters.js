/**
 * getters用来获取state的数据的  getters 相当于一个计算属性
 * @param state
 */

export const singer = state => state.singer

export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex
// 当前播放歌曲
export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
