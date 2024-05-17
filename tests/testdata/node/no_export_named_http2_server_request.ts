import { serve } from "npm:@hono/node-server"
import { Hono } from "npm:hono"

const app = new Hono()
app.get("/", (c) => c.text("Hello from server"))

serve({
  fetch: app.fetch,
  port: 3000
}, () => {
  console.log("Running on 3000")
})
