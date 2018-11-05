import * as actions from './productsActions';
import * as Api from '../../api/Api';

export const fetchProducts = () => async (dispatch) => {
  try {
      dispatch(actions.fetchProductsStart());

      const res = await Api.products.fetchProducts();

      dispatch(actions.fetchProductsOk(res.data));
  }catch (err) {
    dispatch(actions.fetchProductsError(err.message))
  }
};