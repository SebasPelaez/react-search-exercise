import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            <input type="submit" value="Buscar" />
          </form>
        </div>
        <div className="product-list">
          {this.state.products.map((product, index) => 
            <div className="card product">
              <div className="card-image">
                  <figure className="image is-128x128 is-centered">
                      <img
                          src={product.thumbnail}
                          alt="Product" />
                  </figure>
              </div>
              <div className="card-content">
                  <div className="media-content">
                      <p className="title is-5">{product.title}</p>
                  </div>
                  <table className="table is-narrow is-fullwidth">
                      <tbody>
                          <tr>
                              <td className="has-text-bold">Precio: {product.price}$</td>
                          </tr>
                          <tr>
                              <td className="has-text-bold">Disponibles: {product.available_quantity}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
