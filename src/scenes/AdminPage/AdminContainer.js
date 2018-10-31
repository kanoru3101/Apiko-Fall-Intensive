import React from 'react';
import ProductListView from './ProductListView';
import * as Api from '../../api/Api';
import {ModalContainer} from "../../Modal/Modal";
import {Route, Switch} from 'react-router-dom';
import {routes} from "../../routes";
import ProductContainer from "../../components/ProductComponent/ProductComponent";
import Grid from "@material-ui/core/Grid";
import s from "./AdminPage.module.css";





class AdminContainer extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            products: [],
            loading: true,
            showModal: false,
            typeModal: null
        };
    }

    async componentDidMount(){
        const [ productData ] = await AdminContainer.fetchData();

        this.setState({
            products: productData.data,
            loading: false
        });

    }

    updateProductForApi = (newProduct, oldProduct) => {
        let updateData = {}; //object with editable fields
        for (let item in newProduct){
            if (newProduct[item] !== oldProduct[item]) updateData[item] = newProduct[item]
        }
        Api.products.updateProduct(newProduct.id, updateData);
    };

    updateProduct = (newProduct) => (
        this.setState({
            products: this.state.products.map((oldProduct) => {
                if (oldProduct.id === newProduct.id) {
                    this.updateProductForApi(newProduct, oldProduct);
                    return newProduct;
                }
                return oldProduct;
            }),
        })

    );


    deleteProduct = (deleteId) => (
        this.setState({
            products: this.state.products.filter((oldProduct) => {
                if (oldProduct.id === deleteId){
                    Api.products.deleteProduct(deleteId);
                    return false;
                }
                return true
            }).map((oldProduct) => {return oldProduct})
        })
    );

    addProduct = (newProduct) => {

        this.setState({
            showModal: false
        });
        Api.products.setProduct(newProduct)

    };

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

        if (this.state.loading){
            return <div>Loading...</div>
        }

        if (this.state.showModal){
            return <ModalContainer
                handleCloseModal={this.handleCloseModal}
                addProduct={this.addProduct}
                {...this.state}/>
        }
        return(
            <Grid container className={s.container}>
                <Grid item xs={12} className={s.listProduct}>
                    <Switch>
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
                        <Route
                            path={routes.adminProduct}
                            render={
                                (renderProps) =>
                                    <ProductContainer
                                        updateProduct={this.updateProduct}
                                        {...this.state}
                                        {...renderProps}/>}
                        />
                    </Switch>
                </Grid>
            </Grid>
        );
    }
}

AdminContainer.fetchData = () => Promise.all([
    Api.products.fetchProducts(),
]);



export default AdminContainer;