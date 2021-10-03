import * as React from 'react'
import backwardchevron from '../images/backwardchevron.svg'
import {background, icon} from './BackButton.module.css'

const BackButton = () => {

    return(
        <button className={background}>
            <img className={icon} src={backwardchevron}/>
        </button>
    )
}

export default BackButton