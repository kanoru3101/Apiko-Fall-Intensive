import React from 'react';
import { connect } from 'react-redux';
import * as productsActions from '../../modules/products/productsActions';
import {Route, Switch} from "react-router-dom";
import ProductListView from "./UserProductListView";
import * as Api from "../../api/Api";
import {routes} from "../../routes";
import {ProductPage} from "../../components/ProductPage/ProductPage";



class HomeContainer extends React.Component{

    async componentDidMount(){
        const productData = await Api.products.fetchProducts();

        this.props.fetchProducts(productData.data)
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

        if (this.props.products.length === 0){
            return <div>Loading...</div>
        }

        return(
            <Switch>
                <Route
                    exact
                    path={routes.home}
                    render={() =>
                        <ProductListView {...this.props}/>
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
});


const mapStateToDispatch = {
  fetchProducts: productsActions.fetchProducts,
};

export default connect(
    mapStateToProps,
    mapStateToDispatch,
    )(HomeContainer);
