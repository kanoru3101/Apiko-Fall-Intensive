import { createSelector } from 'reselect';

const getProductIds = state => state.products.products;
const getProductEntities = state => state.entities.products;



export const getProducts = createSelector(
    [getProductIds, getProductEntities],
    (products, entities) => {
        return products.map(id => entities[id])}
);