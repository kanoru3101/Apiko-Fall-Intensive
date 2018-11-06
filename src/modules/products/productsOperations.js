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