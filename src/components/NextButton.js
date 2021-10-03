import * as React from 'react'
import forwardchevron from '../images/forwardchevron.svg'
import {background, icon} from './NextButton.module.css'

const NextButton = () => {

    return(
        <button className={background}>
            <img className={icon} src={forwardchevron}/>
        </button>
    )
}

export default NextButton