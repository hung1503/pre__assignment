import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter as Route, Router, Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import Hero from "./component/Hero.js";
import Button from "./component/Button.js";


function useFetch(url){
  const [data, setData] = useState([]);
  
  useEffect(async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
  }, []);
  return [data];
}

function App() {
  const history = createBrowserHistory();
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Hero data={data}/>
        </Route>
         <Route path="/cards/:id" >
          <Button data={data}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
