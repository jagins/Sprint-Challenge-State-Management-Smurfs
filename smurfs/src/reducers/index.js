//reducers.js

const initalState = {
    isLoading: false,
    smurfArray: null,
    error: ''
};

export const reducer = (state = initalState, action) =>
{
    switch(action.type)
    {
        case 'GET_SMURFS':
            return {
                ...state,
                isLoading: true
            }
        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                smurfArray: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}