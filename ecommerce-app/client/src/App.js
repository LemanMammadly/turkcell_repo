import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Index";
import Signin from './pages/Auth/Signin/Index'
import Signup from './pages/Auth/Signup/Index'
import Products from "./pages/Products/Index";

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <div id="content">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;