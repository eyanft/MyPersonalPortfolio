import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseXRef = useRef(window.innerWidth / 2);
  const mouseYRef = useRef(window.innerHeight / 2);
  const prevMouseXRef = useRef(window.innerWidth / 2);
  const prevMouseYRef = useRef(window.innerHeight / 2);

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
    let bubbles: Array<{
      x: number, 
      y: number, 
      vx: number, 
      vy: number, 
      size: number, 
      life: number,
      color: string,
      opacity: number
    }> = [];
    let time = 0;

    const animate = () => {
      time += 0.016;
      
      // Dark background
      ctx.fillStyle = '#0a0a1e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate mouse velocity
      const mouseVelX = mouseXRef.current - prevMouseXRef.current;
      const mouseVelY = mouseYRef.current - prevMouseYRef.current;
      const mouseSpeed = Math.sqrt(mouseVelX * mouseVelX + mouseVelY * mouseVelY);
      
      // Create bubbles on mouse movement
      if (mouseSpeed > 0.5) {
        const colors = ['#a855f7', '#ec4899', '#3b82f6', '#8b5cf6', '#f472b6'];
        const numBubbles = Math.min(5, Math.floor(mouseSpeed * 0.5) + 2);
        
        for (let i = 0; i < numBubbles; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 3;
          bubbles.push({
            x: mouseXRef.current + (Math.random() - 0.5) * 80,
            y: mouseYRef.current + (Math.random() - 0.5) * 80,
            vx: Math.cos(angle) * speed + mouseVelX * 0.4,
            vy: Math.sin(angle) * speed + mouseVelY * 0.4 - 4,
            size: Math.random() * 50 + 30,
            life: 200,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.4 + 0.6
          });
        }
      }
      
      prevMouseXRef.current = mouseXRef.current;
      prevMouseYRef.current = mouseYRef.current;

      // Draw and update bubbles
      bubbles.forEach(bubble => {
        // Physics
        bubble.x += bubble.vx;
        bubble.y += bubble.vy;
        bubble.vy -= 0.2; // Float upward
        bubble.vx *= 0.97;
        bubble.vy *= 0.97;
        bubble.life -= 1;
        bubble.size *= 0.998;
        
        const lifeRatio = bubble.life / 200;
        const alpha = bubble.opacity * Math.min(lifeRatio * 3, 1);
        
        // Outer glow
        const glowSize = bubble.size * 2.5;
        const glow = ctx.createRadialGradient(
          bubble.x, bubble.y, 0,
          bubble.x, bubble.y, glowSize
        );
        glow.addColorStop(0, `${bubble.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`);
        glow.addColorStop(0.5, `${bubble.color}${Math.floor(alpha * 127).toString(16).padStart(2, '0')}`);
        glow.addColorStop(1, `${bubble.color}00`);
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, glowSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Main bubble with gradient
        const mainGradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3, 
          bubble.y - bubble.size * 0.3, 
          0,
          bubble.x, 
          bubble.y, 
          bubble.size
        );
        mainGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`);
        mainGradient.addColorStop(0.3, `${bubble.color}${Math.floor(alpha * 230).toString(16).padStart(2, '0')}`);
        mainGradient.addColorStop(1, `${bubble.color}${Math.floor(alpha * 180).toString(16).padStart(2, '0')}`);
        
        ctx.fillStyle = mainGradient;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Highlight shine
        const shineSize = bubble.size * 0.4;
        const shine = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.35,
          bubble.y - bubble.size * 0.35,
          0,
          bubble.x - bubble.size * 0.35,
          bubble.y - bubble.size * 0.35,
          shineSize
        );
        shine.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`);
        shine.addColorStop(0.6, `rgba(255, 255, 255, ${alpha * 0.3})`);
        shine.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = shine;
        ctx.beginPath();
        ctx.arc(bubble.x - bubble.size * 0.35, bubble.y - bubble.size * 0.35, shineSize, 0, Math.PI * 2);
        ctx.fill();
        
        // Border
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.stroke();
      });
      
      // Remove dead bubbles
      bubbles = bubbles.filter(b => b.life > 0 && b.y > -300);
      
      // Cursor effects
      const pulse = Math.sin(time * 3) * 0.3 + 0.7;
      const speedMultiplier = Math.min(mouseSpeed * 0.05, 1);
      
      // Outer ring
      const ring1 = ctx.createRadialGradient(
        mouseXRef.current, mouseYRef.current, 0, 
        mouseXRef.current, mouseYRef.current, 400
      );
      ring1.addColorStop(0, `rgba(236, 72, 153, ${(0.4 + speedMultiplier * 0.3) * pulse})`);
      ring1.addColorStop(0.6, `rgba(168, 85, 247, ${(0.2 + speedMultiplier * 0.2) * pulse})`);
      ring1.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = ring1;
      ctx.beginPath();
      ctx.arc(mouseXRef.current, mouseYRef.current, 400, 0, Math.PI * 2);
      ctx.fill();
      
      // Middle ring
      const ring2 = ctx.createRadialGradient(
        mouseXRef.current, mouseYRef.current, 0, 
        mouseXRef.current, mouseYRef.current, 200
      );
      ring2.addColorStop(0, 'rgba(255, 255, 255, 0.7)');
      ring2.addColorStop(0.5, 'rgba(236, 72, 153, 0.5)');
      ring2.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = ring2;
      ctx.beginPath();
      ctx.arc(mouseXRef.current, mouseYRef.current, 200, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner glow
      const ring3 = ctx.createRadialGradient(
        mouseXRef.current, mouseYRef.current, 0, 
        mouseXRef.current, mouseYRef.current, 80
      );
      ring3.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      ring3.addColorStop(0.7, 'rgba(236, 72, 153, 0.6)');
      ring3.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = ring3;
      ctx.beginPath();
      ctx.arc(mouseXRef.current, mouseYRef.current, 80, 0, Math.PI * 2);
      ctx.fill();
      
      // Center dot
      ctx.shadowColor = 'rgba(255, 255, 255, 1)';
      ctx.shadowBlur = 40;
      ctx.fillStyle = 'rgba(255, 255, 255, 1)';
      ctx.beginPath();
      const centerSize = 15 + Math.sin(time * 6) * 4;
      ctx.arc(mouseXRef.current, mouseYRef.current, centerSize, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.shadowBlur = 20;
      ctx.fillStyle = 'rgba(236, 72, 153, 1)';
      ctx.beginPath();
      ctx.arc(mouseXRef.current, mouseYRef.current, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

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
        backgroundColor: '#0a0a1e'
      }}
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground;