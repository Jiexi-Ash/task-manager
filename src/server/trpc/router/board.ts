import { t } from "../trpc";
import { z } from "zod";

const authMiddleware = t.middleware(async ({ ctx, next }) => {
  if (!ctx.session) {
    throw new Error("Not authenticated");
  }

  return next();
});
export const boardRouter = t.router({
  create: t.procedure
    .use(authMiddleware)
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      //  get user id from session
      const userId = ctx.session?.user?.id;
      const board = await ctx.prisma.board.create({
        data: {
          name: input.name,
          userId: userId!,
        },
      });
      return board;
    }),

  getBoards: t.procedure.use(authMiddleware).query(async ({ ctx }) => {
    const userId = ctx.session?.user?.id;
    const boards = await ctx.prisma.board.findMany({
      where: {
        userId: userId!,
      },
    });
    return boards;
  }),
});
