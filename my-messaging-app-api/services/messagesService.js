const Message = require("../models/message")

class MessageService {
    #messageData = [{
        id: new Date().getTime(),
        name: "Subhi",
        content: "This is A test message",
        date: "11/22/5555",
        isRead: false
    },
    {
        id: new Date().getTime(),
        name: "Mohammed",
        content: "This is A test message",
        date: "11/22/5555",
        isRead: false
    }];

    addNewMessage = (id, name, content, date, isRead) => {
        const newMessage = new Message(id, name, content, date, isRead)
        this.#messageData.push(newMessage.getMessage());
        console.log(this.#messageData);
        return this.#messageData;
    }

    getAllMessages = () => {
        return this.#messageData;
    }
}

module.exports = MessageService;