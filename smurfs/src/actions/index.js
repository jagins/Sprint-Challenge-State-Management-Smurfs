//actions.js
import axios from 'axios';

export const getSmurfs = () => dispatch =>
{
    dispatch({type: 'GET_SMURFS'});

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: 'SUCCESS', payload: res.data})
    })
    .catch(err => {
        dispatch({type: 'ERROR'})
    })
}