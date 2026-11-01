import Image from "next/image";
import { HorizontalInfographic } from "./components/horizontal-infographic";
import { HeroBackgroundVideo } from "./components/hero-background-video";
import { ImageGallery, type GalleryImage } from "./components/image-gallery";
import { SiteNavigation } from "./components/site-navigation";
import { VideoFacade } from "./components/video-facade";

const shoeImages: GalleryImage[] = [
  {
    src: "/imgs/sapato01.jpg",
    alt: "Oxford: o clássico social de bico arredondado, com cadarços presos no próprio corpo do sapato.",
  },
  {
    src: "/imgs/sapato02.jpg",
    alt: "Derby: clássico parecido com o Oxford, mas com abas laterais para os cadarços.",
  },
  {
    src: "/imgs/sapato03.jpg",
    alt: "Derby de camurça, com abas laterais e cadarços.",
  },
  {
    src: "/imgs/sapato04.jpg",
    alt: "Brogue com recortes decorativos perfurados e desenho em forma de W no peito do pé.",
  },
  {
    src: "/imgs/sapato05.jpg",
    alt: "Brogue azul: uma versão colorida e versátil do sapato tradicional.",
  },
  {
    src: "/imgs/sapato06.jpg",
    alt: "Monk strap: sapato de couro fechado por uma tira com fivela.",
  },
  {
    src: "/imgs/sapato07.jpg",
    alt: "Monk strap que combina com roupas sociais ou casuais.",
  },
  {
    src: "/imgs/sapato08.jpg",
    alt: "Mocassim sem cadarços, com detalhe decorativo no peito do pé.",
  },
  {
    src: "/imgs/sapato09.jpg",
    alt: "Mocassim casual, uma opção descontraída para usar com bermudas.",
  },
  {
    src: "/imgs/sapato10.jpg",
    alt: "Docksider com amarrações laterais e sola de borracha clara.",
  },
  {
    src: "/imgs/sapato11.jpg",
    alt: "Docksider de cores descontraídas, para combinar com bermuda ou calça esportiva.",
  },
  {
    src: "/imgs/sapato12.jpg",
    alt: "Driver: mocassim esportivo com sola flexível e confortável.",
  },
  {
    src: "/imgs/sapato13.jpg",
    alt: "Bota Chelsea com elástico lateral, sem cadarços.",
  },
  {
    src: "/imgs/sapato14.jpg",
    alt: "Coturno de inspiração militar, adotado também por roqueiros e jovens.",
  },
  {
    src: "/imgs/sapato15.jpg",
    alt: "Work boot com solado robusto e resistente, inspirada em calçados de trabalho.",
  },
];

const unusualShoes: GalleryImage[] = [
  {
    src: "/imgs/bizarro1.jpg",
    alt: "Sapato conceitual com alto-falantes e espaço para um CD.",
  },
  {
    src: "/imgs/bizarro2.jpg",
    alt: "Sapato conceitual que imita a sensação de andar descalço.",
  },
  {
    src: "/imgs/bizarro3.jpg",
    alt: "Sapato conceitual inspirado em uma luva de boxe.",
  },
  {
    src: "/imgs/bizarro4.jpg",
    alt: "Sapato de design experimental que brinca com a ideia de andar com os pés no chão.",
  },
  {
    src: "/imgs/bizarro5.jpg",
    alt: "Sapato de formato inusitado, inspirado em uma perna pronta para correr.",
  },
  {
    src: "/imgs/bizarro6.jpg",
    alt: "Sapato de fantasia com aparência de um monstro peludo.",
  },
  {
    src: "/imgs/bizarro7.jpg",
    alt: "Sapato de formato divertido inspirado em um peixe.",
  },
  {
    src: "/imgs/bizarro8.jpg",
    alt: "Sapato brilhante com um formato incomum.",
  },
  {
    src: "/imgs/bizarro9.jpg",
    alt: "Sapato de design experimental com proporções inusitadas.",
  },
  {
    src: "/imgs/bizarro10.jpg",
    alt: "Tênis conceitual com a ponta aberta em forma de bico.",
  },
];

