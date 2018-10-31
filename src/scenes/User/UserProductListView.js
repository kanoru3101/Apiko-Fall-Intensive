import React from 'react';
import Grid from '@material-ui/core/Grid';
import UserProductLink from "../../components/ProductLink/UserProductLink";


const ProductListView = ({
    products,
}) => (
    <Grid container spacing={16} style={{maxWidth: '100%', margin: 0}}>
        <Grid item xs={12} style={{paddingBottom: 10, justifyContent: 'center'}}>
            <Grid container spacing={16}>

                {products.map(({title, id, image, description, price}) =>
                    <UserProductLink
                        key={id}
                        id={id}
                        title={title}
                        image={image}
                        description={description}
                        price={price}
                        typeShow={'user'}
                    />)
                }

            </Grid>
        </Grid>
    </Grid>

);

export default ProductListView;