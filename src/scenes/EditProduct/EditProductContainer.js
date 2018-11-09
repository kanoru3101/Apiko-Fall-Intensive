import {Component} from "react";
import React from "react";
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productsOperations from "../../modules/products/productsOperations";
import { connect } from 'react-redux';
import EditProductView from "./EditProductView";




class EditProductContainer extends Component{
    constructor(props){
        super(props);
        this.state ={
            id: this.props.match.params.id,
            title: '',
            description: '',
            image: '',
            price: '',
        }
    }

    componentDidMount(){
        this.props.fetchProducts();

    }

    updateProducts = (newProduct) => {
        this.props.updateProduct(newProduct);
    };

    onSubmit = (e) => {
        //e.preventDefault();
        debugger;

    };

    onChange = (item) => ({target: value}) => {
        debugger;
        console.log();
        console.log(this.state);
        this.setState({
            title: this.state.title === '' ? this.props.product.title : this.state.title,
            description: this.state.description === '' ? this.props.product.description : this.state.description,
            image: this.state.image === '' ? this.props.product.image : this.state.image,
            price: this.state.price === '' ? this.props.product.price : this.state.price,
        })
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