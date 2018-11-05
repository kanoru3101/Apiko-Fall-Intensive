import * as actions from './productsActions';
import * as Api from '../../api/Api';


const normalize  = (arr, useId='id') =>
    arr.reduce((acc, current) => {
        const id = current[useId];
        acc.ids.push(id);
        acc.entities[id] = current;

        return acc;
},{
    ids: [],
    entities: {},
});


export const fetchProducts = () => async (dispatch) => {
  try {
      dispatch(actions.fetchProductsStart());

      const res = await Api.products.fetchProducts();
      const {ids, entities} = normalize(res.data);

      dispatch(actions.fetchProductsOk({
          ids,
          entities: { products: entities}
      }));
  }catch (err) {
    dispatch(actions.fetchProductsError(err.message))
  }
};