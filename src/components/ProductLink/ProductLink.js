import React from 'react';
import {string, number} from 'prop-types';
import {Link} from 'react-router-dom';
import {formatRoute} from 'react-router-named-routes';
import {routes} from "../../routes";
import s from './ProductLink.module.css';

const ProductLink = ({id, title, typeShow}) => {
    if (typeShow === 'admin'){
        return(
            <div className={s.item}>
                <Link to={formatRoute(routes.adminProduct, {id})}>{title}</Link>
            </div>
        );
    }
    if (typeShow === 'user'){
        return(
            <div className={s.item}>
                <Link to={formatRoute(routes.productPage, {id})}>{title}</Link>
                {console.log()}
            </div>
        );
    }
}



ProductLink.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    typeShow: string,
};

export default ProductLink;