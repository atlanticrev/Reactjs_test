import React from 'react';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <label>
                <input
                    type="search"
                    placeholder="Search..."
                    onChange={props.onInputChange}
                    value={props.value}
                />
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={props.inStockOnly}
                    onChange={props.onCheckboxChange}
                />
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
        <tr className={!props.product.stocked ? 'not-stocked' : ''}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}

function EntryCategory(props) {
    return (
        <tr className="category-name">
            <td colSpan="2">{props.category}</td>
        </tr>
    );
}

export default class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchVal: '',
            inStockOnly: props.inStockOnly
        };
    }

    handleSearchChange = (e) => {
        this.setState({searchVal: e.target.value});
    };

    handleCheckboxChange = () => {
        this.setState({inStockOnly: !this.state.inStockOnly});
    };

    generateRows () {
        this.categories = [];
        this.dataByCategories = {};
        this.props.data.forEach(entry =>
            this.categories.indexOf(entry.category) === -1 && this.categories.push(entry.category)
        );
        this.categories.forEach(category =>
            this.dataByCategories[category] = this.props.data.filter(entry => category === entry.category)
        );
        let row = [];
        for (let category of Object.keys(this.dataByCategories)) {
                const entries = this.dataByCategories[category]
                    .filter(product => product.name.indexOf(this.state.searchVal) !== -1)
                    .map(product => {
                        return this.state.inStockOnly
                            ? product.stocked && <TableEntry key={product.name} product={product}/>
                            : <TableEntry key={product.name} product={product}/>
                    });
                if (entries.length) {
                    row.push(<EntryCategory key={category} category={category}/>);
                    entries.forEach(entry => row.push(entry));
                }
        }
        return row;
    }

    render() {
        return (
            <div className="product-table">
                <SearchBar
                    value={this.state.searchVal}
                    inStockOnly={this.state.inStockOnly}
                    onInputChange={this.handleSearchChange}
                    onCheckboxChange={this.handleCheckboxChange}
                />
                <Table>
                    {this.generateRows()}
                </Table>
            </div>
        );
    }
}