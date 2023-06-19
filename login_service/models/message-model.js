const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ticket'
    },

    // userName: {
    //     type: String  //username görmüyor
    // },

    created: {
        date: {
            type: Date,
            default: Date.now
        }
    },

    message: {
        type: String
    },

}, { timestamps: true })

const messageModel = mongoose.model('message', messageSchema)
module.exports = messageModel;