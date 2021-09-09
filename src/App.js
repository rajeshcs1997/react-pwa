import React, {useState, useEffect} from 'react';
import './App.css';
import Data from './containers/Data/index'
import Details from './containers/Details/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
	const [data, setData] = useState("");

	const getData = (val) =>{
		setData(val)
	}

  return (
    <div>
      {/*<Data />*/}
      <Router>
      <div>
        {/*<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>*/}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/details">
            <Details data={data}/>
          </Route>
          <Route path="/">
            <Data sendData={getData}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
