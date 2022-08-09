import React, {ChangeEvent, useEffect, useState} from "react";
import s from './Settings.module.css'
import UseButton from "../../Button/UseButton";

export type SettingsPropsType = {
    maxValue: number
    minValue: number
    setMaxValue: (value: number) => void
    setMinValue: (value: number) => void
    setMinNumber: (value: number) => void
    setMaxNumber: (value: number) => void
    setNumb: (value: number) => void

    setDisableBtn: (value: boolean) => void
}


const Settings = (props: SettingsPropsType) => {

    const [localMinValue, setlocalMinValue] = useState<number>(0);
    const [localMaxValue, setlocalMaxValue] = useState<number>(0);
    const [localBtnDisabled, setLocalBtnDisabled] = useState<boolean>(false)
    const [belowZero, setBelowZero] = useState<boolean>(false)
    const zeroConditionStyle = {
        backgroundColor: belowZero ? '#D16161' : 'white',
        border: belowZero ? 'red 3px solid' : '',
        borderRadius: '5px',
    }

    useEffect(() => {//turn off 'set' when localMinValue > localMaxValue
        if (localMaxValue <= localMinValue) {
            setLocalBtnDisabled(true)
        } else setLocalBtnDisabled(false)
    }, [localMinValue, localMaxValue])
    useEffect(() => {// turn off 'set' when values in state and inputs are same
        localMaxValue === props.maxValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
        localMinValue === props.minValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
    }, [props.maxValue, props.minValue])
    useEffect(() => {//turn off 'set' when values in inputs below 0
        if (localMinValue < 0 || localMaxValue < 0) {
            setLocalBtnDisabled(true)
            setBelowZero(true)
        } else {
            setBelowZero(false)
        }
    }, [localMinValue, localMaxValue])

    //Input value set in local state and send up value
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setlocalMaxValue(e.currentTarget.valueAsNumber)
        props.setMaxNumber(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setlocalMinValue(e.currentTarget.valueAsNumber)
        props.setMinNumber(e.currentTarget.valueAsNumber)
    }

    //Set button callback
    const setButtonCallBack = () => {
        props.setMaxValue(localMaxValue)
        props.setMinValue(localMinValue)
        props.setNumb(localMinValue)
        props.setDisableBtn(false)
    }

    return <div className={s.main}>
        <div className={s.inputsContainer}>
            <div className={s.inputContainer}>
                <span>Max value:</span>
                <input
                    style={zeroConditionStyle}
                    value={localMaxValue}
                    className={s.input}
                    type='number'
                    onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.inputContainer}>
                <span>Start value:</span>
                <input
                    value={localMinValue}
                    style={zeroConditionStyle}
                    type='number'
                    className={s.input}
                    onChange={onChangeStartValueHandler}/>
            </div>
        </div>
        <div className={s.buttonContainer}>
            <UseButton
                name={'set'}
                callBack={setButtonCallBack}
                btnDisabled={localBtnDisabled}
            />
        </div>
    </div>
}
export default Settings;












