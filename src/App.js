import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./scenes/Header/Header";
import Footer from "./scenes/Footer/Footer";
import {routes} from "./routes";
import HomeContainer from "./scenes/User/HomeContainer";
import CartContainer from "./scenes/Cart/CartContainer";
import ModalContainer from "./Modal/Modal";
import AdminContainer from "./scenes/AdminPage/AdminContainer";
import ProductContainer from "./scenes/ProductPage/ProductPage";
import EditProductContainer from "./scenes/EditProduct/EditProductContainer";
import Desktop from "./layouts/Desktop";



class ModalSwitch extends React.Component {
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
            <div>
                <Header/>
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
            </div>
        );

    }
}


function App() {
    return (
        <Router>
            <Route component={Desktop} />
        </Router>
    );
}

export default App;
