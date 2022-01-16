const express = require("express");
const messageRoutes = express.Router();
const MessageService = require("../services/messagesService");

const messageObj = new MessageService();

messageRoutes.get("/getAllMessages", (req, res) => {
    const messageList = messageObj.getAllMessages().map((m) => {
        return {
            id: m.id,
            name: m.name,
            content: m.content,
            date: m.date,
            isRead: m.isRead
        };
    });
    return res.json(messageList);
});

messageRoutes.post("/addNewMessage", (req, res) => {
    const { body } = req;
    messageObj.addNewMessage(body.id, body.name, body.content,body.date,body.isRead);
    res.send(messageObj);
});

module.exports = messageRoutes;