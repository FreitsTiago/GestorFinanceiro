// Conexão mongoDB
import mongoose from 'mongoose'
mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`).then(() => {
    console.log('Data base MongoDB sucessiful connected!')
}).catch((err) => {
    console.log('Connection error: ' + err)
})