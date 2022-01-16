import React from 'react'
import "./messages.css"
import Message from '../../components/message/message'

const Messages = (props) => {
    return (
        <div >
            {props.messagesList.map((item, index) => (
            <Message item={item} key={index} onRead={()=>props.onRead(index)} />
      ))}
        </div>
    )
}

export default Messages
