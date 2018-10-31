import React, {Component} from 'react';
import {routes} from "../../routes";
import ProductPageView from "./ProductPageView";



export class ProductPage extends Component {
    constructor(props) {
        super(props);
        const {match: {params}, products} = props;
        const product = products.find(({id}) => params.id === id);
        this.state = {
            ...product
        };
    }


    addCard = () => {

    };

    backToAllProducts = () => {
        this.props.history.push(routes.home);
    };

    render(){
        return (
                <ProductPageView
                    backToAllProducts={this.backToAllProducts}
                    addCard={this.addCard}
                    {...this.state}
                />
        );
    }
}







