import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"

const app = express()
const port = 5002;

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(port, () => console.log(`Servidor inicializado na porta: ${port}`))