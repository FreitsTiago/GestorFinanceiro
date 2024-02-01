import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const app_port = (process.env.APP_PORT || 8080)

app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', './src/views')

//Router
import router from './router.js'
app.use(router)

app.listen(app_port, ()=>{
    console.log('Server Runing...')
})