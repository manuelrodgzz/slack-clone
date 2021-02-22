import React, {useState} from 'react'
import styles from './Dropdown.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretRight, faCaretDown} from '@fortawesome/free-solid-svg-icons'

const Dropdown = ({text, children}) => {

    const [collapsed, setCollapsed] = useState(true);

    const renderItems = () => {
        if(!collapsed)
            return (
                <div className={styles['children-container']}>
                    {children}
                </div>
            )
    }

    return(
        <>
            <div onClick={() => setCollapsed(!collapsed)} className={styles['container']}>
                <div className={styles['icon-container']}>
                    <FontAwesomeIcon icon={collapsed ? faCaretRight : faCaretDown}/>
                    </div>
                <div className={styles['text-container']}>
                    {text}
                </div>
            </div>

            {renderItems()}
        </>
    )
}

export default Dropdown