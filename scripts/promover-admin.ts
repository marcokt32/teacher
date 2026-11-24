import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  const email = process.argv[2]?.trim().toLowerCase();
  if (!email) {
    console.error("Uso: npx tsx scripts/promover-admin.ts email@exemplo.com");
    process.exitCode = 1;
    return;
  }

  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) {
    console.error("Nenhuma conta encontrada com o e-mail:", email);
    process.exitCode = 1;
    return;
  }

  await prisma.usuario.update({ where: { email }, data: { papel: "ADMIN" } });
  console.log("Pronto:", usuario.nome, "agora e ADMIN.");
}

main()
  .catch((erro) => {
    console.error("Falha:", erro);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());