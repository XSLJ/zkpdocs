/**webNav展示卡片 */
interface ICard {
  name: string
  src: string
  desc?: string
}
interface ICard2 {
  name: string
  img: string
  src?: string
  enSrc?: string
  zhSrc?: string
  desc?: string
}
interface ICardList {
  cardList: ICard[]
}
interface Array {
  demo: number
}
