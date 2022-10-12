import React from 'react';
import s from './Display.module.css'



type DisplayPropsType = {
    count: number
    maxScore: number
    isChanged: boolean
    error: boolean
}

export const Display = (props: DisplayPropsType) => {

    const setScoreClassName = () => props.count === props.maxScore ? s.red : s.aqua;

    const textOnDisplay = () => {
        if (props.error) {
            return <p className={`${s.text} ${s.red}`}>Incorrect value</p>
        } else {
            return props.isChanged
                ? <p className={`${s.text} ${s.aqua}`}>Enter value and press 'Set'</p>
                : <p className={setScoreClassName()}>{props.count}</p>
        }
    }


    return (
        <div className={s.main}>
            {textOnDisplay()}
        </div>
    )

}




