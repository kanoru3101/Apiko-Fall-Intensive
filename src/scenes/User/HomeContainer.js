import React from 'react';
import { connect } from 'react-redux';
import * as productsOperations from '../../modules/products/productsOperations';
import * as cartActions from '../../modules/cart/cartActions';
import {Route, Switch} from "react-router-dom";
import ProductListView from "./UserProductListView";

import {routes} from "../../routes";
import {ProductPage} from "../../components/ProductPage/ProductPage";
import ProductLink from "../../components/ProductLink/UserProductLink";



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
            <Switch>
                <Route
                    exact
                    path={routes.home}
                    render={() =>
                        <ProductListView
                            products={this.props.products}
                            onAddToCart={this.props.addToCart}
                        />
                    }

                />

                <Route
                    path={routes.productPage}
                    render={() =>
                        <ProductPage
                            {...this.props}
                        />}
                />
            </Switch>

        );
    }
}



const mapStateToProps = (state) => ({
    products: state.products.products,
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
