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
import Modal from 'react-modal';




class Desktop extends Component {


    render() {



        return (
          <div className={s.App}>
             <Route component={Header}/>
              <main className={s.main}>
                  <Switch>
                      <Route
                          exact
                          path={routes.home}
                          component={HomeContainer}
                      />
                      <Route
                          strict
                          path={routes.admin}
                          component={AdminContainer}
                      />
                      <Route
                          path={routes.productPage}
                          component={HomeContainer}
                      />

                      <Route
                          path={routes.cart}
                          component={CartContainer}
                      />
                  </Switch>

              </main>
            <Route component={Footer}/>
          </div>
        );
    }
}


export default Desktop;
