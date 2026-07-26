import CarrosselProdutos from '../components/CarrosselProdutos';
import CardProduto from '../components/CardProduto';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img className="hero-img" src="/imgs/heroloira.svg" alt="Barbie Loira" />
        <div className="hero-text">
          <h1>HollyDoll</h1>
          <p>
            Uma boneca especial para uma data especial
          </p>
        </div>
        <img className="hero-img2" src="/imgs/heronegra.svg" alt="Barbie Negra" />
      </section>

      <section id="produtos" className="produtos">
        <img className="produtosL" src="/imgs/stelleL.svg" alt="Produtos" />
        <img className="produtosR" src="/imgs/stelleR.svg" alt="Produtos" />

        <CarrosselProdutos titulo="Barbie Holiday">
          <CardProduto img="/imgs/barbiehd1.svg" alt="Barbie Holiday 1" preco="R$2329,99" />
          <CardProduto img="/imgs/barbiehd2.svg" alt="Barbie Holiday 2" preco="R$1969,99" />
          <CardProduto img="/imgs/barbiehd3.svg" alt="Barbie Holiday 3" preco="R$1899,99" />
          <CardProduto img="/imgs/barbiehd4.svg" alt="Barbie Holiday 4" preco="R$2779,99" />
          <CardProduto img="/imgs/barbiehd5.svg" alt="Barbie Holiday 5" preco="R$329,99" />
          <CardProduto img="/imgs/barbiehd6.svg" alt="Barbie Holiday 6" preco="R$889,99" />
        </CarrosselProdutos>

        <CarrosselProdutos titulo="Barbie Anos 2000">
          <CardProduto img="/imgs/barbiead1.svg" alt="Barbie Anos 2000 1" preco="R$1979,99" />
          <CardProduto img="/imgs/barbiead2.svg" alt="Barbie Anos 2000 2" preco="R$3119,99" />
          <CardProduto img="/imgs/barbiead3.svg" alt="Barbie Anos 2000 3" preco="R$3779,99" />
          <CardProduto img="/imgs/barbiead4.svg" alt="Barbie Anos 2000 4" preco="R$2169,99" />
          <CardProduto img="/imgs/barbiead5.svg" alt="Barbie Anos 2000 5" preco="R$1889,99" />
          <CardProduto img="/imgs/barbiead6.svg" alt="Barbie Anos 2000 6" preco="R$2779,99" />
        </CarrosselProdutos>
      </section>

      <section id="sobre" className="sobre">
        <img className="sobreL" src="/imgs/stars2.svg" alt="Estrela Esquerda" />
        <h3>Sobre nós</h3>
        <div className="sobre-texto">
          <p>
            A paixão por bonecas que surge na infância, o interesse pelo universo fashion, as homenagens prestadas
            aos nossos ídolos, ou até mesmo o apreço à delicadeza e cuidado exibidos nessas lindas modelos! Com
            um mercado de dolls distante da realidade nacional, a HollyDoll nasceu em 2010 para trazer a nossa paixão
            para perto e mostrar que colecionar pode ser mais fácil do que você imagina!
          </p>
          <p>
            Nossa prioridade é promover a satisfação de nossos clientes. Nós amamos participar da realização dos
            sonhos de tantos colecionadores, e é uma honra para a HollyDoll fazer parte da sua coleção e trazer as
            bonecas que você ama para pertinho de você.
          </p>
          <p>
            Agradecemos por escolher a HollyDoll.
          </p>
        </div>
        <img className="sobreR" src="/imgs/stars.svg" alt="Estrela Direita" />
      </section>

      <section id="avaliacoes" className="avcarrosel">
        <div className="titulo-avaciacoes">
          <img className="avaliacoesL" src="/imgs/salto.svg" alt="Salto" />
          <h3>Avaliações</h3>
          <img className="avaliacoesR" src="/imgs/beijo.svg" alt="Beijo" />
        </div>

        <section className="carrosel">
          <div className="slides">
            <div className="avaliacoes">
              <img src="/imgs/av1.svg" alt="Avaliação 1" />
            </div>
            <div className="avaliacoes">
              <img src="/imgs/av2.svg" alt="Avaliação 2" />
            </div>
            <div className="avaliacoes">
              <img src="/imgs/av3.svg" alt="Avaliação 3" />
            </div>
            <div className="avaliacoes">
              <img src="/imgs/av4.svg" alt="Avaliação 4" />
            </div>
            <div className="avaliacoes">
              <img src="/imgs/av5.svg" alt="Avaliação 5" />
            </div>
            <div className="avaliacoes">
              <img src="/imgs/av6.svg" alt="Avaliação 6" />
            </div>
          </div>
        </section>
      </section>

      <section id="duvidas" className="duvidas">
        <div className="duvidas-texto">
          <h3>Dúvidas Frequentes</h3>

          <h4>• A HollyDoll é confiável?</h4>
          <p>
            Estamos no mercado há mais de 15 anos, nosso site é auditado pela Trustvox - Reclame aqui, possuímos um longo histórico de confiança com nossos clientes colecionadores.
          </p>

          <h4>• É seguro comprar nessa loja virtual?</h4>
          <p>
            Todos os dados informados serão mantidos em completo sigilo. Nosso sistema conta com criptografia avançada e seguimos as boas práticas de proteção aos dados dos nossos usuários.
          </p>

          <h4>• Como serei informado sobre a atualização do meu pedido?</h4>
          <p>
            Qualquer mudança no seu pedido será informada por WhatsApp e e-mail cadastrados. Estamos também a disposição em todos os canais de atendimento para prestar as informações que você desejar. Nosso WhatsApp é 55 99920-2050 e nosso e-mail: sac@hollydoll.com.br.
          </p>

          <h4>• Troca e devolução</h4>
          <p>
            Nossa política de cancelamento, troca ou devolução de produtos segue a diretriz da Lei 8.078/90. Para realizar a solicitação de cancelamento, troca ou devolução, será necessário informar o número do pedido e o motivo do cancelamento, troca ou devolução, através do serviço de atendimento da HollyDoll. Este contato poderá ser realizado pelo endereço de e-mail sac@hollydoll.com.br, ou pelo número de telefone (55) 99920-2050.
          </p>
        </div>
        <img src="/imgs/logopinkvr.svg" alt="Dúvidas" />
      </section>
    </main>
  );
}