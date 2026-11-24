import Header from "@/components/Header";
import Footer from "@/components/Footer";

const passos = [
  { n: "1", titulo: "Fale com a gente", texto: "Conte seu objetivo e seu nível atual. Texto provisório." },
  { n: "2", titulo: "Receba seu plano", texto: "Um caminho de estudo pensado para a sua rotina. Texto provisório." },
  { n: "3", titulo: "Estude na plataforma", texto: "Aulas, materiais para baixar e acompanhamento num só lugar. Texto provisório." },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-marfim to-neutro-50">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="font-medium text-lilas">Aulas de inglês</p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-ameixa sm:text-5xl">
                Inglês com leveza, do seu jeito.
              </h1>
              <p className="mt-5 max-w-md text-lg">
                Título e texto provisórios. Aqui entra a promessa principal da Teacher Esther.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contato" className="rounded-full bg-ameixa px-7 py-3 font-medium text-white hover:opacity-90">
                  Quero começar
                </a>
                <a href="/login" className="rounded-full border-2 border-ameixa px-7 py-3 font-medium text-ameixa hover:bg-lavanda/40">
                  Já sou aluno
                </a>
              </div>
            </div>

            {/* PLACEHOLDER: foto clara e delicada, conforme o manual */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-pessego text-ameixa">
              FOTO
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          {/* PLACEHOLDER: foto da professora */}
          <div className="flex aspect-square items-center justify-center rounded-3xl bg-rosa text-ameixa">
            FOTO
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-ameixa">Sobre a Teacher Esther</h2>
            <p className="mt-4">
              Texto provisório. Aqui entra a história, a formação e o jeito de ensinar da professora.
            </p>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="bg-menta">
          <div className="mx-auto w-full max-w-6xl px-6 py-20">
            <h2 className="text-center text-3xl font-semibold text-ameixa">Como funciona</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {passos.map((p) => (
                <div key={p.n} className="rounded-2xl bg-white p-6 shadow-sm">
                  {/* PLACEHOLDER: trocar pelo ícone da marca */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lavanda font-semibold text-ameixa">
                    {p.n}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ameixa">{p.titulo}</h3>
                  <p className="mt-2">{p.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="rounded-3xl bg-lavanda px-8 py-14 text-center">
            <h2 className="text-3xl font-semibold text-ameixa">Vamos conversar?</h2>
            <p className="mx-auto mt-3 max-w-md">
              Texto provisório. O botão abaixo vai apontar para o WhatsApp ou formulário.
            </p>
            <a href="#" className="mt-8 inline-block rounded-full bg-ameixa px-8 py-3 font-medium text-white hover:opacity-90">
              Falar com a Teacher Esther
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
