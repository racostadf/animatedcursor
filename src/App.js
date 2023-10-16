import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,

  });
  
  const [cursorVariants, setcursorVariants] = useState("default");


  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16,
    },
    text: {
      height: 150,
      width:  150,
      x: mousePos.x - 75,
      y: mousePos.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"

    }
  }

  const textEnter = () => setcursorVariants('text');
  const textLeave = () => setcursorVariants('default');


  return (
    <div  className='App'>
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>Olá mundo!!!</h1>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariants}
      />



    </div>
  );
}