import React from 'react';
import s from './Filters.module.css';
import T from 'prop-types';
import {Link} from 'react-router-dom';



const Filters = ({
    changeFilter, match
}) =>(
    <div className={s.container}>
        <h3><p className={s.title}>Filters: </p></h3>
        <Link to={match.url + '/all'}>
            <button className={s.btn} title="All todo" onClick={() => changeFilter("all", match)}>
                &#9776;
            </button>
        </Link>
        <Link to={match.url + '/completed'}>
            <button className={s.btn} title="completed todo" onClick={() => changeFilter("completed", match)}>
                &#10004;
            </button>
        </Link>
        <Link to={match.url + '/notCompleted'}>
            <button className={s.btn} title="didn`t completed todo" onClick={() => changeFilter("notCompleted", match)}>
                &#10008;
            </button>
        </Link>


    </div>

)


Filters.propsType = {
    showAll: T.func,
    showCompleted: T.func,
    showNotCompleted: T.func
}



export default Filters;