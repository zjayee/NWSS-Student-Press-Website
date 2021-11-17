import * as React from 'react'
import instagram from '../images/Instagram.svg'
import{link, text, container, img} from './MiddleBar.module.css'

const MiddleBar = () =>{

    return(
       <div className={container}>
           <p className= {text}>Follow Us On Social Media</p>
            <a href="https://www.instagram.com/nwssstudentpress/"className={link}><img src= {instagram} className={img}/> @nwssstudentpress</a>
       </div>
    )

}

export default MiddleBar;