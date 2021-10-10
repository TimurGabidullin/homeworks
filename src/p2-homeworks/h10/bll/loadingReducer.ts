
export type LoadingACType={
    type:'SET_LOADING'
}

export type InitStateType=typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state:InitStateType = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {

            return {...state, isLoading: !state.isLoading}

        }
        default:
            return state
    }
}

export const loadingAC = ():LoadingACType => ({type:'SET_LOADING'})

// fix any