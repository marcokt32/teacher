import { exigirPapel } from "@/lib/sessao";
import BotaoSair from "@/components/BotaoSair";

export default async function Pagina() {
  const sessao = await exigirPapel(["ALUNO"]);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-ameixa">Área do aluno</h1>
      <p className="mt-2">Olá, {sessao.user.name}. Em construção.</p>
      <div className="mt-8">
        <BotaoSair />
      </div>
    </main>
  );
}