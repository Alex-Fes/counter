import {useSelector} from "react-redux";
import {StoreType} from "../Redux/redux";
import {InitialStateType} from "../Redux/settingsReducer";
import {useEffect, useState} from "react";
import UseButton from "../../Button/UseButton";
import {Display} from "../Display/Display";


export const CounterWithRedux = () => {
    let state = useSelector<StoreType, InitialStateType>(state => state.settings);

    const [currentCount, setCurrentCount] = useState<number>(state.startCount);

    useEffect(()=> {
        setCurrentCount(state.startCount)
    }, [state.startCount]);

    const buttonIncHandler = () => {
        if (currentCount < state.maxCount) {
            setCurrentCount(currentCount +1)
        }
    };

    const buttonResetHandler = () => {
        setCurrentCount(state.startCount)
    }
    return(
        <div className={'inner'}>
            <Display count={currentCount} maxScore={state.maxCount} isChanged={state.isChanged} error={state.error} />
            <div className={'buttons_wrapper'}>
                <UseButton name={'Inc'} callBack={buttonIncHandler} btnDisabled={state.isChanged || currentCount ===state.maxCount}/>
                <UseButton name={'Reset'} callBack={buttonResetHandler} btnDisabled={state.isChanged || currentCount ===state.startCount}/>
            </div>
         </div>
    )
}




