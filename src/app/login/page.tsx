"use client";

import { useState, type SyntheticEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { authClient } from "@/lib/auth-client";

export default function Login() {
  const router = useRouter();
  const [modo, setModo] = useState<"entrar" | "criar">("entrar");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function enviar(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const { error } =
      modo === "entrar"
        ? await authClient.signIn.email({ email, password: senha })
        : await authClient.signUp.email({ name: nome, email, password: senha });

    setCarregando(false);

    if (error) {
      if (modo === "entrar") {
        setErro("E-mail ou senha incorretos.");
      } else if (error.status === 422 || /exist/i.test(error.message ?? "")) {
        setErro("Já existe uma conta com esse e-mail.");
      } else {
        setErro("Não foi possível criar a conta. Use uma senha com no mínimo 8 caracteres.");
      }
      return;
    }

    router.push("/painel");
    router.refresh();
  }

  const campo =
    "mt-1 w-full rounded-xl border border-lavanda bg-white px-4 py-3 outline-none focus:border-ameixa focus:ring-2 focus:ring-lavanda";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-marfim to-neutro-50 px-6 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-sm">
        <Link href="/" aria-label="Voltar para o início" className="flex justify-center">
          <Logo />
        </Link>

        <div className="mt-8 grid grid-cols-2 rounded-full bg-neutro-100 p-1">
          <button
            type="button"
            onClick={() => setModo("entrar")}
            className={`rounded-full py-2 font-medium ${modo === "entrar" ? "bg-ameixa text-white" : "text-ameixa"}`}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => setModo("criar")}
            className={`rounded-full py-2 font-medium ${modo === "criar" ? "bg-ameixa text-white" : "text-ameixa"}`}
          >
            Criar conta
          </button>
        </div>

        <form onSubmit={enviar} className="mt-6 space-y-4">
          {modo === "criar" && (
            <label className="block font-medium text-ameixa">
              Nome
              <input className={campo} value={nome} onChange={(e) => setNome(e.target.value)} required />
            </label>
          )}
          <label className="block font-medium text-ameixa">
            E-mail
            <input type="email" className={campo} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className="block font-medium text-ameixa">
            Senha
            <input
              type="password"
              className={campo}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              minLength={8}
              required
            />
          </label>

          {erro && <p className="rounded-xl bg-rosa/40 px-4 py-3 text-sm text-ameixa">{erro}</p>}

          <button
            type="submit"
            disabled={carregando}
            className="w-full rounded-full bg-ameixa py-3 font-medium text-white hover:opacity-90 disabled:opacity-60"
          >
            {carregando ? "Aguarde..." : modo === "entrar" ? "Entrar" : "Criar conta"}
          </button>
        </form>
      </div>
    </main>
  );
}