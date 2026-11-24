import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "./auth";

export type Papel = "ADMIN" | "PROFESSOR" | "ALUNO";

export const areaDoPapel: Record<Papel, string> = {
  ADMIN: "/admin",
  PROFESSOR: "/professor",
  ALUNO: "/aluno",
};

export async function obterSessao() {
  return auth.api.getSession({ headers: await headers() });
}

export async function exigirPapel(permitidos: Papel[]) {
  const sessao = await obterSessao();
  if (!sessao || sessao.user.ativo === false) redirect("/login");
  const papel = (sessao.user.papel ?? "ALUNO") as Papel;
  if (!permitidos.includes(papel)) redirect(areaDoPapel[papel]);
  return sessao;
}