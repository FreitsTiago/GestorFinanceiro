import express from 'express'
import path from 'path'

const router = express.Router()

//Rota de arquivos
router.use('/assets', express.static(path.join('./src/public')))

//Rota parão
router.get('/', (req,res)=>{
    res.render('home')
})

//Rota de gerenciamento de contas
import accounts from './routes/accounts.js'
router.use('/accounts', accounts)



export default router