import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link  from "next/link" 
import { useState, useEffect } from 'react'

import {FaList} from "react-icons/fa"
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons';

const inter = Inter({ subsets: ['latin'] })

import { SidebarData } from '../SidebarData/SidebarData'

import styles from './Navbar.module.css'

export default function Home() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className={styles.navbar}>
                <Link href="#" className={styles.menubars}>
                    <FaList onClick={showSidebar}/ >
                </Link>
            </div>
            <nav className={`${styles.navmenu} ${sidebar ? styles.active : ''}`}>
                <ul className={styles.navmenuitems} onClick={showSidebar}>
                    <li className={styles.navbartoggle}>
                        <Link href="#" className={styles.menubars}>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    { SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={styles.navtext}>
                                <Link href={item.path} className={styles.link}>
                                    {item.icon}
                                    <span className={styles.span}>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}