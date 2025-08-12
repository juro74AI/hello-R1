import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Zap, Star, Globe, Code2 } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const floatingIcons = [
    { Icon: Sparkles, delay: '0s', x: '10%', y: '20%' },
    { Icon: Zap, delay: '0.5s', x: '85%', y: '15%' },
    { Icon: Star, delay: '1s', x: '15%', y: '80%' },
    { Icon: Globe, delay: '1.5s', x: '80%', y: '75%' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className={`absolute transform transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <Icon className="w-6 h-6 text-white/30 hover:text-white/60 transition-all duration-300 hover:scale-110" />
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className={`text-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          {/* Main greeting */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4 leading-tight">
              Hello World
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              <p className="text-xl text-white/80">Bienvenue dans un monde de possibilités</p>
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            {[
              { 
                icon: Code2, 
                title: "Design Moderne", 
                desc: "Interface élégante et responsive",
                color: "from-blue-500/20 to-cyan-500/20 border-blue-400/30"
              },
              { 
                icon: Sparkles, 
                title: "Animations Fluides", 
                desc: "Micro-interactions engageantes",
                color: "from-purple-500/20 to-pink-500/20 border-purple-400/30"
              },
              { 
                icon: Zap, 
                title: "Performance", 
                desc: "Optimisé pour tous les appareils",
                color: "from-yellow-500/20 to-orange-500/20 border-yellow-400/30"
              }
            ].map(({ icon: Icon, title, desc, color }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${color} backdrop-blur-sm border rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-8 h-8 text-white mb-3 mx-auto group-hover:rotate-12 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/70 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive button */}
          <button className="group bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 active:scale-95">
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Découvrir la magie
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </button>

          {/* Live clock */}
          <div className="mt-8 text-white/60 text-sm font-mono">
            {currentTime.toLocaleTimeString('fr-FR')}
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-5deg); }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default App;