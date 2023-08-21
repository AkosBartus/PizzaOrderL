import express from "express"
import type { Request, Response } from "express"
import cors from "cors"
/* import fs from "fs/promises" */
import { z } from "zod"
/* import path from "path" */
import { Client } from 'pg'
const client =  new Client("postgres://Peti1991:Hs3NhJ1gtcRK@curly-frost-62658694.us-west-2.aws.neon.tech/intense-liger-18_db_5324694?options=project%3Dcurly-frost-62658694&sslmode=require")

const server = express()

server.use(cors())
server.use(express.json())


const OrderSchema = z.object({
  name: z.string(),
  city: z.string(),
  street: z.string(),
  houseNumber: z.number(),
  telNumber: z.number(),
  email: z.string(),
  zipCode: z.number(),
  cartItems: z.object({
    paradiso: z.number(),
    szalamis: z.number(),
    paradicsomos: z.number(),
    formaggi: z.number(),
    stagioni: z.number(),
    husimado: z.number(),
    margherita: z.number(),
  }),
/*   date: z.string(), */
});

server.post("/api/order", async (req: Request, res: Response) => {
  
  const result = OrderSchema.safeParse(req.body)
  if (!result.success)
    return res.sendStatus(400)

  const newOrder = result.data
  console.log(newOrder)
  const answer = await client.query(`INSERT INTO pizza (name, city, street, housenumber, telnumber, email,
     zipcode, paradiso, szalamis, paradicsomos, formaggi, stagioni, husimado, margherita) 
     VALUES ($1::text, $2::text, $3::text, $4::integer, $5::integer, $6::text, $7::integer, 
     $8::integer, $9::integer, $10::integer, $11::integer, $12::integer, $13::integer, $14::integer);`,
    [newOrder.name, newOrder.city, newOrder.street, newOrder.houseNumber, newOrder.telNumber, newOrder.email, newOrder.zipCode,
      newOrder.cartItems.paradiso, newOrder.cartItems.szalamis, newOrder.cartItems.paradicsomos, newOrder.cartItems.formaggi,
      newOrder.cartItems.stagioni, newOrder.cartItems.husimado, newOrder.cartItems.margherita
    ])

  console.log(answer)
  /* res.json({id: answer.rows[0].id}) */

  res.sendStatus(200)
})

client.connect().then(()=>server.listen(3333))