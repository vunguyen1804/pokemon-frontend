import React from "react";
import Header from "./Header";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import Home from "./routes/Home";
import CreatePokemon from "./routes/CreatePokemon";
import DeletePokemon from "./routes/DeletePokemon";
import CreateTrainer from "./routes/CreateTrainer";
import DeleteTrainer from "./routes/DeleteTrainer";
import SearchTrainer from "./routes/SearchTrainer";
import FightPokemon from "./routes/FightPokemon";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pokemons/new/:UUID" exact component={CreatePokemon} />
            <Route
              path="/pokemons/delete/:id"
              exact
              component={DeletePokemon}
            />
            <Route path="/trainers/new" exact component={CreateTrainer} />
            <Route
              path="/trainers/delete/:uuid"
              exact
              component={DeleteTrainer}
            />
            <Route path="/search/:term" exact component={SearchTrainer} />
            <Route path="/pokemons/fight" exact component={FightPokemon} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
