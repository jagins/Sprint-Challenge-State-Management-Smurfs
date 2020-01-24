import React from 'react';

function Smurf(props)
{
    const {name, age, height} = props;
    return (
        <div className='smurf'>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default Smurf;