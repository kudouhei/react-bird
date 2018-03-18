import {extendObservable} from 'mobx';

export class baseObj {
  constructor(id, cx, cy) {
    extendObservable(this, {
      cx: 0,
      cy: 0
    })

    this.id = id;
    this.cx = cx;
    this.cy = cy;
  }
}
export class bg extends baseObj{}
export class fg extends baseObj{}

export class bird extends baseObj{
  constructor(id, cx, cy){
    super(id, cx, cy)
    extendObservable(this, {
      frame: 0,
      velocity: 0,
      rotation: 0
    })
  }
  animation = [0,1,2,1];
  radius = 12;
  gravity = 0.25;
  jump = 4.5
}

export class pipe extends baseObj{
  //type;
  constructor(id, cx, cy, type){
    super(id, cx, cy)
    this.type = type
  }
}
export class number extends baseObj{
  constructor(id, cx, cy){
    super(id, cx, cy)
    extendObservable(this, {
      score: 0
    })
  }
}