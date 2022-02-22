import Nav from './Nav';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetail from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create">
              <Create></Create>
            </Route>

            <Route path="/blogs/:id">
              <BlogDetail></BlogDetail>
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
