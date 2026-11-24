"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function BotaoSair() {
  const router = useRouter();

  async function sair() {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={sair}
      className="rounded-full border-2 border-ameixa px-5 py-2 font-medium text-ameixa hover:bg-lavanda/40"
    >
      Sair
    </button>
  );
}