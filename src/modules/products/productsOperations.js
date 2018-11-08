import {normalize} from 'normalizr';
import * as schemes from '../../api/schemes';
import * as actions from './productsActions';
import * as Api from '../../api/Api';



export const fetchProducts = (refresh) => async (dispatch, getState) => {
  try {

      const {ids} = getState().products;

      if (ids.length > 0 && !refresh) {
          return;
      }

      dispatch(actions.fetchProductsStart());
      const res = await Api.products.fetchProducts();
      const {result, entities} = normalize(res.data, schemes.ProductCollection);


      dispatch(actions.fetchProductsOk({
          ids: result,
          entities,
      }));
  }catch (err) {
    dispatch(actions.fetchProductsError(err.message))
  }
};

export const deleteProduct = (deleteId) => async (dispatch) => {
    try {
        dispatch(actions.deleteProductStart());
        await Api.products.deleteProduct(deleteId);
        dispatch(actions.deleteProductOk(deleteId));
    } catch (e) {
        console.log(e);
        dispatch(actions.deleteProductError(e.message))
    }
};



export const updateProducts = (newProduct) => async (dispatch) => {
    try {

        dispatch(actions.updateProductStart());


        //await Api.products.updateProduct(newProduct.id, newProduct);
        //const [product] = updateProduct.data;

        /*
      dispatch(actions.updateProductOk({
          entities: {
              products: {
                  [product.id]: product,
              },
          },
      }));
      */
        Api.products.updateProduct(newProduct.id, newProduct);
        const res = await Api.products.fetchProducts();
        const {result, entities} = normalize(res.data, schemes.ProductCollection);


        dispatch(actions.fetchProductsOk({
            ids: result,
            entities,
        }));

    }
    catch (e) {
        console.log(e);
        dispatch(actions.updateProductError(e.message))
    }
};


export const addProducts = (newProduct) => async (dispatch) => {
    try {
        dispatch(actions.createProductStart());

        const addProduct = await Api.products.setProduct(newProduct);
        const {result, entities} = normalize(addProduct.data, schemes.ProductCollection);

        dispatch(actions.createProductOk({
            ids: result,
            entities,
        }));
    } catch (e) {
        console.log(e);
        dispatch(actions.createProductError(e.message));
    }
};