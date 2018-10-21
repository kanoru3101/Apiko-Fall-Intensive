import React, { Component } from 'react';
import TodoApp from './components/TodoApp/TodoApp';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import s from "./App.module.css";
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import NoMatch from './components/Pages/No Match/NoMatch';




class App extends Component {

  render() {
    return (

            <div className={s.container}>
                <div className={s.nav}>
                    <ul className={s.ul}>
                        <li >
                            <Link className={s.navLink} to="/">Home</Link>
                        </li>
                       <li>
                           <Link className={s.navLink} to="/Todo">Todo</Link>
                       </li>
                       <li>
                           <Link className={s.navLink} to="/About">About</Link>
                       </li>
                    </ul>
                </div>


                <div className={s.content}>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Todo" component={TodoApp} />
                        <Route path="/About" component={About}/>
                        <Route component={ NoMatch} />

                    </Switch>
                </div>
            </div>

    );
  }
}

export default App;
