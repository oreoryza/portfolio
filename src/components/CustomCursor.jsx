import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { useCursorContext } from '../components/CursorContext.jsx';

function Cursor() {
  const { initialCursorVariant, animateCursorVariant, animateCursor } =
    useCursorContext();
  const cursorX = useMotionValue();
  const cursorY = useMotionValue();
  const variants = {
    cursorEnter: {
      scale: 1,
      borderRadius: '50%',
      backgroundColor: '#3060B7',
      transition: {
        duration: 0.2,
      },
    },
    cursorLeave: {
      scale: 0,
      border: 0,
      backgroundColor: 'transparent',
      transition: {
        duration: 0.2,
      },
    },
    buttonHover: {
      scale: 0.6,
      border: 0,
      backgroundColor: '#3060B7',
      borderRadius: '50%',
    },
  };
  useEffect(() => {
    const app = document.querySelector('#app');
    const mouseMoveHandler = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    const mouseEnterHandler = () => {
      animateCursor('cursorEnter');
    };
    const mouseLeaveHandler = () => {
      animateCursor('cursorLeave');
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    app.addEventListener('mouseenter', mouseEnterHandler);
    app.addEventListener('mouseleave', mouseLeaveHandler);
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  }, []);
  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        initial={initialCursorVariant}
        animate={animateCursorVariant}
        style={{
          translateX: cursorX,
          translateY: cursorY,
          transformOrigin: 'center',
        }}
      />
    </>
  );
}
export default Cursor;
