import {Component} from "react";
import {routes} from "../../routes";
import React from "react";
import {ProductComponentView} from "./ProductComponentView";

 class ProductContainer extends Component{
    constructor(props){
        super(props);
        const { match: {params}, products } = props;
        const product = products.find(({id}) => params.id === id);
        this.state = {
            ...product
        };
    }

    onChange = (item) => ({target: {value}}) => {
        this.setState({
            [item]: value,
        })
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);
    };



    render(){
        return <ProductComponentView
            {...this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
        />
    }
}

export default ProductContainer;