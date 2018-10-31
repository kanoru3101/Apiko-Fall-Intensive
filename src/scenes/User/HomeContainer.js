import React from 'react';
import {Route, Switch} from "react-router-dom";
import ProductListView from "./UserProductListView";
import * as Api from "../../api/Api";
import {routes} from "../../routes";
import {ProductPage} from "../../components/ProductPage/ProductPage";



class HomeContainer extends React.Component{

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
        const [ productData ] = await HomeContainer.fetchData();
        this.setState({
            products: productData.data,
            loading: false
        });

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

        if (this.state.loading){
            return <div>Loading...</div>
        }

        return(
            <Switch>
                <Route
                    exact
                    path={routes.home}
                    render={() =>
                        <ProductListView {...this.state}/>
                    }

                />

                <Route
                    path={routes.productPage}
                    render={() =>
                        <ProductPage
                            {...this.state}
                            {...this.props}
                        />}
                />
            </Switch>

        );
    }
}

HomeContainer.fetchData = (params) => Promise.all([
    Api.products.fetchProducts(),
]);



export default HomeContainer;
