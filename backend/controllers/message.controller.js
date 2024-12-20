import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId } from "../socket/socket.js";
import { io } from "../socket/socket.js";

export const sendMessageCont = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) conversation.messages.push(newMessage._id);

    // * SOCET IO FUNCTIONALITY WILL BE HERE
    const rceiverSocketId = getReceiverSocketId(receiverId);
    if (rceiverSocketId) {
      io.to(rceiverSocketId).emit("newMessage", newMessage);
      console.log(newMessage)
    }

    await Promise.all([conversation.save(), newMessage.save()]); // ? This will run in exact time

    res.status(201).json({ message: newMessage });
  } catch (error) {
    console.log("Error In Send Message Controller", error.message);
    res.status(500).json({ error: "Internal Server Error, Please Try Again" });
  }
};

export const getMessagesCont = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error In Send Message Controller", error.message);
    res.status(500).json({ error: "Internal Server Error, Please Try Again" });
  }
};
