import './App.css';
import DataGridDemo from "./Data_Grid";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {AddDataForm} from "./AddDataForm";

function App() {

    return (

      <Router>
          <div>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Data_Grid</Link>
                      </li>
                      <li>
                          <Link to="/addUsers">AddDataForm</Link>
                      </li>

                  </ul>
              </nav>

              <Switch>

                  <Route path="/addUsers">
                      <AddDataForm/>
                  </Route>
                  <Route path="/">
                      <DataGridDemo/>
                  </Route>
              </Switch>
          </div>
      </Router>

  );
}

export default App;
