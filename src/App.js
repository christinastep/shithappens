import './styles/App.scss';
import Papers from './components/Papers';
import Paper from './components/Paper/Paper';
//import { paperData } from "../data/PaperData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  return (
    // <Router>
    //   <div className="App">
    //     <Papers />
    //   </div>
    // </Router>
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Papers} />
            <Route exact path="/paper/:id" component={Paper}/>
          </Switch>
        )}
      />
    </Router>
  );
}

export default App;
