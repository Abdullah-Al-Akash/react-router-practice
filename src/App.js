import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendID'>
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
