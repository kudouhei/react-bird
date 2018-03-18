import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store, updateFrame, birdjump, game, states, rungame } from './store/store'
import { bird } from './store/asset';

ReactDOM.render(<App store={store} updateFrame={updateFrame} game={game} />, 
  document.getElementById('root'));

function onpress(evt) {
  switch(game.currentstate){
    default:
    case states.Splash:
      rungame()
      birdjump(store.bird);
      break
    case states.Game:
      birdjump(store.bird);
      break
    case states.Score:
      birdjump(store.bird);
      break
  }
}
document.addEventListener('click', onpress)
