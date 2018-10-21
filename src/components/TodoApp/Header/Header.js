import React from 'react';
import s from './Header.module.css';
import T from 'prop-types';
import { Link} from "react-router-dom";


const Header = ({
    value,
    onClick,
    onChangeText,
    inputRef,
    match
}) => (
    <div className={s.container}>
        <input
            className={s.inputStyle}
            value={value}
            ref={inputRef}
            onChange={e => onChangeText(e.target.value)}/>

        <Link to={match.url + '/add'}>
            <button className={s.btn} onClick={onClick}>Add todo</button>
        </Link>
    </div>
);



Header.propsTypes = {
    value: T.string,
    onClick: T.func,
    onChangeText: T.func,
}

export default Header;