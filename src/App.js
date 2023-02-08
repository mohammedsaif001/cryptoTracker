import { makeStyles } from "@material-ui/core";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
});
function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Switch>
          <div className={classes.App}>
            <Header />
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/coins/:id">
              <CoinPage />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
