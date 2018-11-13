import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {routes} from "../routes";
import HomeContainer from "../scenes/User/HomeContainer";
import Header from "../scenes/Header/Header";
import Footer from "../scenes/Footer/Footer";
import AdminContainer from "../scenes/AdminPage/AdminContainer";
import CartContainer from "../scenes/Cart/CartContainer";
import EditProductContainer from "../scenes/EditProduct/EditProductContainer";
import ProductContainer from "../scenes/ProductPage/ProductPage";
import LoginContainer from '../scenes/Login/LoginPage';
import ModalContainer from "../Modal/Modal";
import * as Api from '../api/Api';
import {connect} from "react-redux";


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


function ProtectedRoute(props){
    console.log(props.token);
    debugger;
    if (!props.token){
        return <Redirect to="/login"/>;
    }
    return <Route {...props} />;
}



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
        );

        return (
            <div className={styles.App}>
                <Header location={location} />
                <main style={styles.main}>
                    <Switch location={isModal ? this.previousLocation : location}>
                        <Route
                            exact
                            path={routes.home}
                            component={HomeContainer}
                        />
                        <ProtectedRoute
                            exact
                            path={routes.admin}
                            {...this.props}
                            component={AdminContainer}
                        />
                        <Route
                            path={routes.productPage}
                            component={ProductContainer}
                        />
                        <ProtectedRoute
                            path={routes.adminProduct}

                            component={EditProductContainer}
                        />
                        <Route
                            path={routes.cart}
                            component={CartContainer}
                        />
                        <Route
                            path={routes.login}
                            component={LoginContainer}
                        />
                    </Switch>
                    {isModal ? this.renderModal(isModal) : null}
                    <Footer/>
                </main>
            </div>
        );

    }
}


const mapStateToProps = (state) => ({
    token: state.app.token,
});

export default connect(mapStateToProps)(Desktop);
