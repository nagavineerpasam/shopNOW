import "./App.css";
import { Home } from "./containers/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./containers/cart";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
