import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();

    let animationId: number;

    const animate = () => {
      // Background color based on theme
      ctx.fillStyle = theme === 'dark' ? '#0a0a1e' : '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        display: 'block',
        backgroundColor: theme === 'dark' ? '#0a0a1e' : '#ffffff',
        transition: 'background-color 0.3s ease'
      }}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground;