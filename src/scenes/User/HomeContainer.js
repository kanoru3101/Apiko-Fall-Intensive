import React from 'react';
import { connect } from 'react-redux';
import * as productsOperations from '../../modules/products/productsOperations';
import * as productsSelectors from '../../modules/products/productsSelectors';
import * as cartActions from '../../modules/cart/cartActions';

import ProductListView from "./UserProductListView";
import Header from "../Header/Header";




class HomeContainer extends React.Component{

    componentDidMount(){
        this.props.fetchProducts()
    }


    handleOpenModal = (typeModal) => {
        this.setState({
            showModal: true,
            typeModal
        });
    };


    handleCloseModal = () => {
        this.setState({ showModal: false });
    };



    render(){

        if (this.props.isLoading){
            return <div>Loading...</div>
        }

        if (this.props.isError){
            return (
                <React.Fragment>
                    <h1>Error....</h1>
                    <p>{this.props.error}</p>
                </React.Fragment>);
        }

        return(
            <div>

                <ProductListView
                    products={this.props.products}
                    onAddToCart={this.props.addToCart}
                />
            </div>

        );
    }
}



const mapStateToProps = (state, props) => ({
    products: productsSelectors.getProducts(state),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    error: state.products.error,
});


const mapStateToDispatch = {
    fetchProducts: productsOperations.fetchProducts,
    addToCart: cartActions.add,
};

export default connect(
    mapStateToProps,
    mapStateToDispatch,
    )(HomeContainer);
