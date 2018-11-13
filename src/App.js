import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Desktop from "./layouts/Desktop";




class App extends React.Component{


    render(){
        return (
            <Router>
                <Route component={Desktop} />
            </Router>
        );
    }

}

export default App;
