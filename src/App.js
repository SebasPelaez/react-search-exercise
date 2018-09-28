import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      searchValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit(event) {        
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${this.state.searchValue}&limit=20`)
      .then(response => response.json())
      .then(items => this.setState({ products: items.results }))
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mercado Libre Products with React</h1>
        </header>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              ¿Qué deseas buscar?:
            <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="product-list">
          {this.state.products.map((product, index) => <Product key={index} url={product} />)}
        </div>
      </div>
    );
  }
}

export default App;
