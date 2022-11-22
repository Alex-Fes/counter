
import {settingsReducer} from "./settingsReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";

type ReducerType = typeof rootReducer;
export type StoreType = ReturnType<ReducerType>

const rootReducer = combineReducers({
    settings: settingsReducer
})


export const store = createStore(rootReducer);

//@ts-ignore
window.store = store

