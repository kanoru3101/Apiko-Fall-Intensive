import {createSelector} from 'reselect';


const getProductsIds = state => state.cart.items;
const getProductEntities = state => state.entities.products;


export const getProducts = createSelector(
    [getProductsIds, getProductEntities],
    (ids, entities) => ids.map(id => entities[id]),
);

export const totalPrice = createSelector(
    [getProducts],
    items => items.reduce((acc, item) => acc + item.price, 0),
);

