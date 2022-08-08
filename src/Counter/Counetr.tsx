import React, {useEffect, useState} from 'react';
import './Counter.css';
import UseButton from "../Button/UseButton";
import Settings from "../Settings/Settings";


const Counter = () => {
    let [minValue, setMinValue] = useState(0);
    let [maxValue, setMaxValue] = useState(5);

    let [minNumber, setMinNumber] = useState(minValue);
    let [maxNumber, setMaxNumber] = useState(maxValue);

    let [maxNumb, setMaxNumb] = useState(true);
    let [disableBtn, setDisableBtn] = useState(false);
    let [disableSettings, setDisableSettings] = useState(false);
    let [error, setError] = useState(false);

    useEffect(() => {
        let minValueAsString = localStorage.getItem('counterMinValue')
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            setMinValue(newValue)
        }
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        let minValueAsString = localStorage.getItem('counterMinValue')
        if (minValueAsString) {
            let newValue = JSON.parse(minValueAsString)
            setMinNumber(newValue)
        }
    }, [minValue])
    useEffect(() => {
        let maxValueAsString = localStorage.getItem('counterMaxValue')
        if (maxValueAsString) {
            let newValue = JSON.parse(maxValueAsString)
            setMaxNumber(newValue)
        }
    }, [maxValue])

    const Inc = () => {
        if (minNumber < maxNumber) {
            setMinNumber(minNumber + 1);
        }
        if (minNumber === maxNumber) {
            setMaxNumb(false)
        }
        if (minNumber === minNumber) {
            setDisableBtn(true)
        }
    };
    const Reset = () => {
        setMinNumber(minValue)

        // let minValueAsString = localStorage.getItem('counterMinValue')
        // let maxValueAsString = localStorage.getItem('counterMaxValue')
        // if (minValueAsString) {
        //     let newValue = JSON.parse(minValueAsString)
        //     setMinNumber(newValue)
        // } else {
        //      setMinNumber(minValue)
        //     setMaxNumb(true);
        //     setDisableBtn(true);
        // }
        // if (maxValueAsString) {
        //     let newValue = JSON.parse(maxValueAsString)
        //     setMaxNumber(newValue)
        // } else {
        //     setMaxNumb(true);
        //     setDisableBtn(false);
        //      setMaxNumber(maxValue)
        // }
        // setMinNumber(minValue)
        // setMaxNumber(maxValue)
        setMaxNumb(true);
        setDisableBtn(false)
    };
    const onChangeMaxValueHandler = (value: number) => {
        if (value >= 0 && value > minValue) {
            setMaxValue(value)
            setDisableSettings(true)
            setMaxNumb(false)
            setDisableBtn(false);
            setError(false)
        } else {
            setError(true)
            setDisableSettings(false)
            // setDisableBtn(true)
            // setMaxNumb(false)
        }
    }
    const onChangeStartValueHandler = (value: number) => {
        if (value >= 0 && value < maxValue) {
            setMinValue(value);
            setDisableSettings(true)
            setMaxNumb(false)
            setDisableBtn(false);
            setError(false)
        } else {
            setError(true)
            setDisableSettings(false)
            // setDisableBtn(false)
            // setMaxNumb(false)
        }
    }
    const onSetSettingsHandler = () => {
        if (minValue >= 0 && minValue < maxValue) {
            localStorage.setItem('counterMinValue', JSON.stringify(minValue))
            setMinNumber(minValue)

        }
        if (maxValue >= 0 && maxValue > minValue) {
            localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
            setMaxNumber(maxValue)

        } else {
            setError(true)
            setDisableSettings(false)
        }

        // let minValueAsString = localStorage.getItem('counterMinValue')
        // let maxValueAsString = localStorage.getItem('counterMaxValue')
        // if (minValueAsString) {
        //     let newValue = JSON.parse(minValueAsString)
        //     setMinNumber(newValue)
        // }
        // if (maxValueAsString) {
        //     let newValue = JSON.parse(maxValueAsString)
        //     setMaxNumber(newValue)
        // }
        setDisableSettings(false)
        setMaxNumb(true)
        // setDisableBtn(false)
    }
    const showText = () => {
        if (error) {
            return <p className={'text'}>"Incorrect value!"</p>
        } else {
            return !maxNumb ? <p className={'text'}> Enter values and press 'set'</p>
                : <p>{minNumber}</p>
        }
    }

    return (
        <div className='main'>
            <div className='count'>
                <div className={minNumber !== maxNumber ? 'minCount' : 'maxCount'}>{showText()}</div>
            </div>
            <div className='button'>
                <div className={maxNumb ? 'inc' : 'noActiveBtn'}>
                    <UseButton name={'inc'} callBack={Inc}/>
                </div>
                <div className={disableBtn ? 'reset' : 'noActiveBtn'}>
                    <UseButton name={'reset'} callBack={Reset}/>
                </div>
            </div>
            <Settings
                disableSettings={disableSettings}
                onChangeStartValueHandler={onChangeStartValueHandler}
                onChangeMaxValueHandler={onChangeMaxValueHandler}
                onSetSettingsHandler={onSetSettingsHandler}
            />
        </div>


    )
}

export default Counter;