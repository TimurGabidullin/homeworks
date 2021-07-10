import React from 'react'
import {MessageType} from "./HW1";
import s from './Message.module.css';


function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <img className={s.avatar} src={props.avatar} alt={'avatar'}/>

            <div className={s.angle}></div>

            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message
