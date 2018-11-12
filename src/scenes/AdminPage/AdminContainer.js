import React from 'react';
import ProductListView from './ProductListView';
import ModalContainer from "../../Modal/Modal";
import {Route} from 'react-router-dom';
import {routes} from "../../routes";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';
import * as productsSelectors from "../../modules/products/productsSelectors";
import * as productOperations from '../../modules/products/productsOperations';


const styles = {
    container:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    listProduct : {
        textAlign: 'left',
        paddingLeft: 20,
        textDecoration: 'none',
        flexWrap: 'wrap',
        alignItems: 'center',
    }
};



class AdminContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
        }
    }


    componentDidMount(){
        this.props.fetchProducts()
    }

    componentDidUpdate(){
        this.props.fetchProducts()
    }


    deleteProduct = (deleteId) => {
        console.log("deleteID", deleteId);
        this.props.deleteProduct(deleteId)
    };

    addProduct = (newProduct) => {
        this.setState({
            showModal: false
        });
        this.props.addProduct(newProduct)

    };

    handleOpenModal = (typeModal) => {
        this.setState({
            showModal: true,
            typeModal,
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


        if (this.state.showModal){
            return <ModalContainer
                handleCloseModal={this.handleCloseModal}
                addProduct={this.addProduct}
                {...this.state}/>
        }


        return(
            <Grid container style={styles.container}>
                <Grid item xs={12} style={styles.listProduct}>


                        <Route
                            exact
                            path={routes.admin}
                            render={
                                () =>
                                    <ProductListView
                                        handleOpenModal={this.handleOpenModal}
                                        deleteProduct={this.deleteProduct}
                                        {...this.props}
                                        {...this.state}/>
                            }
                        />


                </Grid>
            </Grid>
        );
    }
}


const mapStateToProps = (state) => ({
    products: productsSelectors.getProducts(state),
    isLoading: state.products.isLoading,
    isError: !!state.products.error,
    showModal: !!state.adminProducts.showModal,
    error: state.products.error,

});


const mapStateToDispatch = {
    fetchProducts: productOperations.fetchProducts,
    updateProduct: productOperations.updateProducts,
    deleteProduct: productOperations.deleteProduct,
    addProduct: productOperations.addProducts,
};



export default connect(mapStateToProps, mapStateToDispatch)(AdminContainer);