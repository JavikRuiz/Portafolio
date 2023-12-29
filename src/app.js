import express from 'express'
import dotenv from 'dotenv/config'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRouter from './routes/index.js'

const app = express()
const PORT = process.env.PORT
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(indexRouter)

app.use(express.static(join(__dirname,'public')))

app.listen(PORT, () => {
    console.log(`escuchando en el puerto ${PORT}`)
})