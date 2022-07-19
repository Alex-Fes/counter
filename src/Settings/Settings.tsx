import React, {useState} from "react";
import './Settings.module.css'
import UseButton from "../Button/UseButton";



const Settings = () => {
    const [value, setValue] = useState(0);




const setSettings = () => {

}
const onChangeValueHandler = () => {

}

    return<div className='main'>
        <div className='setting'>
            <div className='value'>

                <UseButton name={'max value'} callBack={()=>{}} />
                <input type='number' onChange={onChangeValueHandler}/>
            </div>
            <div className='value'>

                <UseButton name={'start value'} callBack={()=>{}} />
                <input type='number' onChange={onChangeValueHandler}/>
            </div>
        </div>
        <div className='button'>
            <UseButton name={'set'} callBack={setSettings} />
        </div>
    </div>
}
export default Settings;












