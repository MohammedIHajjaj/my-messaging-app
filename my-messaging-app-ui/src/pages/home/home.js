import React, { useEffect, useState } from 'react'
import AddMessage from '../../components/add-message/addMessage'
import Header from '../../components/header/header'
import Messages from '../../components/messages/messages'
import "./home.css"

const Home = () => {
    const [messagesList, setMessagesList] = useState([]);
    const [handleClick, setHandleClick] = useState(false);

    useEffect(() => {
        getData();
    }, [])


    const getData = () => {
        fetch("http://localhost:3001/messages/getAllMessages").then(async (res) => {
            const mess = await res.json();
            setMessagesList(mess);
        }).catch((error) => {
        })
    }

    const handleRead = (index) => {
        const tmpMessage = messagesList.slice(0);
        tmpMessage[index].isRead = !tmpMessage[index].isRead;
        setMessagesList(tmpMessage);
    }

    const handleMessage = async (message) => {

        await fetch("http://localhost:3001/messages/addNewMessage", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: new Date().getTime(),
                name: message.name,
                content: message.content,
                date: message.date,
                isRead: false
            }),
        })
            .then(async (res) => {
                const temp = await res.json();
                getData();

            })
            .catch((err) => {
                console.error(err);
            });
    }

    return (
        <div className='home'>
            <Header />
            <Messages messagesList={messagesList} onRead={handleRead} />

            <button onClick={() => setHandleClick(!handleClick)} className='show-btn'>Show New Message</button>
            {
                handleClick && <AddMessage addMessage={handleMessage} />
            }
        </div>
    )
}

export default Home
