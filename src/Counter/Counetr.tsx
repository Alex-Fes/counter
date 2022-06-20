import React, {useState} from 'react';
import './Counter.css';


const Counter = () => {
    const minValue = 0;
    const MaxValue = 5;

    let [number, setNumber] = useState(minValue);
    let [maxNumb, setMaxNumb] = useState(true);
    let [disableBtn, setDisableBtn] = useState(false);

    const Inc = () => {

        if (number >= minValue && number < MaxValue) {
            setNumber(number + 1);
        }
        if (number === MaxValue) {
            setMaxNumb(false)
        }
        if (number === minValue) {
            setDisableBtn(true)
        }
    };

    const Reset = () => {
        setNumber(minValue);
        setMaxNumb(true);
        setDisableBtn(false);
    };

    return (
        <div className='main'>
            <div className='count'>
                <div className={number !== MaxValue ? 'minCount' : 'maxCount'}>{number}</div>
            </div>
            <div className='button'>
            <div className={maxNumb ? 'inc' : 'noActiveBtn'}>
                <button onClick={Inc} disabled={number === MaxValue}>inc</button>
            </div>
            <div className={disableBtn ? 'reset' : 'noActiveBtn'}>
                <button onClick={Reset} disabled={number === minValue}>reset</button>
            </div>
            </div>
        </div>
    )
}

export default Counter;