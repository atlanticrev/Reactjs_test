import React from 'react';

// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import Form from './components/Form';
// import List from './components/List';
// import LoginController from './components/LoginController';
// import Calculator from './components/TemperatureCalculator';
// import SignUpDialog from './components/Dialog';
import ProductTable from './components/ProductTable';

import './App.css';

const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

// const data = [
//     {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
//     {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
//     {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
//     {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
//     {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
//     {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'}
// ];

function App() {
    return (
        <ProductTable
            data={data}
            inStockOnly={false}
        />
    );
}

export default App;
