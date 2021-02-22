import React from 'react'
import styles from './ChatContainer.module.css'
import ReceiverTopPanel from '../ReceiverTopPanel'
import MessageBox from '../MessageBox'
import MessageInput from '../MessageInput'

const ChatContainer = (props) => {
    return(
        <div className={styles['container']}>
            <ReceiverTopPanel />
            <MessageBox />
            <MessageInput />
        </div>
    )
}

export default ChatContainer