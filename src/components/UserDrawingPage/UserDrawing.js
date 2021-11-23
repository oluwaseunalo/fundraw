import React, {useState, useRef, useEffect, useCallback} from 'react'
import { SketchPicker } from 'react-color';
import { Button } from '@mui/material';


import useStyles from './styles'

const UserDrawing = () => {

  const classes = useStyles();

 const [color, setColor] = useState('');
 const [position, setPosition] = useState({x:0, y:0});
 const [mouseDown, setMouseDown] = useState(false);

 const eraseColor = ()=>{
  setColor('#FFFFFF')
}
 

 const canvasRef = useRef(null);
 const ctx = useRef(null);

 const changeColor = (color)=>{
        setColor(color.hex)
 }

 const draw = useCallback((x, y)=>{
   if(mouseDown){
      ctx.current.beginPath();
      ctx.current.strokeStyle = color;
      ctx.current.lineWidth= 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(position.x, position.y);
      ctx.current.lineTo(x,y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({x,y})

   } else if (mouseDown && color==='#FFFFFF'){
    ctx.current.beginPath();
    ctx.current.lineWidth= 30;
    ctx.current.lineJoin = 'round';
    ctx.current.moveTo(position.x, position.y);
    ctx.current.lineTo(x,y);
    ctx.current.closePath();
   }

   
 },[position, setPosition, mouseDown, color]);

useEffect(()=>{
  if(canvasRef.current){
    ctx.current= canvasRef.current.getContext('2d');}
  },[]);

  const onMouseDown = (e)=> {
     setPosition({ x: e.pageX,
      y: e.pageY})
      setMouseDown(true);
  }
  

const onMouseUp =(e)=>{
  setMouseDown(false);
}


   const onMouseMove=(e)=>{
     if(mouseDown){
        draw(e.pageX, e.pageY);
     }
     else{setMouseDown(false)}
   }

const removeDrawings= ()=>{
  ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
}

const downloadDrawings = async () => {
  const image = canvasRef.current.toDataURL('image/png');
  const blob = await (await fetch(image)).blob();
  const blobURL = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobURL;
  a.downloadDrawings = 'image.png';
  a.click();
}


  return (
      <div>
      <canvas style={{border: '15px solid blue' }} width='500px' height='500px' ref={canvasRef}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseMove ={onMouseMove}
      ></canvas>
      <Button variant='outlined' color='secondary' onClick = {removeDrawings}>Remove Drawings </Button>
      <Button variant='outlined' color='secondary'>Save </Button>
      <Button variant='outlined' color='secondary' onClick= {eraseColor}>Erase</Button>
      <Button variant='outlined' color='secondary' onClick={downloadDrawings}>Download</Button>
      <SketchPicker color={color} onChange={changeColor}/>
    </div>
   
  );

}

export default UserDrawing;



