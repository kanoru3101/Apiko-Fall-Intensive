import React from 'react';
import s from './Filters.module.css';
import T from 'prop-types';




const Filters = ({
    changeFilter
}) =>(
    <div className={s.container}>
        <h3><p className={s.title}>Filters: </p></h3>
        <button className={s.btn} title="All todo" onClick={() => changeFilter("all")}>&#9776;</button>
        <button className={s.btn} title="completed todo" onClick={() => changeFilter("completed")}>&#10004;</button>
        <button className={s.btn} title="didn`t completed todo" onClick={() => changeFilter("not completed")}>&#10008;</button>
    </div>
)


Filters.propsType = {
    showAll: T.func,
    showCompleted: T.func,
    showNotCompleted: T.func
}



export default Filters;