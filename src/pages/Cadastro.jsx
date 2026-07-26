import { Link } from 'react-router-dom';

export default function Cadastro() {
  return (
    <main>
      <section className="hero">
        <img className="hero-img hero-img-esquerda hero-img-pequena" src="/imgs/leftwhite.svg" alt="Barbie L" />
        <div className="hero-text">
          <h1>HollyDoll</h1>
          <p>
            Uma boneca especial para uma data especial
          </p>
        </div>
        <img className="hero-img2 hero-img-pequena" src="/imgs/rigthwhite.svg" alt="Barbie R" />
      </section>

      <section className="cadastro-secao">
        <div className="estrelasL">
          <img src="/imgs/tinystarsL.svg" alt="Estrelas esquerda" />
        </div>

        <div className="cadastro-container">
          <h2>Faça seu cadastro</h2>

          <form className="formulario-caixa" onSubmit={(e) => e.preventDefault()}>
            <div className="campo-grupo">
              <input type="email" placeholder="E-mail" required />
            </div>

            <div className="campo-grupo">
              <input type="password" placeholder="Senha" required />
            </div>

            <div className="campo-grupo">
              <input type="password" placeholder="Confirmar senha" required />
            </div>

            <div className="cadastro-botoes">
              <div className="login-chamada">
                <p>Já possui cadastro?</p>
                <Link to="/login">Faça login</Link>
              </div>
              <button type="submit" className="botao-enviar-cadastro">Cadastrar</button>
            </div>
          </form>
        </div>

        <div className="estrelasR">
          <img src="/imgs/tinystarsR.svg" alt="Estrelas direita" />
        </div>
      </section>
    </main>
  );
}