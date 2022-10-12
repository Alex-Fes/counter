type setStartCountACType = ReturnType<typeof setStartCountAC>
type setMaxCountACType = ReturnType<typeof setMaxCountAC>
type changeStatusACType = ReturnType<typeof changeStatusAC>
type setErrorACType = ReturnType<typeof setErrorAC>

type ActionType = setStartCountACType | setMaxCountACType | changeStatusACType | setErrorACType;

export type InitialStateType = {
    startCount: number
    maxCount: number
    isChanged: boolean
    error: boolean
}
let initialState: InitialStateType = {
    startCount: 0,
    maxCount: 5,
    isChanged: false,
    error: false
}

export const settingsReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "SET-START-COUNT":
            return {...state, startCount: action.payload.startCount}
        case "SET-MAX-COUNT":
            return {...state, maxCount: action.payload.maxCount}
        case "SET-IS-CHANGED":
            return {...state, isChanged: action.payload.isChanged}
        case "SET-IS-ERROR":
            return {...state, error: action.payload.error}
        default:
            return state;
    }
}

export const setStartCountAC = (newValue: number) => {
    return {
        type: "SET-START-COUNT",
        payload: {
            startCount: newValue
        }
    } as const
};
export const setMaxCountAC = (newValue: number) => {
    return {
        type: "SET-MAX-COUNT",
        payload: {
            maxCount: newValue
        }
    } as const
};
export const changeStatusAC = (isChanged: boolean) => {
    return {
        type: "SET-IS-CHANGED",
        payload: {
            isChanged: isChanged
        }
    } as const
}
export const setErrorAC = (isError: boolean) => {
    return {
        type: "SET-IS-ERROR",
        payload: {
            error: isError
        }
    } as const
}


























