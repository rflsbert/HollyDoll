import { Link } from 'react-router-dom';

export default function Carrinho() {
  return (
    <main>
      <section id="carrinho" className="carrinho-secao">
        <div className="carrinho-imagem">
          <img src="/imgs/logocarrinho.svg" alt="Logo Rosa" />
        </div>

        <div className="carrinho-texto">
          <h1>Seu carrinho está vazio</h1>
          <Link to="/#produtos" className="botao-escolher-produtos">
            Escolher produtos
          </Link>
        </div>
      </section>
    </main>
  );
}