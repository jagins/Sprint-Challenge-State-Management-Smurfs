//reducers.js

const initalState = {
    isLoading: false,
    smurfArray: null,
    error: '',
    begin: false
};

export const reducer = (state = initalState, action) =>
{
    switch(action.type)
    {
        case 'GET_SMURFS':
            return {
                ...state,
                isLoading: true,
                begin: true
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
        case 'ADD_SMURFS':
            return{
                ...state,
                isLoading: true
            }
        default: 
            return state;
    }
}