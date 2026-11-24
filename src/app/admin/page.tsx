import { exigirPapel } from "@/lib/sessao";
import BotaoSair from "@/components/BotaoSair";

export default async function Pagina() {
  const sessao = await exigirPapel(["ADMIN"]);

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold text-ameixa">Painel administrativo</h1>
      <p className="mt-2">Olá, {sessao.user.name}. Em construção.</p>
      <div className="mt-8">
        <BotaoSair />
      </div>
    </main>
  );
}