import { redirect } from "next/navigation";
import { obterSessao, areaDoPapel, type Papel } from "@/lib/sessao";

export default async function Painel() {
  const sessao = await obterSessao();
  if (!sessao) redirect("/login");
  redirect(areaDoPapel[(sessao.user.papel ?? "ALUNO") as Papel]);
}