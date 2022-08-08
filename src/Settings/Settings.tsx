import React, {ChangeEvent} from "react";
import './Settings.module.css'
import UseButton from "../Button/UseButton";

export type SettingsPropsType = {
    onChangeStartValueHandler: (value: number) => void
    onChangeMaxValueHandler: (value: number) => void
    onSetSettingsHandler: () => void
    disableSettings: boolean
}


const Settings = (props: SettingsPropsType) => {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeMaxValueHandler(e.currentTarget.valueAsNumber)
    }
    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeStartValueHandler(e.currentTarget.valueAsNumber)
    }

    return <div className='main'>
        <div className='setting'>
            <div className='value'>

                max value:
                <input type='number' onChange={onChangeMaxValueHandler}/>
            </div>
            <div className='value'>
                start value:
                <input type='number' className='error' onChange={onChangeStartValueHandler}/>
            </div>
        </div>
        <div aria-disabled={!props.disableSettings}>
            <UseButton name={'set'} callBack={props.onSetSettingsHandler}/>
        </div>
    </div>
}
export default Settings;












