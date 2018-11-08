

const initialState = {
  products: {
   //   [products.id]: {...product}
  },
};


export default function entitiesReducer(
    state=initialState,
    actions
){
    if (actions.payload && actions.payload.entities) {
        const newState = {...state};
        Object.keys(actions.payload.entities).forEach((key) => {
            Object.assign(newState[key], actions.payload.entities[key]);
        });

        return newState;
    }

    return state;
}