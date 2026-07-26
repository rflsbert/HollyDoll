import { useState } from 'react';

export default function CardProduto({ img, alt, preco }) {
  const [comprado, setComprado] = useState(false);

  const handleComprar = () => {
    setComprado(true);
    setTimeout(() => setComprado(false), 1500);
  };

  return (
    <div className="holiday">
      <img src={img} alt={alt} />
      <p className="preco">{preco}</p>
      <button 
        type="button" 
        className="comprar" 
        onClick={handleComprar}
        style={{
          backgroundColor: comprado ? '#510021' : '',
          color: comprado ? '#FFD7E7' : ''
        }}
      >
        {comprado ? 'Adicionado! 💖' : 'Comprar'}
      </button>
    </div>
  );
}