import React, { useState } from 'react';

function Form(props) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const {addSmurfs, isLoading} = props;

    const changeName = e => {
        setName(e.target.value);
}

const changeAge = e => {
    setAge(e.target.value);
}

const changeHeight = e =>
{
    setHeight(e.target.value);
}

const handleSubmit = () => {
   addSmurfs(name, age, height);
   setName('');
   setAge('');
   setHeight('');

}
return (
    <div className='form-group'>
        <input type='text' 
            placeholder='name' 
            value={name}
            onChange={changeName}>
        </input>
        <input type='text' 
            placeholder='age' 
            value={age} 
            onChange={changeAge}>
        </input>
        <input type='text' 
            placeholder='height' 
            value={height} 
            onChange={changeHeight}>
        </input>
        {!isLoading ? 
            <button onClick={handleSubmit}>Add</button> 
            :
            <button disabled>Adding...</button>}
    </div>
);
}

export default Form;