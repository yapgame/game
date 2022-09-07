import React, { useRef, useEffect } from 'react';
import { IDraw, IMessages, IBrush } from 'Interfaces/interfaces';
import { useSelector } from 'react-redux';
import { selectData as selectMessageData } from '../../slices/chat/messageSlice';
import { styleCanvas, styleBoxCanvas } from './styles';

function PaintBoard({ setPoints }:
  { setPoints: (p: Array<{content: IDraw }>) => void}) {
  const mountedRef = useRef(false);
  const messages = useSelector(selectMessageData) as unknown as IMessages;
  const { mchat } = messages as any;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  let canvas1: HTMLCanvasElement;
  let ctx1: CanvasRenderingContext2D;

  const brush: IBrush = {
    color: 'black',
    size: 4,
    prevX: 0,
    currX: 0,
    prevY: 0,
    currY: 0,
    flag: false,
    dotFlag: false,
  };

  let arr: Array<{content: IDraw }> = [];

  const handleDraw = () => {
    ctx.beginPath();
    ctx.moveTo(brush.prevX, brush.prevY);
    ctx.lineTo(brush.currX, brush.currY);
    ctx.strokeStyle = brush.color;
    ctx.lineWidth = brush.size;
    ctx.stroke();
    ctx.closePath();
  };

  const handleErase = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const findxy = (res: string, e: MouseEvent) => {
    if (res === 'down') {
      brush.prevX = brush.currX;
      brush.prevY = brush.currY;
      brush.currX = e.clientX - canvas.offsetLeft;
      brush.currY = e.clientY - canvas.offsetTop;
      brush.flag = true;
      brush.dotFlag = true;

      if (brush.dotFlag) {
        ctx.beginPath();
        ctx.fillStyle = brush.color;
        ctx.fillRect(brush.currX, brush.currY, 2, 2);
        ctx.closePath();
        brush.dotFlag = false;
      }
    }

    if (res === 'up' || res === 'out') {
      brush.flag = false;
      if (res === 'up') {
        setPoints(arr);
        arr = [];
      }
    }

    if (res === 'move') {
      if (brush.flag) {
        brush.prevX = brush.currX;
        brush.prevY = brush.currY;
        brush.currX = e.clientX - canvas.offsetLeft;
        brush.currY = e.clientY - canvas.offsetTop;
        handleDraw();
        arr.push({
          content: {
            prevX: brush.prevX,
            prevY: brush.prevY,
            currX: brush.currX,
            currY: brush.currY,
            color: brush.color,
            size: brush.size,
          },
        });
      }
    }
  };

  useEffect(() => {
    mountedRef.current = true;

    canvas = document.getElementById('myCanvas')! as HTMLCanvasElement;
    ctx = canvas.getContext('2d')!;

    canvas1 = document.getElementById('myCanvas1')! as HTMLCanvasElement;
    ctx1 = canvas1.getContext('2d')!;

    if (!Array.isArray(mchat) && mchat?.id) {
      const data: Array<{content: IDraw }> = mchat.content;

      if (Array.isArray(data)) {
        data.forEach((props: {content: IDraw }) => {
          ctx1.beginPath();
          ctx1.moveTo(props.content.prevX, props.content.prevY);
          ctx1.lineTo(props.content.currX, props.content.currY);
          ctx1.strokeStyle = props.content.color;
          ctx1.lineWidth = props.content.size;
          ctx1.stroke();
          ctx1.closePath();
        });
      }
    }

    canvas.addEventListener('mousemove', (e: MouseEvent) => findxy('move', e), false);
    canvas.addEventListener('mousedown', (e: MouseEvent) => findxy('down', e), false);
    canvas.addEventListener('mouseup', (e: MouseEvent) => findxy('up', e), false);
    canvas.addEventListener('mouseout', (e: MouseEvent) => findxy('out', e), false);
    canvas.addEventListener('dblclick', () => handleErase(), false);

    return () => {
      canvas.removeEventListener('mousemove', (e: MouseEvent) => findxy('move', e), false);
      canvas.removeEventListener('mousedown', (e: MouseEvent) => findxy('down', e), false);
      canvas.removeEventListener('mouseup', (e: MouseEvent) => findxy('up', e), false);
      canvas.removeEventListener('mouseout', (e: MouseEvent) => findxy('out', e), false);
      canvas.removeEventListener('dblclick', () => handleErase(), false);

      mountedRef.current = false;
    };
  }, [brush.currX, brush.currY, mchat?.id]);

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
