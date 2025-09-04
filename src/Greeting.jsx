import React from 'react';

function Greeting({person: { name, age, occupation }})
{
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <p>年齡:{age}  職業:{occupation}</p>
            <p></p>
        </div>
    );
}
export default Greeting