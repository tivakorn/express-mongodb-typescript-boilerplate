// Libs
import express, { Application } from 'express'

// Routes
import healthcheckRoute from './routes/healthcheck'

const app: Application = express()

app.use('/healthcheck', healthcheckRoute)

// PORT
const PORT: number = 3000

app.listen(PORT, () => {
    console.log(`server is listening on port : ${PORT}`)
})