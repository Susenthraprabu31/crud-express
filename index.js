import express from 'express'
import Approutes from './src/routes/index.routes.js'

const PORT = process.env.PORT || 8000

const app=express()

app.use(express.json())


app.use(Approutes)



app.listen(PORT,()=>console.log(`App is listening${PORT}`))