import React from "react";
import s from './Home.module.css';



const Home = () => (

    <div className={s.container}>
        <div>
            <h1>Home</h1>
        </div>
        <div>
            <p>This site is intended for study REACT</p>
        </div>
        <h3>Completed tasks at Apiko Fall Intensive:</h3>
        <div className={s.completedTask}>
            <ul>
                <li>
                    <p>My react</p>
                </li>
                <li>
                    <p>Todo</p>
                </li>
                <li>
                    <p>React Route</p>
                </li>
            </ul>
        </div>


    </div>

);




export default Home;