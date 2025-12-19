import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawGlobe = (time: number) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.3;

      // Draw globe outline
      ctx.strokeStyle = 'rgba(0, 180, 180, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw rotating latitude lines
      for (let i = 1; i < 6; i++) {
        const latRadius = radius * Math.sin((i * Math.PI) / 6);
        const latY = centerY + radius * Math.cos((i * Math.PI) / 6);
        ctx.beginPath();
        ctx.ellipse(centerX, latY, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw rotating longitude lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + time * 0.0003;
        ctx.beginPath();
        ctx.ellipse(
          centerX,
          centerY,
          radius * Math.abs(Math.cos(angle)),
          radius,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Draw glowing center
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius
      );
      gradient.addColorStop(0, 'rgba(0, 180, 180, 0.1)');
      gradient.addColorStop(0.5, 'rgba(0, 180, 180, 0.05)');
      gradient.addColorStop(1, 'rgba(0, 180, 180, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(28, 42, 54, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid pattern
      ctx.strokeStyle = 'rgba(0, 180, 180, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw globe
      drawGlobe(time);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 200, 200, 0.6)';
        ctx.fill();

        // Draw connections
        nodes.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(0, 200, 200, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw floating data packets
      const packetCount = 5;
      for (let i = 0; i < packetCount; i++) {
        const angle = (time * 0.001 + (i * Math.PI * 2) / packetCount) % (Math.PI * 2);
        const orbitRadius = Math.min(canvas.width, canvas.height) * 0.35;
        const x = canvas.width / 2 + Math.cos(angle) * orbitRadius;
        const y = canvas.height / 2 + Math.sin(angle) * orbitRadius * 0.4;
        
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.fill();
        
        // Glow effect
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.2)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/30 via-transparent to-primary/50" />

      {/* Content */}
      <div className="relative z-20 container-max mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Be found. Be trusted. Get online.
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-up animation-delay-100">
            Get your business online - fast
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            We help Namibian businesses build a credible online presence that customers can easily find, without complexity or long delays
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-300">
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open('https://forms.simplyfound.com.na', '_blank')}
              className="group"
            >
              Be Simply Found
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-16 animate-fade-up animation-delay-400">
            {[
              { title: 'Focused on Credibility, Not Complexity' },
              { title: 'No Lock-In, No Risk' },
              { title: 'Under 10 Minutes to Start' },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 border border-white/20 text-center">
                <div className="text-sm md:text-base font-heading font-semibold text-white">
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
