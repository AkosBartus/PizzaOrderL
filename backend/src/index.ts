import express from "express"
import type { Request, Response } from "express"
import cors from "cors"
import fs from "fs/promises"
import { z } from "zod"
import path from "path"
const server = express()

server.use(cors())
server.use(express.json())

type CartItems = {
  paradiso: number;
  szalamis: number;
  paradicsomos: number;
  formaggi: number;
  stagioni: number;
  husimado: number;
  margherita: number;
};

type OrderRequestData = {
  name: string;
  city: string;
  street: string;
  houseNumber: number;
  phoneNumber: number;
  email: string;
  cartItems: CartItems;
  date: string;
};

const OrderSchema = z.object({
  name: z.string(),
  city: z.string(),
  street: z.string(),
  houseNumber: z.number(),
  phoneNumber: z.number(),
  email: z.string(),
  cartItems: z.object({
    paradiso: z.number(),
    szalamis: z.number(),
    paradicsomos: z.number(),
    formaggi: z.number(),
    stagioni: z.number(),
    husimado: z.number(),
    margherita: z.number(),
  }),
  date: z.string(),
});

server.post("/api/order", async (req: Request, res: Response) => {
  
  const result = OrderSchema.safeParse(req.body)
  if (!result.success)
    return res.sendStatus(400)

    const newOrder: OrderRequestData = {
      name: result.data.name,
      city: result.data.city,
      street: result.data.street,
      houseNumber: result.data.houseNumber,
      phoneNumber: result.data.phoneNumber,
      email: result.data.email,
      cartItems: result.data.cartItems,
      date: result.data.date,
    };

  const jsonFilePath = path.join("./database/", `order_${Date.now()}.json`);
  await fs.writeFile(jsonFilePath, JSON.stringify(newOrder), "utf-8")

  res.sendStatus(200)
})

server.listen(3333)