import * as React from 'react'
import { Link } from 'gatsby'
import {header, orange, navItem, container} from './TopNav.module.css'

const TopNav = () =>{

    return(
        <div className={container}>
            <h1 className={header}><span className={orange}>NWSS</span> Student Press</h1>
            <nav>
                <Link className={navItem}>Archive</Link>
                <Link className={navItem} to="/about">About</Link>
            </nav>
        </div>
    )

}

export default TopNav;