import React, { useState, useEffect } from 'react';
import './InteractiveBackground.css';
import CategoryTag from './CategoryTag.component'


const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="min-h-[50px] flex items-center justify-center interactive-background"
      style={{ background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #89f7fe, #66a6ff )`}}
    >
      <div className='flex flex-col items-center text-center'>
        <h1 className="text-8xl font-extrabold text-blue-700 mb-6">STEAMRevela</h1>
        <div className="grid grid-cols-3 gap-4 mb-[20px]">
          <CategoryTag title="Science" />
          <CategoryTag title="Technology" />
          <CategoryTag title="Engineering" />
        <div className="col-span-3">
          <CategoryTag title="Art" />
        </div>
        <div className="col-span-3">
          <CategoryTag title="Mathematics" />
        </div>
      </div>
        <p className="text-4xl font-bold mb-2">Universidad Tecnológica del Sureste de Veracruz</p>
        <p className="text-4xl font-bold mb-2">¡Promoviendo el enfoque STEAM</p>
        <p className="text-4xl font-bold mb-2">Juega con nosotros y descubre sus objetos!</p>
      </div>
      <div>
        <p className="text-2xl font-bold mb-2"> Introducción </p>
        <p className='text-xl font-semibold mb-2'>Hoy en día el mundo se encuentra en constantes cambios, 
        ya sea a nivel económico, político, ambiental, social, científico y tecnológico. Esto ha llevado 
        a reconfigurar nuevas tendencias educativas, como el enfoque STEAM. Este término hace referencia 
        a Science, Technology, Engineering, Arts y Mathematics, es decir, Ciencia, Tecnología, Ingeniería, 
        Artes y Matemáticas, haciendo énfasis a la educación interdisciplinar entre estos campos del saber. 
        </p>
        <p className="text-2xl font-bold mb-2"> Metodologías </p>
        <p className='text-xl font-semibold mb-2'>Hoy en día el mundo se encuentra en constantes cambios, 
        ya sea a nivel económico, político, ambiental, social, científico y tecnológico. Esto ha llevado 
        a reconfigurar nuevas tendencias educativas, como el enfoque STEAM. Este término hace referencia 
        a Science, Technology, Engineering, Arts y Mathematics, es decir, Ciencia, Tecnología, Ingeniería, 
        Artes y Matemáticas, haciendo énfasis a la educación interdisciplinar entre estos campos del saber. 
        </p>
      </div>
    </div>
  );
};

export default InteractiveBackground;