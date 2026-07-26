export default function Footer() {
  return (
    <footer id="rodape" className="rodape">
      <div className="redes">
        <img className="logo-rodape" src="/imgs/logorodape.svg" alt="Rodapé logo" />
        <div className="redes-icons">
          <ul>
            <li>
              <a href="https://www.twitter.com/hollydolloficial" target="_blank" rel="noreferrer">
                <img className="icon" src="/imgs/twitter-icon.svg" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/hollydolloficial/" target="_blank" rel="noreferrer">
                <img className="icon" src="/imgs/instagram-icon.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@hollydolloficial" target="_blank" rel="noreferrer">
                <img className="icon" src="/imgs/youtube-icon.svg" alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rodape-menus">
        <div className="rodape-listas">
          <h5>Atendimento</h5>
          <ul>
            <li><a href="/#duvidas">Dúvidas Frequentes</a></li>
            <li><a href="/#email">Email de suporte</a></li>
            <li><a href="/#whatsapp">WhatsApp</a></li>
            <li><a href="/#reembolso">Reembolso</a></li>
          </ul>
        </div>

        <div className="rodape-listas">
          <h5>Conheça-nos</h5>
          <ul>
            <li><a href="/#sobre">Sobre nós</a></li>
            <li><a href="/#avaliacoes">Avaliações</a></li>
            <li><a href="/#produtos">Produtos</a></li>
          </ul>
        </div>
      </div>

      <img className="barbie-rodape" src="/imgs/rodapebarbie.svg" alt="Rodapé Barbie" />
    </footer>
  );
}