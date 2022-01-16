import React, { useState } from 'react'
import "./add-message.css"

const AddMessage = (props) => {

    const [newMessage, setNewMessage] = useState({
        name: "",
        content: "",
        date: ""
    })

    const handleChange = (e) => {
        setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
    }


    return (
        <div className='add-message'>
            <form onSubmit={e => {
                e.preventDefault();
                props.addMessage(newMessage);
            }} >
                <div className='input-filed'>
                    <label>Sender Name: </label>
                    <input type="text" name='name' onChange={handleChange} />
                </div>
                <div className='input-filed content'>
                    <label>Content: </label>
                    <input type="text" name='content' onChange={handleChange} />
                </div>
                <div className='input-filed'>
                    <label>Date: </label>
                    <input type="date" name='date' onChange={handleChange} />
                </div>
                <button className='send-btn' type='submit' >Send</button>
            </form>
        </div>
    )
}

export default AddMessage
