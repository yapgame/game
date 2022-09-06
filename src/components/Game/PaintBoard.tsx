import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IDraw } from 'Interfaces/interfaces';
import { IMessages, selectData as selectMessageData } from '../../chat/messageSlice';
import { styleCanvas, styleBoxCanvas } from './styles';

function PaintBoard({ setPoints }: {setPoints: (p: IDraw) => void}) {
  const mountedRef = useRef(false);
  const messages = useSelector(selectMessageData) as unknown as IMessages;
  const { mchat } = messages as any;

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
    setPoints({
      type: 'draw',
      prevX,
      prevY,
      currX,
      currY,
      x,
      y,
    });
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
    if (!Array.isArray(mchat) && mchat?.id) {
      if (mchat?.content?.type === 'draw') {
        const props = mchat.content;

        ctx1.beginPath();
        ctx1.moveTo(props.prevX, props.prevY);
        ctx1.lineTo(props.currX, props.currY);
        ctx1.strokeStyle = props.x;
        ctx1.lineWidth = props.y;
        ctx1.stroke();
        ctx1.closePath();
      }
    }
    return () => {
      mountedRef.current = false;
    };
  }, [mchat?.id]);

  return (
    <div style={styleBoxCanvas}>
      <canvas
        id="myCanvas"
        width="400"
        height="300"
        style={styleCanvas}
      >
        Your browser does not support the canvas element.
      </canvas>
      <canvas
        id="myCanvas1"
        width="400"
        height="300"
        style={styleCanvas}
      >
        Your browser does not support the canvas element.
      </canvas>
    </div>
  );
}

export default PaintBoard;