const currentYear = new Date().getFullYear();

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sapatos masculinos: história, fabricação e estilos",
    description:
      "Uma jornada pela história, pelo processo de fabricação e pelos estilos dos sapatos masculinos.",
    inLanguage: "pt-BR",
  };

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded bg-white px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <SiteNavigation />
      <main id="conteudo">
        <section
          id="inicio"
          aria-labelledby="hero-title"
          className="relative flex min-h-[min(100svh,51rem)] items-center overflow-hidden bg-[#171b1e] px-0 pt-20 pb-16 text-white lg:min-h-[1020px]"
        >
          <Image
            src="/imgs/img-header.png"
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
            className="scale-125 object-cover object-center"
          />
          <HeroBackgroundVideo />
          <div
            className="absolute inset-0 z-20 bg-[#080b0c]/85"
            aria-hidden="true"
          />
          <div className="hero-dot-overlay absolute inset-0 z-30" aria-hidden="true" />
          <div className="content-width relative z-40 flex w-full flex-col items-center text-center">
            <div className="flex max-w-4xl flex-col items-center">
              <Image
                src="/imgs/ferracini-logo.png"
                alt="Ferracini apresenta"
                width={259}
                height={47}
                className="mb-8 h-auto w-[min(68vw,259px)]"
              />
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/75 sm:text-base">
                Apresenta
              </p>
              <h1
                id="hero-title"
                className="font-display max-w-full text-[clamp(5rem,15vw,10.5rem)] leading-[0.96] font-bold uppercase tracking-tight"
              >
                sapato
                <span className="mt-1 block text-[clamp(3.5rem,9vw,6.5625rem)] leading-[1.05]">
                  masculino
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 font-light text-white/85 sm:text-xl">
                Como se faz, história, curiosidades, estilo, modelos... Tudo o
                que você precisa saber sobre o grande companheiro de caminhada
                do homem.
              </p>
            </div>
            <dl className="mt-8 flex flex-wrap items-start justify-center gap-x-10 gap-y-4 text-center text-sm text-white/75">
              <div className="min-w-32">
                <dt className="font-semibold">Vídeo</dt>
                <dd className="mt-1 text-base font-light">Bruno Rodrigues</dd>
              </div>
              <div className="min-w-40">
                <dt className="font-semibold">Reportagem e texto</dt>
                <dd className="mt-1 text-base font-light">Marcelo Ventura</dd>
              </div>
              <div className="min-w-32">
                <dt className="font-semibold">Arte</dt>
                <dd className="mt-1 text-base font-light">Fernando Kazuo</dd>
              </div>
            </dl>
          </div>
          <a
            href="#primeiros-passos"
            aria-label="Rolar até a seção Primeiros passos"
            className="absolute bottom-7 left-1/2 z-40 grid size-12 -translate-x-1/2 place-items-center rounded-full transition-transform hover:translate-y-1"
          >
            <Image
              src="/imgs/icon-arrow-down.png"
              alt=""
              width={35}
              height={30}
              className="h-[30px] w-[35px]"
            />
          </a>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="primeiros-passos"
          aria-labelledby="first-steps-title"
          className="section-anchor relative isolate overflow-hidden bg-paper py-16 sm:py-24"
        >
          <Image
            src="/imgs/bg-primeiros-passos.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-25 mix-blend-multiply"
          />
          <div className="content-width section-reveal relative">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-brand">
              Uma invenção que mudou tudo
            </p>
            <h2
              id="first-steps-title"
              className="editorial-heading"
            >
              Os primeiros passos
            </h2>
            <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
              <article className="article-copy">
                <p className="lead-drop-cap">
                  No corre-corre de toda manhã, ao terminar de se vestir, você
                  calça os sapatos e sai para matar o seu leão do dia. E nem se
                  dá conta da importância desses calçados para sua vida, muito
                  menos para a humanidade. Depois que nossos antepassados se
                  ergueram e passaram a andar, o sapato foi uma de suas grandes
                  invenções e, desde então, seu companheiro de caminhada.
                </p>
                <p>
                  Os sapatos surgiram no período Paleolítico, quando o homem
                  passou a criar instrumentos para as tarefas cotidianas. Um
                  pedaço de pele de animal protegia os pés dos terrenos
                  irregulares e do frio, trazendo mais agilidade e autonomia.
                  Além de um item de sobrevivência, o calçado ganhou
                  simbolismos, impulsionou a economia e transformou as relações
                  sociais.
                </p>
                <p>
                  No Antigo Egito, palha, papiro e fibra de palmeira eram usados
                  como matéria-prima. Sandálias de faraós e da nobreza podiam
                  ser adornadas com metais preciosos, enquanto os calçados dos
                  mais humildes eram feitos de materiais simples.
                </p>
                <p>
                  Na Grécia, atores usavam saltos de tamanhos distintos para
                  destacar a importância de seus personagens. Os gregos também
                  criaram a diferenciação entre os pés esquerdo e direito,
                  inovação que demoraria a ser adotada pela indústria.
                </p>
              </article>
              <div className="grid gap-8">
                <figure className="overflow-hidden bg-[#e8e2d9]">
                  <Image
                    src="/imgs/picture-primeiros-passos.png"
                    alt="Homem engraxando um sapato"
                    width={427}
                    height={639}
                    sizes="(max-width: 1024px) 100vw, 320px"
                    className="h-auto w-full"
                  />
                </figure>
                <blockquote className="text-center text-ink">
                  <p className="font-display text-2xl leading-snug sm:text-3xl">
                    “Antes que você me acuse, critique ou explore, ande uma
                    milha nos meus sapatos.”
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <figure className="mx-auto flex items-center justify-center gap-3">
                      <Image
                        src="/imgs/avatar-elvis.png"
                        alt="Retrato de Elvis Presley"
                        width={48}
                        height={48}
                        className="size-12 rounded-full object-cover"
                      />
                      <figcaption className="text-sm font-semibold not-italic text-muted">
                        <cite>Elvis Presley</cite>
                      </figcaption>
                    </figure>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section
          id="na-prancheta"
          aria-labelledby="drawing-board-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-brand">
              Do desenho ao produto
            </p>
            <h2
              id="drawing-board-title"
              className="editorial-heading"
            >
              Da prancheta à linha de produção
            </h2>
            <p className="editorial-intro">
              Antes de chegar à fábrica, um sapato passa por um longo processo
              de desenvolvimento — e nem tudo o que foi desenhado chega às
              lojas.
            </p>
            <div className="mt-10">
              <HorizontalInfographic
                src="/imgs/infografico-prancheta.jpg"
                alt="Infográfico que ilustra as etapas de criação de um sapato, da prancheta à produção."
                label="Infográfico: Da prancheta à linha de produção"
                width={8363}
              />
            </div>
            <div className="article-copy mt-12 max-w-4xl">
              <p>
                Na Roma Antiga, as cores dos calçados indicavam posições
                sociais: cônsules tinham sapatos brancos; senadores, marrons,
                presos por fitas de couro. Os soldados usavam botas de cano
                curto que deixavam os dedos descobertos.
              </p>
              <p>
                Na Idade Média, homens e mulheres usavam calçados de couro
                abertos, semelhantes às sapatilhas de hoje. Com o tempo, os
                homens passaram a calçar botas altas e baixas. Até o fim do
                período Barroco, não havia uma diferença clara entre sapatos
                masculinos e femininos.
              </p>
              <blockquote className="my-10 text-center">
                <p className="font-display text-3xl leading-snug text-ink">
                  “Um sapato que fica bem numa pessoa é pequeno para outra. Não
                  existe uma receita para a vida que sirva para todos.”
                </p>
                <footer className="mt-4">
                  <figure className="flex items-center justify-center gap-3">
                    <Image
                      src="/imgs/avatar-carlJung.png"
                      alt="Retrato de Carl Jung"
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                    <figcaption className="text-sm font-semibold text-muted">
                      <cite>Carl Jung</cite>
                    </figcaption>
                  </figure>
                </footer>
              </blockquote>
              <p>
                Entre os séculos 14 e 16, os homens passaram a usar sapatos com
                salto, principalmente para cavalgar. A numeração também surgiu
                nesse período: na Inglaterra, o Rei Eduardo I padronizou a
                medida com base em grãos de cevada alinhados.
              </p>
              <p>
                O salto alto foi durante muito tempo de uso masculino. Ganhou
                destaque na corte francesa de Luís XIV, no século 17, e só no
                início do século 19 os sapatos de homens e mulheres começaram a
                se diferenciar por cores, estilo, desenho e tamanho.
              </p>
              <p>
                A numeração dos calçados também surgiu nessa época. Na
                Inglaterra, o tamanho era calculado com grãos de cevada
                alinhados; hoje, o Brasil e a maior parte da Europa usam o
                Ponto Francês, equivalente a dois terços de um centímetro.
              </p>
              <p>
                O salto ganhou ainda mais destaque com Luís XV, a ponto de a
                expressão “salto 15” permanecer até hoje. No início do século
                19, a fabricação ainda era artesanal: os sapatos eram feitos em
                linha reta, sem distinção entre o pé esquerdo e o direito.
              </p>
              <p>
                Em 1790, foi montada uma máquina experimental para costurar
                sapatos. Pregos de metal para fixar as solas apareceram cerca
                de vinte anos depois e, em 1839, começaram a ser usadas formas
                de madeira.
              </p>
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="como-se-faz"
          aria-labelledby="how-made-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#ed9ca0]">
                Da matéria-prima ao acabamento
              </p>
              <h2
                id="how-made-title"
                className="editorial-heading"
              >
                Como se faz um sapato
              </h2>
              <p className="editorial-intro">
                Visitamos uma fábrica de sapatos em Franca, São Paulo, para
                acompanhar de perto o processo de produção.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <VideoFacade
                videoId="pS8TzJpP_bA"
                title="Reportagem sobre o processo de fabricação de um sapato na fábrica Ferracini"
              />
            </div>
            <p className="article-copy mx-auto mt-8 max-w-3xl">
              Cada modelo percorre diferentes etapas de desenvolvimento,
              montagem e acabamento. O trabalho combina conhecimento técnico,
              escolha de materiais e atenção aos detalhes para transformar um
              desenho em um calçado pronto para acompanhar o dia a dia.
            </p>
            <p className="article-copy mx-auto mt-5 max-w-3xl">
              Por muito tempo, o salto foi um elemento da moda masculina. No
              século 18, os homens começaram a abandoná-lo; no século 19, os
              modelos masculinos passaram a se diferenciar dos femininos por
              cores, desenho e proporções.
            </p>
          </div>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="linha-do-tempo"
          aria-labelledby="timeline-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-brand">
              Um percurso de séculos
            </p>
            <h2
              id="timeline-title"
              className="editorial-heading"
            >
              A passos largos
            </h2>
            <p className="editorial-intro">
              Alguns dos principais fatos da história dos sapatos masculinos.
            </p>
            <div className="mt-10">
              <HorizontalInfographic
                src="/imgs/infografico-linha-tempo.jpg"
                alt="Infográfico horizontal com uma linha do tempo da história dos sapatos."
                label="Infográfico: Linha do tempo dos sapatos masculinos"
                width={8737}
              />
            </div>
            <div className="article-copy mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
              <div>
                <p>
                  Um dos primeiros registros de manufatura em grande escala
                  data de 1642: foram fornecidos 4 mil pares de sapatos e 600
                  botas ao exército inglês. A indústria calçadista ganhou
                  escala após a Revolução Industrial. No Brasil, os sapatos
                  começaram a se popularizar com a chegada da corte portuguesa,
                  em 1808.
                </p>
                <p>
                  No início do século 20, Novo Hamburgo tornou-se um polo de
                  produção, próximo à matéria-prima e às comunidades de
                  imigrantes.
                </p>
                <p>
                  A partir da expansão do café e da chegada da estrada de ferro
                  Mogiana, Franca se tornou uma das principais cidades
                  produtoras de sapatos masculinos do país, conhecida como a
                  Capital Nacional dos Calçados. A cidade segue ligada à
                  tradição calçadista e a diferentes etapas da produção.
                </p>
              </div>
              <Image
                src="/imgs/picture-linha-tempo.png"
                alt="Ilustração que acompanha a história da indústria de calçados."
                width={424}
                height={447}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="mx-auto h-auto w-full max-w-80"
              />
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="sapatos-estilosos"
          aria-labelledby="styles-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand">
                Um modelo para cada ocasião
              </p>
              <h2
                id="styles-title"
                className="editorial-heading"
              >
                Estilo aos seus pés
              </h2>
              <p className="editorial-intro">
                Conheça alguns modelos de sapatos que conquistaram espaço nos
                guarda-roupas masculinos.
              </p>
            </div>
            <ImageGallery images={shoeImages} label="Galeria de estilos de sapatos" />
            <div className="article-copy mx-auto mt-12 max-w-4xl">
              <p>
                Com a evolução da indústria calçadista, surgiram tantos
                materiais, cores, modelos e detalhes que é difícil prever qual
                será a próxima tendência. Essa variedade também amplia as
                possibilidades de combinação: do jeans à calça social, da
                bermuda aos diferentes tipos de solado.
              </p>
              <p>
                Os sapatos influenciam a moda, a cultura e a expressão pessoal.
                Na hora de se vestir, vale escolher o par que combina com a
                ocasião — e com o seu jeito de caminhar.
              </p>
            </div>
            <figure className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl bg-paper">
              <Image
                src="/imgs/picture-sapatos-estilosos.png"
                alt="Sapato masculino em destaque."
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 672px"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="trabalho-manual"
          aria-labelledby="craft-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand">
                O cuidado em cada detalhe
              </p>
              <h2
                id="craft-title"
                className="editorial-heading"
              >
                Toque pessoal
              </h2>
              <p className="editorial-intro">
                Um único par de sapatos pode passar por até 2 mil mãos durante
                a produção. Conheça o trabalho por trás de cada detalhe.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl">
              <VideoFacade
                videoId="pVwChGVTkhI"
                title="Vídeo sobre o trabalho manual na produção de sapatos"
              />
            </div>
          </div>
        </section>
        <div aria-hidden="true" className="story-divider" />

        <section
          id="bizarrices-nos-pes"
          aria-labelledby="unusual-title"
          className="section-anchor bg-[#d9d9d9] py-16 sm:py-24"
        >
          <div className="content-width section-reveal">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.22em] text-brand">
              Ideias fora do comum
            </p>
            <h2
              id="unusual-title"
              className="editorial-heading"
            >
              Sapatos bizarros
            </h2>
            <p className="editorial-intro mb-10">
              Uma pequena amostra do que designers e projetistas já imaginaram
              para cobrir os pés.
            </p>
            <ImageGallery
              images={unusualShoes}
              label="Galeria de sapatos com designs inusitados"
              layout="pair"
            />
          </div>
        </section>
      </main>

      <footer className="min-h-[155px] border-t border-white/10 bg-[#151a1d] py-8 text-[#cdab91] [background-image:url('/imgs/bg-footer.png')]">
        <div className="content-width flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <Image
            src="/imgs/ycr-logo.png"
            alt="YCR Participações"
            width={150}
            height={60}
            className="h-10 w-auto object-contain"
          />
          <p className="max-w-xl text-xs leading-6">
            © AreaH 2011–{currentYear}. Todos os direitos reservados. Uma
            empresa YCR Participações.
          </p>
          <a
            href="https://www.poltts.com.br"
            target="_blank"
            rel="noreferrer"
            className="rounded text-sm font-medium underline decoration-[#cdab91]/50 underline-offset-4 hover:decoration-[#cdab91]"
          >
            Desenvolvido por Pati Poltts
          </a>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
