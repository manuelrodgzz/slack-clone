import React from 'react'
import styles from './SidebarButton.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const SidebarButton = ({children, icon, img}) => {
    
    return(
        <div className={styles['container']}>
            <div className={styles['icon-img-container']}>
                {icon ? <span><FontAwesomeIcon className={styles['icon-img']} icon={icon}/></span> 
                        : <img className={styles['icon-img']} src={img}/>}
            </div>
            <div className={styles['text-container']}>
                {children}
            </div>
        </div>
    )
}

export default SidebarButton