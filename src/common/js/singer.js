// es6 构造一个 singer class
export default class Singer {
  // 构造器的方法创建一个class
  constructor ({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
// export default class Singer {
//   constructor({id, name}) {
//     this.id = id
//     this.name = name
//     this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
//   }
// }
