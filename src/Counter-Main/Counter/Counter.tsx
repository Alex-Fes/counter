import s from './Counter.module.css'
import UseButton from "../../Button/UseButton";
import {Display} from "../Display/Display";


type CounterPropsType = {
    numb: number
    inc: () => void
    reset: () => void
    minValue: number
    maxValue: number
    minNumber: number
    maxNumber: number
    disableBtn: boolean
    error: boolean
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={s.main}>
            <div className={s.countDsp}>
                <Display
                title={props.numb}
                numb={props.numb}
                disabled={props.disableBtn}
                maxValue={props.maxValue}
                minValue={props.minValue}
                maxNumber={props.maxNumber}
                minNumber={props.minNumber}
                error={props.error}
                />
            </div>
            <div className={s.countBtnField}>
                <UseButton
                    name={'Inc'}
                    callBack={props.inc}
                    btnDisabled={props.disableBtn}
                    maxNumber={props.maxValue}
                    numb={props.numb}
                />
                <UseButton
                    name={'Reset'}
                    callBack={props.reset}/>

            </div>
        </div>
    )
}