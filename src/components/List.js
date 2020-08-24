import React from 'react';

export default function List (props) {
    let itemId = 0;
    const processedList = props.values.map(item => <li key={(++itemId).toString()}>{item}</li>);
    return (
        <ul>{processedList}</ul>
    );
}