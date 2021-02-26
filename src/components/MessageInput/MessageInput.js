import React from 'react'
import styles from './MessageInput.module.css'

const MessageInput = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles['input-container']}>
                <input type="text" placeholder="Enviar mensaje a Manuel Rodríguez"/>
            </div>
        </div>
    )
}

export default MessageInput