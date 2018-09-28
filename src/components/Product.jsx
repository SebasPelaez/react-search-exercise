import React, { Component } from 'react';
import './product.css';

class Product extends Component {

    constructor(props) {
        super(props)
        this.state = { attributes: [] }
    }

    componentDidMount() {
        const requestProductAwait = async () => {
            const response = await fetch(this.props.url)
            const products_attrs = await response.json()
            this.setState({ attributes: products_attrs })            
        }
        requestProductAwait()
    }

    render() {
        return (
            <div className="card product">

                <div className="card-image">
                    <figure className="image is-128x128 is-centered">
                        <img
                            src=""
                            alt="Product" />
                    </figure>
                </div>

                <div className="card-content">
                    <div className="media-content">
                        <p className="title is-4">{this.state.attributes.id}</p>
                    </div>

                    <table className="table is-narrow is-fullwidth">
                        <tbody>
                            <tr>
                                <td className="has-text-bold">{this.state.attributes.title}</td>
                            </tr>
                            <tr>
                                <td className="has-text-bold">{this.state.attributes.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Product;