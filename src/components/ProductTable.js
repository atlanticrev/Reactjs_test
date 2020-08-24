import React from 'react';

const data = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function SearchBar(props) {
    return (
        <div className="search-bar">
            <label>
                <input type="search" placeholder="Search..." onChange={props.onChange}/>
            </label>
            <label>
                <input type="checkbox"/>
                Only show products in stock
            </label>
        </div>
    );
}

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    );
}

function TableEntry(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    );
}

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchVal: ''};
    }

    handleSearchChange = (e) => {
        this.setState({searchVal: e.target.value});
    }

    render() {
        return (
            <div className="product-table">
                <SearchBar
                    value={this.state.searchVal}
                    onChange={this.handleSearchChange}
                />
                <Table>
                    {data.map(entry => <TableEntry key={[entry.name, entry.price].join().toLocaleLowerCase()} name={entry.name} price={entry.price}/>)}
                </Table>
            </div>
        );
    }
}