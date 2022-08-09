import React, {useEffect, useState} from 'react';
import s from './CounterMain.module.css';

import {Counter} from "./Counter/Counter";
import Settings from "./Settings/Settings";


const CounterMain = () => {

    //states
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const [numb, setNumb] = useState(0);

    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(0);

    const [disableBtn, setDisableBtn] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setNumb(minValue)
    }, [minValue])
    useEffect(() => {//watch for minNumber and maxNumber
        setError(false)
        setError(minNumber < 0 || maxNumber < 0)
        if (minNumber < maxNumber) setError(true)
        if (minNumber === maxNumber) setError(true)
    }, [minNumber, maxNumber])

    //Buttons callback
    const inc = () => {

        setNumb(numb + 1);
        numb + 1 >= maxValue && setDisableBtn(!disableBtn)
        setError(numb + 1 === maxValue)
    };
    const reset = () => {
        setNumb(minValue)
        setDisableBtn(false)
        setError(false)
    };
    return (
        <div className={s.main}>

            <Settings
                maxValue={maxValue}
                minValue={minValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                setMinNumber={setMinNumber}
                setMaxNumber={setMaxNumber}
                setNumb={setNumb}
                setDisableBtn={setDisableBtn}
            />
            <Counter
                numb={numb}
                inc={inc}
                reset={reset}
                minValue={minValue}
                maxValue={maxValue}
                minNumber={minNumber}
                maxNumber={maxNumber}
                disableBtn={disableBtn}
                error={error}
            />
        </div>
    )
};

export default CounterMain;