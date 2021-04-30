const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sepatuSchema = new Schema({
    namapembeli:{
        type: String
        },
        namabarang:{
            type: String
        },
        hargabarang:{
            type: String
        },
        jumlahbeli:{
            type: String
        },
        totalharga :{
            type: String
            
        }
})
module.exports =mongoose.model('sepatu',sepatuSchema)