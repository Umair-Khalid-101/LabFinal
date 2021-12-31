import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import ViewApplicants from "./components/ViewApplicants";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/UpdateUser/:id">
          <UpdateUser />
        </Route>
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
