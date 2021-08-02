import './App.css';
import PrivateRoute from './components/PrivateRoute';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { persistor, store } from './app/store';
import Custom404 from './pages/404/404';
import PostsList from './features/posts/postsList';
import Loading from './components/Loading';
import { auth } from './lib/firebase';
import Login from './pages/login/LoginPage';
import HomePage from './pages/homepage/HomePage';
import MessagePage from './pages/messages/MessagePage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import PrivateAndParamsRoute from './components/ProtectedRoute';
import RoutoToMessagePage from './pages/messages/RouteMessagePage';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <PrivateRoute exact path='/'>
              <HomePage />
            </PrivateRoute>
            <Route exact path='/login'>
              <Login />
            </Route>
            <PrivateRoute exact path='/message'>
              <RoutoToMessagePage />
            </PrivateRoute>
            <PrivateRoute exact path='/message/t/'>
              <RoutoToMessagePage />
            </PrivateRoute>
            <PrivateAndParamsRoute
              exact
              path='/message/t/:toThisId'
              children={RoutoToMessagePage}
            ></PrivateAndParamsRoute>
            <Route path='/404' component={Custom404} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
