const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ticketSchema = new Schema({
    ticketName: {
        type: String
    },

    ticketLabel: {
        type: Array // Ticket hakkında etiket
    },

    created: {
        date : {
            type : Date,
            default : Date.now
        }
    },

    status: {
        type: Number
        
    },

    personelList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],

}, { timestamps: true })

const ticketModel = mongoose.model('ticket', ticketSchema)
module.exports = ticketModel;
