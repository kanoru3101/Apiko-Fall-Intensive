
const uuid = require('uuid/v4')

export const createToto =  (value) => ({
    id: uuid(),
    title: value,
    completed: false,
})