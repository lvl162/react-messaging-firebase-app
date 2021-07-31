import './App.css';
import { Provider, useSelector } from 'react-redux';
import {
  isLoaded,
  ReactReduxFirebaseProvider,
  useFirestoreConnect,
} from 'react-redux-firebase';
import PrivateRoute from './components/PrivateRoute';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { rrfProps, store } from './app/anotherStore';
import Custom404 from './pages/404/404';
import PostsList from './features/posts/postsList';
import Loading from './components/Loading';
import CreateTodo from './components/CreateTodo';
import { memo, useCallback, useMemo, useState } from 'react';
import { auth } from './lib/firebase';
import Login from './pages/login/LoginPage';
import HomePage from './pages/homepage/HomePage';
import MESSPage from './pages/messages/elements';

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loading />;
  return children;
}

function SomeComponent() {
  const profile = useSelector((state) => state.firebase.profile);
  return <div>{JSON.stringify(profile, null, 2)}</div>;
}

const Test = ({ match }) => {
  useFirestoreConnect(['users']);
  const users = useSelector((state) => state.firestore.data.users);
  const uid = auth.currentUser?.uid;

  const { testId } = match.params;
  const someValue = useMemo(() => ({ users, uid }), [testId, users]);
  const doSomething = useCallback(() => {
    return someValue;
  }, [someValue]);

  return (
    <div>
      <Link to='/test/1'> {<p>test</p>} </Link>
      <Link to='/test/2'> {<p>test</p>} </Link>
      <Link to='/test/3'> {<p>test</p>} </Link>
      <Link to='/test/4'> {<p>test</p>} </Link>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/homepage'>
              <HomePage />
            </Route>
            <Route exact path='/'>
              <MESSPage />
            </Route>
              

            <Route exact path='/test/:testId' component={Test}></Route>
            <PrivateRoute exact path='/protected'>
              <PostsList />
              <SomeComponent />
              <CreateTodo />
            </PrivateRoute>
            <PrivateRoute exact path='/message'></PrivateRoute>

            <Route path='/404' component={Custom404} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
