import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  const total = await prisma.usuario.count();
  console.log("Conexao OK. Usuarios cadastrados:", total);
}

main()
  .catch((erro) => {
    console.error("Falha na conexao:", erro);
    process.exitCode = 1;
  })
  .finally(() => prisma.$disconnect());