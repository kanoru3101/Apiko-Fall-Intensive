import {Component} from "react";
import React from "react";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productsOperations from "../../modules/products/productsOperations";
import { connect } from 'react-redux';
import EditProductView from "./EditProductView";




class EditProductContainer extends Component{


    componentDidMount(){
        this.props.fetchProducts();
    }

    updateProducts = (newProduct) => {
        this.props.updateProduct(newProduct);
    };

    onSubmit = (e) => {
        //e.preventDefault();
        debugger;
        console.log(e);
    };

    onChange = (item) => ({target}) => {

        console.log(target);


    };



    render(){


        if (!this.props.product){
            return <div>Loading...</div>
        }

        else {

            return (
                <EditProductView
                    item={this.props.product}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                />
            )
        }

    }
}

const mapStateToProps = (state, props) => ({
    products: productsSelectors.getProducts(state),
    product: productsSelectors.getProduct(state, props.match.params.id),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: state.products.error,

});


const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
    updateProduct: productsOperations.updateProducts,

};




export default connect(mapStateToProps, mapStateToDispatch)(EditProductContainer);