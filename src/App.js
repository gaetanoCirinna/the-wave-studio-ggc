import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.scss";
import Sidebar from "./components/Sidebar";
import Catalog from "./components/Catalog";

function App() {
    return (
        <Router>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                            <Sidebar></Sidebar>
                        </div>

                        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
                        <div className="col-12 col-md-8 col-lg-9 col-xl-10">
                            <Switch>
                                <Route path="/catalog">
                                    <Catalog />
                                </Route>
                                <Route path="/users">{/* <Users /> */}</Route>
                                <Route path="/">{/* <Home /> */}</Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
