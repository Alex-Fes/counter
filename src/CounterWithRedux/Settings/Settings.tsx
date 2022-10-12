import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../Redux/redux";
import {changeStatusAC, InitialStateType, setErrorAC, setMaxCountAC, setStartCountAC} from "../Redux/settingsReducer";
import {ChangeEvent, useEffect, useState} from "react";
import s from './Settings.module.css'
import UseButton from "../../Button/UseButton";


export const Settings = () => {
    let state = useSelector<StoreType, InitialStateType>(state => state.settings);

    const [localMaxValue, setLocalmaxValue] = useState(state.maxCount);
    const [localStartValue, setLocalStartValue] = useState(state.startCount);

    const dispatch = useDispatch();

    useEffect(() => {
        if (localMaxValue <= localStartValue) {
            dispatch(setErrorAC(true))
        } else if (localMaxValue < 0 || localStartValue < 0) {
            dispatch(setErrorAC(true))
        } else dispatch(setErrorAC(false))
    }, [localMaxValue, localStartValue]);

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalmaxValue(+e.currentTarget.value)
        if (!state.isChanged) {
            dispatch(changeStatusAC(true))
        }
    }

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(+e.currentTarget.value)
        if (!state.isChanged) {
            dispatch(changeStatusAC(true))
        }
    }

    const setNewValues = () => {
        dispatch(setStartCountAC(localStartValue))
        dispatch(setMaxCountAC(localMaxValue))
        if (state.isChanged) {
            dispatch(changeStatusAC(false))
        }
    }

    const setInputClass = (value: number) => {
        if (localMaxValue <= localStartValue) {
            return s.error
        }
        return value < 0 ? s.error : '';
    }

    return (
        <div className={'inner'}>
            <div className={s.settingWrapper}>
                <div className={s.inputWrapper}>
                    <label htmlFor={'max'}>Max value:</label>
                    <input type="number" id={'max'} value={localMaxValue} onChange={onChangeMaxHandler}
                           className={setInputClass(localMaxValue)}/>
                </div>
                <div className={s.inputWrapper}>
                    <label htmlFor={'min'}>Max value:</label>
                    <input type="number" id={'min'} value={localStartValue} onChange={onChangeStartHandler}
                           className={setInputClass(localStartValue)}/>
                </div>
                <div className={'buttons_wrapper'}>
                    <UseButton name={'Set'} callBack={setNewValues} btnDisabled={state.error || !state.isChanged}/>
                </div>
            </div>
        </div>
    )


}