import React from 'react';

const FruitList = (props) => (
    <ul>
        {props.fruits.map((fruit ,i ) => <li key={i}>{fruit}</li>)}
    </ul>
)

export default FruitList;