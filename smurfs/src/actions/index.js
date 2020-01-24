//actions.js
import axios from 'axios';

export const getSmurfs = () => dispatch =>
{
    dispatch({type: 'GET_SMURFS'});

    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        dispatch({type: 'SUCCESS', payload: res.data})
    })
    .catch(err => dispatch({type: 'ERROR', payload: err.response}));
}

export const addSmurfs = (name, age, height) => dispatch =>
{
    dispatch({type: 'ADD_SMURFS'})

    axios.post('http://localhost:3333/smurfs', {
        name: name,
        age: age,
        height: height,
    })
    .then(res =>{
        dispatch({type: 'SUCCESS', payload: res.data});
    })
    .catch(err => dispatch({type: 'ERROR', payload: err.response}));
}