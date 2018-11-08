import React from 'react';
import { connect } from 'react-redux';
import * as productsSelectors from '../../modules/products/productsSelectors';

import ProductPageView from "./ProductPageView";

function ProductContainer({product}) {
    if (!product){
        return null
    }
    return(
        <div>

            <ProductPageView item={product}/>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    product: productsSelectors.getProduct(state, props.match.params.id)
});

export default connect(mapStateToProps)(ProductContainer);