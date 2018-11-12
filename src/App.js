import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";
import Desktop from "./layouts/Desktop";



function App() {
    return (
        <Router>
            <Route component={Desktop} />
        </Router>
    );
}

export default App;
