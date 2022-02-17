import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './About/About';
import Login from './Login/Login';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/about">
              <About></About>
            </PrivateRoute>
          </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
