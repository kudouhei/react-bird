import React, { Component } from 'react';
import './App.css';
import { bg, fg, bird0, bird1, bird2, pipeN, pipeS, gameover, _ok_ , splash, ready, score, number} from './common/Sprite';
// import {num0, num1, num2, num3, num4, num5, num6,num7,num8,num9} from './common/Sprite';
import { nums } from './common/Sprite';
import { width, height } from '../src/common/common'
import { observer } from 'mobx-react';
import {rungame, states} from './store/store';

const SpriteWrapper = observer(class SpriteWrapper extends Component{
  render = () => {
    const gameSprite = this.props.gameSprite;
    const translate = 'translate('+ gameSprite.cx +'px,'+ gameSprite.cy+ 'px)'
    const rotate = 'rotate(' + gameSprite.rotation + 'rad)'
    const ctrans = (gameSprite.rotation==null) ? translate : translate+ ' '+ rotate;
    const onClickHandler = (this.props.onClickHandler)==null ? null: this.props.onClickHandler
    var style = {
      transform: ctrans,
      position: 'absolute'
    }
    return (
      <div style={style} onClick={onClickHandler}>
        {this.props.children }
      </div>
    )
  }
}) 

const Bg = observer(
  class Bg extends Component {
    render = () => {
      return <SpriteWrapper gameSprite={this.props.bg}>{bg}</SpriteWrapper>
    }
  }
)

const Fg = observer(
  class Fg extends Component {
    render = () => {
      return <SpriteWrapper gameSprite={this.props.fg}>{fg}</SpriteWrapper>
    }
  }
)

const Bird = observer(
  class Bird extends Component {
    render = () => {
      let wbird;
      switch(this.props.bird.frame){
        case 1:
        case 3: wbird = bird1
          break
        case 2: wbird = bird2
          break
        case 0:
        default:
          wbird = bird0
          break
      }
      return <SpriteWrapper gameSprite={this.props.bird}>{wbird}</SpriteWrapper>
    }
  }
)

const Pipe = observer(
  class Pipe extends Component{
    render = () => {
      let wpipe;
      switch(this.props.pipe.type){
        default:
        case "N" : wpipe = pipeN
          break
        case "S" : wpipe = pipeS
          break
        
      }
      return <SpriteWrapper gameSprite={this.props.pipe}>{wpipe}</SpriteWrapper>
    }
  }
)
const Gameover = observer(
  class Gameover extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2-94, cy: height-400}}>{gameover}</SpriteWrapper>
    }
  }
)
const OK = observer(
  class OK extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2-40, cy:height-200 }} onClickHandler={rungame}>{_ok_}</SpriteWrapper>
    }
  }
)
const Splash = observer(
  class Splash extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2-59, cy:height-300 }} >{splash}</SpriteWrapper>
    }
  }
)
const Ready = observer(
  class Ready extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2-87, cy:height-380 }} >{ready}</SpriteWrapper>
    }
  }
)

const Score = observer(
  class Score extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2-100, cy:height-340}}>{score}</SpriteWrapper>
    }
  }
)

const Number = observer(
  class Number extends Component{
    render = () => {
      return <SpriteWrapper gameSprite={this.props.number}>{number}</SpriteWrapper>
    }
  }
)

const App = observer(class App extends Component {
  componentDidMount() {
    this.req = window.requestAnimationFrame(this.appUpdateFrame)
  }
  // 调用store来更新the frame
  appUpdateFrame = () => {
    
    // 当observable value变化时触发mobx来更新view
    this.props.updateFrame();
    // 浏览器重绘时返回函数
    this.req = window.requestAnimationFrame(this.appUpdateFrame);
  }
  render() { 
    const { bgs, fgs, bird, pipes, number} = this.props.store
    const {currentstate} = this.props.game;
    const style = {
      width: width,
      height: height
    }

    return (
      <div className="App" id="container" style={style}>
        { bgs.map( (bg) => (<Bg bg={bg} key={bg.id}/>)) }
        { pipes.map((pipe) => (<Pipe pipe={pipe} key={pipe.id}/>))}
        <Bird bird={bird} />
        <Number number={number}/>
        {(currentstate === states.Score)? <Gameover /> : null}
        {(currentstate === states.Score)? <Score /> : null}
        {(currentstate === states.Score)? <OK /> : null}
        {(currentstate === states.Splash)? <Splash /> : null}
        {(currentstate === states.Splash)? <Ready /> : null}
        { fgs.map( (fg) => (<Fg fg={fg} key={fg.id}/>))}
      </div>
    );
  }
})


export default App;
