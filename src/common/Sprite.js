import React from 'react';
import sheet from '../../src/img/sheet.png';

export const Sprite = ({filename, x, y, width, height }) => {
  if (!filename) {
    return null;
  }

  x *= 2
  y *= 2
  width *= 2
  height *= 2

  const style = {
    backgroundImage: `url(${filename})`,
    backgroundPosition: `${x * (-1)}px ${y *(-1)}px`,
    width,
    height
  };

  return <div style={style} data-x={x} data-y={y} data-w={width} data-h={height} />
};

export const bg = Sprite({
  filename: sheet,
  x: 0,
  y: 0,
  width: 138,
  height: 114
})
export const fg = Sprite({
  filename: sheet,
  x: 138,
  y: 0,
  width: 111,
  height: 56
})
export const bird0 = Sprite({
  filename: sheet,
  x: 156,
  y: 115,
  width: 17,
  height: 12
})
export const bird1 = Sprite({
  filename: sheet,
  x: 156,
  y: 128,
  width: 17,
  height: 12
})
export const bird2 = Sprite({
  filename: sheet,
  x: 156,
  y: 141,
  width: 17,
  height: 12
})
export const pipeN = Sprite({
  filename: sheet,
  x: 251,
  y: 0,
  width: 26,
  height: 200
})
export const pipeS = Sprite({
  filename: sheet,
  x: 277,
  y: 0,
  width: 26,
  height: 200
})
export const gameover = Sprite({
  filename: sheet,
  x: 59,
  y: 136,
  width: 94,
  height: 19
})
export const _ok_ = Sprite({
  filename: sheet,
  x: 119,
  y: 191,
  width: 40,
  height: 14
})
export const splash = Sprite({
  filename: sheet,
  x: 0,
  y: 114,
  width: 58,
  height: 50
})
export const ready = Sprite({
  filename: sheet,
  x: 59,
  y: 155,
  width: 87,
  height: 22
})
export const score = Sprite({
  filename: sheet,
  x: 138,
  y: 56,
  width: 113,
  height: 58
})
export const number = Sprite({
  filename: sheet,
  x: 0,
  y: 188,
  width: 8,
  height: 10
})
export const num0 = Sprite({
  filename: sheet,
  x: 0,
  y: 188,
  width: 8,
  height: 10
})
export const num1 = Sprite({
  filename: sheet,
  x: 16,
  y: 188,
  width: 8,
  height: 10
})
export const num2 = Sprite({
  filename: sheet,
  x: 32,
  y: 188,
  width: 8,
  height: 10
})
export const num3 = Sprite({
  filename: sheet,
  x: 48,
  y: 188,
  width: 8,
  height: 10
})
export const num4 = Sprite({
  filename: sheet,
  x: 64,
  y: 188,
  width: 8,
  height: 10
})
export const num5 = Sprite({
  filename: sheet,
  x: 80,
  y: 188,
  width: 8,
  height: 10
})
export const num6 = Sprite({
  filename: sheet,
  x: 96,
  y: 188,
  width: 8,
  height: 10
})
export const num7 = Sprite({
  filename: sheet,
  x: 112,
  y: 188,
  width: 8,
  height: 10
})
export const num8 = Sprite({
  filename: sheet,
  x: 128,
  y: 188,
  width: 8,
  height: 10
})
export const num9 = Sprite({
  filename: sheet,
  x: 144,
  y: 188,
  width: 8,
  height: 10
})
export const nums = [num0,num1,num2,num3,num4,num5,num6,num7,num8,num9]
export const bg_h = bg.props['data-h']
export const bg_w = bg.props['data-w']
export const fg_h = fg.props['data-h']
export const fg_w = fg.props['data-w']
export const bird_h = bird0.props['data-h']
export const bird_w = bird0.props['data-w']
export const pipe_h = pipeN.props['data-h']
export const pipe_w = pipeN.props['data-w']