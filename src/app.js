import express from 'express'
import cors from 'cors'
import router from './router/index.js'
import morgan from 'morgan'

const app = express()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

app.use('/api', router)

export default app