class Message {
    #id;
    #name;
    #content;
    #date;
    #isRead;

    constructor(id, name, content, date, isRead) {
        this.#id = id;
        this.#name = name;
        this.#content = content;
        this.#date = date;
        this.#isRead = isRead;
    }

    getMessage = () => {
        return {
            id:this.#id,
            name:this.#name,
            content:this.#content,
            date:this.#date,
            isRead:this.#isRead
        };
    };

}
module.exports = Message;