import {useEffect, useState} from "react";
import s from './Display.module.css'

type TitleType = string | number
type DisplayPropsType = {
    title: TitleType
    numb: number
    disabled: boolean
    maxValue: number
    minValue: number
    maxNumber: number
    minNumber: number
    error: boolean
}

export function Display(props: DisplayPropsType) {
//states
    const [title, setTitle] = useState<TitleType>('')
    //const [startTitle, setStartTitle] = useState<string>('Enter values and press "set"')

    let colorForText = s.normal;

    props.error ? colorForText = s.normal : colorForText = s.maxNum;

    //UseEffects
    useEffect(() => {
        setTitle('Enter values and press "set"')
    }, [props.minValue !== props.minNumber ||
    props.maxValue !== props.maxNumber])

    useEffect(() => {
        setTitle(props.numb)
    }, [props.maxValue])

    useEffect(() => {
        setTitle(props.numb)
    }, [props.numb])

    useEffect(() => {
        props.minNumber >= props.maxNumber ?
            setTitle('Incorrect value') : setTitle('Enter values and press "set"')
        if (props.minNumber < 0 || props.maxNumber < 0) setTitle('Incorrect value')
    }, [props.minNumber, props.maxNumber])

return (
    <div className={`${s.main} ${colorForText}`}>
        <h1>{title}</h1>
    </div>
)

}




