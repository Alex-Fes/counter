import React, {useState} from 'react';
import './Counter.css';


const Counter = () => {
    let [number, setNumber] = useState(0);
    let [maxNumb, setMaxNumb] = useState(true);
    let [disableBtn, setDisableBtn] = useState(false);

    const Inc = () => {

        let plus = number;
        if (plus >= 0 && plus < 5) {
            plus++;
            setNumber(plus);
        }
        if (plus === 5) {
            setMaxNumb(false)

        }
        if (number === 0) {
            setDisableBtn(true)
        }
    };

    const Reset = () => {
        setNumber(0);
        setMaxNumb(true);
        setDisableBtn(false)
    };

    return (
        <div className='main'>
            <div className='count'>
                <div className={maxNumb ? 'minCount' : 'maxCount'}>{number}</div>
            </div>
            <div className='button'>
            <div className={maxNumb ? 'inc' : 'noActiveBtn'}>
                <button onClick={Inc}>inc</button>
            </div>
            <div className={disableBtn ? 'reset' : 'noActiveBtn'}>
                <button onClick={Reset}>reset</button>
            </div>
            </div>
        </div>
    )
}

export default Counter;