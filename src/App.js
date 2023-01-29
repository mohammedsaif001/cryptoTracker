import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

const useStyles = makeStyles({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: '100vh'
  },
})
function App() {

  const classes = useStyles()
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Switch>
          <Route path='/' exact ><HomePage /></Route>
          <Route path="/coins/:id"><CoinPage /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
