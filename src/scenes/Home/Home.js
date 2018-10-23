import React from 'react';
import s from "../AdminPage/AdminPage.module.css";
import {Route} from "react-router-dom";
import ProductLink from "../../components/ProductLink/ProductLink";
import {routes} from "../../routes";
import {ProductContainer} from "../../components/ProductComponent/ProductComponent";
import {ProductPage} from "../ProductPage/ProductPage";



export const Home = ({productList, match}) => (
    <div>
        <Route

            path={match.path}
            render={() => productList.map(({title, id}) =>
                <ProductLink key={id} id={id} title={title} typeShow={'user'}/>)}
        />



    </div>
);

