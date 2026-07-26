import { useRef } from 'react';

export default function CarrosselProdutos({ titulo, children }) {
  const carrosselRef = useRef(null);

  const scroll = (direcao) => {
    const larguraDeslocamento = 320;
    if (carrosselRef.current) {
      carrosselRef.current.scrollBy({
        left: direcao === 'L' ? -larguraDeslocamento : larguraDeslocamento,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="titulo-vitrine">
        <h3>{titulo}</h3>
      </div>

      <div className="carrosel-container">
        <button 
          type="button" 
          className="seta-carroselL" 
          onClick={() => scroll('L')}
        >
          &#10094;
        </button>

        <div className="carrosel" ref={carrosselRef}>
          {children}
        </div>

        <button 
          type="button" 
          className="seta-carroselR" 
          onClick={() => scroll('R')}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}