
import './App.css';
import DataGridDemo from "./Data_Grid";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {AddDataForm} from "./AddDataForm";

function App() {
    console.log("hi")
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
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
