// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { exampleRouter } from "./example";
import { boardRouter } from "./board";
import { authRouter } from "./auth";

export const appRouter = t.router({
  example: exampleRouter,
  board: boardRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
