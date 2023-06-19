const  express = require('express')
const router = express.Router()
const AuthController =require('../controllers/auth-controller')
const messageController=require('../controllers/message-controller')
const ticketController=require('../controllers/ticket-controller')
// auth controller
router.post('/register',AuthController.register)
router.post('/login',AuthController.login)
// message controller

router.post('/createMessage',messageController.createMessage)
router.get('/getMessageById',messageController.getMessageById)
router.get('/getAllMessages',messageController.getAllMessages)

//ticket controller

router.post('/createTicket',ticketController.createTicket) //
router.get('/getalltickets',ticketController.getAllTickets) //working
router.post('/updatetickets',ticketController.updateTicketLabels) //working


module.exports = router;


