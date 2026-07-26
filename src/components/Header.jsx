import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src="/imgs/logo.svg" alt="Logo" />
      </Link>
      <nav className="nav">
        <ul>
          <li><a href="/#sobre">Sobre</a></li>
          <li><a href="/#avaliacoes">Avaliações</a></li>
          <li><a href="/#rodape">Contato</a></li>
          <li><Link to="/carrinho">Carrinho</Link></li>

          <li><Link className="botao-entrar" to="/login">Entrar</Link></li>
          <li><Link className="botao-cadastrar" to="/cadastro">Cadastrar</Link></li>
        </ul>
      </nav>
    </header>
  );
}