import React, { useRef, useEffect } from 'react';

// interface IDraw {
//   prevX: number,
//   prevY: number,
//   currX: number,
//   currY: number,
//   x: number,
//   y: number,
// }

function PaintBoard() {
  const mountedRef = useRef(false);
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  let canvas1: HTMLCanvasElement;
  let ctx1: CanvasRenderingContext2D;

  const x = 'black';
  const y = 2;
  let prevX = 0;
  let currX = 0;
  let prevY = 0;
  let currY = 0;
  let flag = false;
  let dot_flag = false;

  const handleDraw = () => {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
    console.log({
      type: 'draw',
      prevX,
      prevY,
      currX,
      currY,
      x,
      y,
    });
  };

  const handleDraw1 = () => {
    ctx1.beginPath();
    ctx1.moveTo(prevX, prevY);
    ctx1.lineTo(currX, currY);
    ctx1.strokeStyle = x;
    ctx1.lineWidth = y;
    ctx1.stroke();
    ctx1.closePath();
  };

  const handleErase = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const findxy = (res: string, e: MouseEvent) => {
    if (res === 'down') {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      flag = true;
      dot_flag = true;

      if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      }
    }

    if (res === 'up' || res === 'out') {
      flag = false;
    }

    if (res === 'move') {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        handleDraw();
        handleDraw1();
      }
    }
  };

  const init = () => {
    canvas = document.getElementById('myCanvas')! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;

    canvas.addEventListener('mousemove', (e: MouseEvent) => findxy('move', e), false);
    canvas.addEventListener('mousedown', (e: MouseEvent) => findxy('down', e), false);
    canvas.addEventListener('mouseup', (e: MouseEvent) => findxy('up', e), false);
    canvas.addEventListener('mouseout', (e: MouseEvent) => findxy('out', e), false);
    canvas.addEventListener('dblclick', () => handleErase(), false);

    canvas1 = document.getElementById('myCanvas1')! as HTMLCanvasElement;
    ctx1 = canvas1.getContext('2d')!;
  };

  useEffect(() => {
    mountedRef.current = true;
    init();
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <div
      style={{
        margin: '10px',
        border: '1px solid #d3d3d3',
        borderRadius: '8px',
      }}
    >
      <canvas
        id="myCanvas"
        width="400"
        height="300"
        style={{
          border: '1px solid #d3d3d3',
          borderRadius: '8px',
          marginTop: '10px',
          marginLeft: '10px',
        }}
      >
        Your browser does not support the canvas element.
      </canvas>

      <canvas
        id="myCanvas1"
        width="400"
        height="300"
        style={{
          border: '1px solid #d3d3d3',
          borderRadius: '8px',
          marginTop: '10px',
          marginLeft: '10px',
        }}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
}

export default PaintBoard;
