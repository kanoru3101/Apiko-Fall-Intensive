import React from 'react';
import s from './NoMatch.module.css';

const NoMatch = () => (
  <div className={s.container}>
      <div>
          <h1>
              <p className={s.text}>Error 404</p>
          </h1>
      </div>

      <div>
          <h2>
              <p >Page not Found!</p>
          </h2>
      </div>
  </div>

);


export default NoMatch;