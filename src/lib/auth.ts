import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
  },
  user: {
    modelName: "usuario",
    fields: {
      name: "nome",
      createdAt: "criadoEm",
      updatedAt: "atualizadoEm",
    },
    additionalFields: {
      papel: { type: "string", required: false, defaultValue: "ALUNO", input: false },
      telefone: { type: "string", required: false },
      ativo: { type: "boolean", required: false, defaultValue: true, input: false },
    },
  },
});