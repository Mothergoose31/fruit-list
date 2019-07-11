import React from 'react';

const Filter = props => (
    
    <input type = "text" 
            name = 'filter'
            placeholder = "filter the fruit"
            vaule = {props.vaule}
            onChange = {props.onChange}/>

);

export default Filter;