const cores = [
  { nome: "lilas", classe: "bg-lilas", hex: "#9791B7" },
  { nome: "creme", classe: "bg-creme", hex: "#F8F0CA" },
  { nome: "pessego", classe: "bg-pessego", hex: "#EED7C2" },
  { nome: "rosa", classe: "bg-rosa", hex: "#D9BEC3" },
  { nome: "lavanda", classe: "bg-lavanda", hex: "#CBC6E0" },
  { nome: "ameixa", classe: "bg-ameixa", hex: "#716D8A" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold text-ameixa">Teacher Esther</h1>
      <p className="mt-3 text-lg">
        Base do projeto configurada com a identidade visual.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {cores.map((cor) => (
          <div key={cor.nome} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div className={`${cor.classe} h-20`} />
            <div className="p-3 text-sm">
              <p className="font-medium text-ameixa">{cor.nome}</p>
              <p>{cor.hex}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 rounded-full bg-ameixa px-6 py-3 font-medium text-white">
        Botão de exemplo
      </button>
    </main>
  );
}