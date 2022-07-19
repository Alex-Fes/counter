import React from 'react';


type UseButtonPropsType = {
    name: string
    callBack: () => void
}


const UseButton =(props: UseButtonPropsType) =>{
    const onClickButtonHandler = () => {
        props.callBack();

    }
    return (
        <div className={'message'}>
            <button onClick={onClickButtonHandler}>{props.name}</button>
        </div>
    );
}

export default UseButton;









