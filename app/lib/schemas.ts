import { z } from "zod";

export const createWorkspaceSchema = z.object({
  workspace: z.object({
    name: z.string({
      message: "Pole je povinné"
    }).min(1, "Pole je povinné"),
    slug: z.string({
      message: "Pole je povinné"
    }).min(3, "URL adresa musí mít alespoň 3 znaky")
      .max(30, "URL adresa může mít maximálně 30 znaků")
      .regex(/^[a-z0-9-]+$/, "Slug může obsahovat pouze malá písmena, čísla a pomlčky")
  }),
  user: z.object({
    email: z.string({
      message: "Pole je povinné"
    }).email("Je potřeba zadat validní email"),
    password: z.string({
      message: "Pole je povinné"
    }).min(8, "Heslo musí mít alespoň 8 znaků"),
    name: z.string({
      message: "Pole je povinné"
    }).min(1, "Pole je povinné")
  })
});

export type CreateWorkspaceInput = z.infer<typeof createWorkspaceSchema>;
