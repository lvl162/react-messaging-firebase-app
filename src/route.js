import {
  Redirect,
  Route,
  HashRouter as Router,
  Switch,
} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PrivateAndParamsRoute from './components/PrivateAndParamsRoute';
import Custom404 from './pages/404/404';
import HomePage from './pages/homepage/HomePage';
import Login from './pages/auth/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';
import RouteToToMessagePage from './pages/messages/RouteMessagePage';
import NewMessagePage from './pages/messages/NewMessagePage';
import SignUp from './pages/auth/SignUpPage';
import NotVerifiedPage from './pages/notVerified/NotVerifiedPage';
import NotVerifiedRoute from './components/NotVerifiedRoute';

export const Routing = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path='/notifications'>
          <HomePage />
        </PrivateRoute>
        <PrivateAndParamsRoute
          exact
          path='/'
          children={HomePage}
        ></PrivateAndParamsRoute>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <NotVerifiedRoute exact path='/auth/verification'>
          <NotVerifiedPage />
        </NotVerifiedRoute>
        <Route exact path='/auth/forgot'>
          <Login />
        </Route>
        <PrivateRoute exact path='/message'>
          <RouteToToMessagePage />
        </PrivateRoute>
        <PrivateRoute exact path='/message/new'>
          <NewMessagePage />
        </PrivateRoute>
        <PrivateRoute exact path='/message/t/'>
          <RouteToToMessagePage />
        </PrivateRoute>
        <PrivateAndParamsRoute
          exact
          path='/message/t/:toThisId'
          children={RouteToToMessagePage}
        ></PrivateAndParamsRoute>
        <PrivateAndParamsRoute
          exact
          path='/user/:uid'
          children={ProfilePage}
        ></PrivateAndParamsRoute>
        <Route path='/notfound/404' component={Custom404} />
        <Redirect to='/notfound/404' />
      </Switch>
    </Router>
  );
};
