import 'dotenv/config'
import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()
const app_port = (process.env.APP_PORT || 8080)

app.set('view engine', 'ejs')
app.set('views', './src/views')

//Routes
app.use('/assets', express.static(path.join('./src/public')))

app.get('/', (req,res)=>{
    res.render('home')
})

app.listen(app_port, ()=>{
    console.log('Server Runing...')
})