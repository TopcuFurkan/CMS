const Message=require('../models/message-model')

const createMessage = async (req, res) => {
    try {
      const { ticketId, createdBy, message } = req.body;
      const newMessage = await Message.create({
        ticketId,
        created: {
          by: createdBy
        },
        message
      });
      res.status(201).json(newMessage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


  const getMessageById = async (req, res) => {
    try {
      const { id } = req.body;
      const message = await Message.findById(id);
      if (!message) {
        return res.status(404).json({ message: 'Message not found' });
      }
      res.status(200).json(message);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


  const getAllMessages = async (req, res) => {
    try {
      const messages = await Message.find();
      res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


module.exports={
    createMessage,getMessageById,getAllMessages,
}