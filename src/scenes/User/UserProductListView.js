import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserProductLink from "../../components/ProductLink/UserProductLink";


const ProductListView = ({
    products,
    onAddToCart,
}) => (
    <Grid container spacing={16} style={{maxWidth: '100%', margin: 0}}>

        <Grid item xs={12} style={{paddingBottom: 10, justifyContent: 'center'}}>
            <Grid container spacing={16}>
                {products.map((item) =>
                    <UserProductLink
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        item={item}
                        onAddToCart={onAddToCart}
                    />)
                }

            </Grid>
        </Grid>
    </Grid>

);

export default ProductListView;