import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: { type: string, payload: string | number }): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up') {
                return [...state.sort((a,b)=>b.age-a.age)]
            }else if (action.payload === 'down') {
                return [...state.sort((a,b)=>a.age-b.age)]
            }
            return state
        }
        case 'check': {
            return [...state.filter((u) => u.age >= action.payload)]
        }
        default:
            return state
    }
}