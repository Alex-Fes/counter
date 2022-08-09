import React from 'react';
import s from './UseButton.module.css'

type UseButtonPropsType = {
    name: string
    callBack: () => void
    btnDisabled?: boolean
    numb?: number
    maxNumber?: number
}


const UseButton =(props: UseButtonPropsType) =>{
    const onClickButtonHandler = () => {
        props.callBack();

    }
    return (
        <div className={'message'}>
            <button
                onClick={onClickButtonHandler}
                disabled={props.btnDisabled}
className={s.button}
            >{props.name}</button>
        </div>
    );
}

export default UseButton;









