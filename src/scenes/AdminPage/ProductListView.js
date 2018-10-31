import React from 'react';
import ProductLink from "../../components/ProductLink/AdminProductLink";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button/Button";
import Grid from '@material-ui/core/Grid';

const ADMIN = "ADMIN";
const ADD_PRODUCT = "ADD_PRODUCT";




const ProductListView = ({
  products,
  handleOpenModal,
  updateProduct,
  deleteProduct,

}) => (
    <Grid container>
        <Grid item xs={12} style={{paddingBottom: 10}}>

            <Button variant="fab" color="primary" mini aria-label="Add" onClick={() => handleOpenModal(ADD_PRODUCT)}>
                <AddIcon />
            </Button>

        </Grid>
        <Grid item xs={12}>
            {products.map(({title, id, image}) =>
                <ProductLink
                    key={id}
                    id={id}
                    title={title}
                    updateProduct={updateProduct}
                    deleteProduct={deleteProduct}
                    image={image}
                    typeShow={ADMIN}
                />)
            }
        </Grid>
    </Grid>
);

export default ProductListView;