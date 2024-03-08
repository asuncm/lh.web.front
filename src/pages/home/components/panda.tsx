import { MutableRefObject } from 'react'
interface Draw {
  'draw1': () => void
  'draw2': () => void
  'draw3': () => void
  'draw4': () => void
}


class Panda implements Draw {
  private win: any = window
  protected el: MutableRefObject<any> = {current: null}
  protected scale: number = 1
  public panda: any = this
  protected ctx: any
  protected width: number = 0
  protected height: number = 0
  
  // 绘制熊猫1
  public draw1() {
    const self = this
    const ctx = this.ctx
    ctx.beginPath()
    
    ctx.moveTo()
    ctx.closePath()

  }
  // 绘制熊猫2
  public draw2() {
    let el = this.el.current
  }
  // 绘制熊猫3
  public draw3() {
    let el = this.el.current
  }
  // 绘制熊猫1
  public draw4() {
    let el = this.el.current
  }
  // 初始化
  public init(el: MutableRefObject<any>, value: string = '1') {
    this.el = el
    this.scale = Number(value) || 1;
    this.width = el.current.clientWidth
    this.height = el.current.clientHeight
    const piexl = this.win.devicePixelRatio || 1;
    this.ctx = el.current.getContext('2d')
    el.current.width = this.width * piexl
    el.current.height = this.height * piexl
    this.ctx.scale(piexl, piexl)
    this.draw1()
    // this.panda[`draw${Math.round(Math.random() * 4)}`]()
  }
}

export default Panda