import React from 'react';
import {arrayOf} from 'prop-types';
import {productPropTypes} from "../../common/propTypes";
import ProductLink from "../../components/ProductLink/ProductLink";
import {Route, Switch} from "react-router-dom";
import {routes} from "../../routes";
import {ProductContainer} from "../../components/ProductComponent/ProductComponent";
import s from './AdminPage.module.css';



const AdminPage = ({productList, match, updateProduct, deleteProduct, addProduct}) =>(
    <div className={s.container}>

        <div>
            <div>
                <button onClick={() => addProduct}>Add</button>
            </div>
            <div className={s.list} >
                <Route
                    exact
                    path={match.path}
                    render={() => productList.map(({title, id}) => <ProductLink key={id} id={id} title={title} typeShow={'admin'}/>)}
                />
            </div>
            <div>
                <Route
                    path={routes.adminProduct}
                    render={
                        (renderProps) =>
                            <ProductContainer
                                productList={productList}
                                updateProduct={updateProduct}
                                deleteProduct={deleteProduct}
                                {...renderProps}/>}
                />
            </div>
        </div>

    </div>
);


AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};


export default AdminPage;