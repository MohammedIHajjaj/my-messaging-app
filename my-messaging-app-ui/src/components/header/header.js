import React, { useState } from 'react'
import "./header.css"

const Header = () => {

    const [time, setTime] = useState(0);

    let today = new Date();
    let date = today.getDate()+"/"+(today.getMonth()+1) + "/" + today.getFullYear();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    setInterval(() => {
        setTime(Date().toLocaleString())
    }, 1000);
    return (
        <div>
            <div className='header'>
                <h1>My Messaging App</h1>
                <strong>{date} {currentTime} <span></span> </strong>
            </div>
            <hr />
        </div>
    )
}

export default Header
