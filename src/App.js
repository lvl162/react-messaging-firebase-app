import './App.css';
import MessagePage from './pages/message';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Landing from './components/Landing';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setUser(false);
  };
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <Landing
                {...props}
                user={user.toString()}
                handleLogin={handleLogin}
              />
            )}
          />
          <Route path='/message' component={MessagePage} exact />
          <Route exact path='/dashboard' component={Dashboard} handleLogout={handleLogout}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
