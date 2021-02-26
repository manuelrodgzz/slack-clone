import React from 'react'
import styles from './ReceiverTopPanel.module.css'
import {faStar} from '@fortawesome/free-regular-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ReceiverTopPanel = (props) => {
    return(
        <div className={styles['container']}>
            <div className={styles['chat-name']}>
                <div className={[styles['connection-status'], styles['disconnected']].join(' ')}></div>
                <p>
                    <strong>Manuel Rodríguez</strong>
                    <FontAwesomeIcon icon={faStar} style={{marginLeft: '10px'}}/>
                </p>
                <FontAwesomeIcon icon={faInfoCircle} className={styles.info}/>
            </div>
        </div>
    )
}

export default ReceiverTopPanel