import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ViewApplicants from "./components/ViewApplicants";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ViewApplicants">
          <ViewApplicants />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
