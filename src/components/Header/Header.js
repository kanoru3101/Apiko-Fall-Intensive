import React from 'react';
import s from './Header.module.css';
import T from 'prop-types';


const Header = ({
    value,
    onClick,
    onChangeText,
    inputRef
}) => (
    <div className={s.container}>
        <input
            className={s.inputStyle}
            value={value}
            ref={inputRef}
            onChange={e => onChangeText(e.target.value)}/>
        <button className={s.btn} onClick={onClick}>Add todo</button>

    </div>
);



Header.propsTypes = {
    value: T.string,
    onClick: T.func,
    onChangeText: T.func,
}

export default Header;