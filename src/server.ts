import express from 'express'
import { createRouter } from './router'

const app = express()
const port = process.env.PORT ?? 3001

app.use(express.json())

app.use(createRouter())

app.listen(port, () => console.log(`listen on port: ${port}`))
