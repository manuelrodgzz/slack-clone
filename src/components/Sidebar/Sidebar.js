import React from 'react'
import styles from './Sidebar.module.css'
import SidebarButton from '../SidebarButton'
import Dropdown from '../Dropdown'
import {faComment, faComments, faAt, faBookmark, faLock, faHashtag} from '@fortawesome/free-solid-svg-icons'

const Sidebar = (props) => {
    return(
        <div className={styles['container']}>
            <SidebarButton icon={faComment}>
                Hilos de conversaciones        
            </SidebarButton>
            <SidebarButton icon={faComments}>
                Todos los mensajes directos
            </SidebarButton>
            <SidebarButton icon={faAt}>
                Menciones y reacciones
            </SidebarButton>
            <SidebarButton icon={faBookmark}>
                Elementos guardados
            </SidebarButton>

            <Dropdown text='Canales'>
                <SidebarButton icon={faLock}>
                    enroute-mx
                </SidebarButton>
                <SidebarButton icon={faHashtag}>
                    General
                </SidebarButton>
            </Dropdown>

            <Dropdown text='Mensajes directos'>
                <SidebarButton img={'https://ca.slack-edge.com/T07S50KDX-USLACKBOT-sv41d8cd98f0-512'}>
                    Slackbot
                </SidebarButton>
                <SidebarButton img={'https://ca.slack-edge.com/T07S50KDX-U01FF1PK8BW-413ea2df36e9-512'}>
                    Manuel Rodríguez
                </SidebarButton>
            </Dropdown>
        </div>
    )
}

export default Sidebar