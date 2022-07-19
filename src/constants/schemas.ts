import z from "zod";

export const sendMesageSchema = z.object({
  roomId: z.string(),
  message: z.string(),
});

const messageSchema = z.object({
  id: z.string(),
  roomId: z.string(),
  message: z.string(),
  sendAt: z.date(),
  sender: z.object({
    name: z.string(),
  }),
});

export type Message = z.TypeOf<typeof messageSchema>;

export const messageSubSchema = z.object({
  roomId: z.string(),
});
