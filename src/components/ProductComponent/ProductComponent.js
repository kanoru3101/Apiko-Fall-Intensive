import {Component} from "react";
import {routes} from "../../routes";
import React from "react";
import {ProductComponentView} from "./ProductComponentView";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productOperations from "../../modules/products/productsOperations";
import connect from "react-redux/es/connect/connect";

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
        this.props.updateProducts(this.state);
        this.props.history.push(routes.admin);
    };



    render(){

        console.log(this.props);
        debugger;

        return <ProductComponentView
            {...this.state}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
        />
    }
}

const mapStateToProps = (state) => ({
    products: productsSelectors.getProducts(state),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: state.products.error,

});


const mapStateToDispatch = {
    updateProduct: productOperations.updateProducts,
};




export default connect(mapStateToProps, mapStateToDispatch)(ProductContainer);