import React, { Component } from 'react';
import './Desktop.module.css';
import {Route, Switch} from 'react-router-dom';
import {routes} from "../routes";
import HomeContainer from "../scenes/User/HomeContainer";
import s from './Desktop.module.css';
import Header from "../scenes/Header/Header";
import Footer from "../scenes/Footer/Footer";
import AdminContainer from "../scenes/AdminPage/AdminContainer";
import CartContainer from "../scenes/Cart/CartContainer";
import EditProductContainer from "../scenes/EditProduct/EditProductContainer";

import ProductContainer from "../scenes/ProductPage/ProductPage";
import ModalContainer from "../Modal/Modal";

const styles = {
    App: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    main :{

        paddingTop: 40,
        justifyContent: 'center',

    }
};



class Desktop extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }


    }
    previousLocation = this.props.location;

    componentWillUpdate(nextProps) {
        let { location } = this.props;

        if (
            nextProps.history.action !== "POP" &&
            (!location.state || !location.state.modal)
        ) {
            this.previousLocation = this.props.location;
        }
    }


    renderModal = (isModal) => {

        if (isModal && this.previousLocation.pathname === '/'){
            return (
                <Route
                    path={routes.cart}
                    component={() => <ModalContainer typeModal='CART' showModal={true} {...this.props} />}
                />
            );
        }
    };

    render() {
        let { location } = this.props;

        let isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location &&
            this.previousLocation.pathname === '/'
        ); // not initial render



        return (
            <div className={styles.App}>
                <Header/>
                <main style={styles.main}>
                    <Switch location={isModal ? this.previousLocation : location}>
                        <Route
                            exact
                            path={routes.home}
                            component={HomeContainer}
                        />
                        <Route
                            exact
                            path={routes.admin}
                            component={AdminContainer}
                        />


                        <Route
                            path={routes.productPage}
                            component={ProductContainer}
                        />

                        <Route
                            path={routes.adminProduct}
                            component={EditProductContainer}
                        />
                        <Route
                            path={routes.cart}
                            component={CartContainer}
                        />
                    </Switch>
                    {isModal ? this.renderModal(isModal) : null}
                    <Footer/>
                </main>
            </div>
        );

    }
}




export default Desktop;
