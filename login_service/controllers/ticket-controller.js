const Ticket = require("../models/ticket-model")

const createTicket = async (req, res) => {
    const ticket = new Ticket({
        ticketName: req.body.ticketName,
        ticketLabel: req.body.ticketLabel,
        created: {
            date: Date.now(),
            by: req.body.userId
        },
        status: 1,
        personelList: []
    });
    try {
        const newTicket = await ticket.save();
        res.json({
            reult: true,
            message: "Bilet oluşturuldu"
        });
    } catch (error) {
        res.json({
            reult: false,
            message: "Bilet oluşturulamadı"
        });
    }
};



const getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets); //statusu delete olmucak 
    } catch (error) {
        res.json({
            reult: fase,
            message: "Ticket  alınanamadı"
        });
    }
};


const updateTicketLabels = async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.body.id,
            { $set: { ticketName: req.body.ticketName } },
            { new: true }
        );
        if (!updatedTicket) {
            console.log(req.params.id);
            res.status(404).json({
                result: false,
                message: "Bilet bulunamadı",

            });
        } else {
            res.status(200).json(updatedTicket);
        }
    } catch (error) {
        res.status(500).json({
            result: false,
            message: "Bilet güncellenirken bir hata oluştu"
        });
    }
};

module.exports = {
    createTicket, getAllTickets, updateTicketLabels
}