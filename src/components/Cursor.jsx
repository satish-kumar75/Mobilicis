import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const size = 60;
  const circle = useRef();
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const delayedMouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -10, yPercent: -10 });
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.55),
      y: lerp(y, mouse.current.y, 0.55),
    };
    moveCircle(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);
  return (
    <div
      ref={circle}
      className="fixed top-0 left-0 rounded-full bg-purple-heart-200 mix-blend-difference z-10"
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Cursor;
