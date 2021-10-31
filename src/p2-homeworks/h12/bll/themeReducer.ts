

export type InitStateType = typeof initState

const initState = {
    theme: 'red' as string
};


export const themeReducer = (state:InitStateType = initState, action: ChangeThemeC): InitStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEMES": {
            return {...state, theme: action.value};
        }
        default:
            return state;
    }
};

export type ChangeThemeC = {
    type: string
    value: string
}

export const changeThemeC = (value: string): ChangeThemeC => {
    return {
        type: 'CHANGE-THEMES',
        value
    }

}; // fix any