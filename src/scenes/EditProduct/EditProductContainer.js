import {Component} from "react";
import React from "react";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productsOperations from "../../modules/products/productsOperations";
import { connect } from 'react-redux';
import EditProductView from "./EditProductView";
import {routes} from "../../routes";




class EditProductContainer extends Component{
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.props.fetchProducts();

    }



    onSubmit = (e) => {
        e.preventDefault();
        this.props.updateProduct(this.state);
        this.props.history.push(routes.admin);


    };

    onChange = (item) => ({target: {value}}) => {

        if (this.state === null){
            this.setState({
                ...this.props.product
            })
        }

        this.setState({
            [item]: value,
        });

    };


    render(){

        if (!this.props.product){
            return <div>Loading...</div>
        }

        if (this.state){
            return (
                <EditProductView
                    item={this.state}
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                />
            )
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