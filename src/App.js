import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {v4 as uuid} from "uuid";
import Home from "./Home";
import NewColorForm from "./NewColorForm";
import Color from "./Color";
import './App.css';

function App() {
  const [colors, setColors] = useState(["salmon", "cyan"]);
  const updateColors = (newColor) => {
    setColors(oldColors => [...oldColors, newColor]);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/colors">
          <Home colors={colors}/>
        </Route>
        <Route exact path="/colors/new">
            <NewColorForm colors={colors} updateColors={updateColors} />
        </Route>
        {colors.map(c => <Route exact path={`/colors/${c}`} key={uuid()}><Color color={c}/></Route>)}
        <Route>
          <Redirect to="/colors"/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
