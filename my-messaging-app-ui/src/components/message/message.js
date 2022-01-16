import React from 'react'
import "./message.css";

const Message = (props) => {

    const onReadStyle = {
        textDecorationLine: "line-through"
    }

    return (
        <div className='message'>
            <div className='section'>
                <h1>{props.item.name}</h1>
                {
                    props.item.isRead ?
                        <p style={onReadStyle}>{props.item.content}</p>
                        : <p>{props.item.content}</p>
                }
            </div>
            <div className='section'>
                <h3>{props.item.date}</h3>
                <button className='toggle-btn' onClick={props.onRead}>Toggle Read</button>
            </div>
        </div>
    )
}

export default Message
