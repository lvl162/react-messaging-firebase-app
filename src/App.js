// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider, useSelector } from 'react-redux';
import { isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import LoginPage from './components/LoginPage';
import { rrfProps, store } from './app/anotherStore';

// import MessagePage from './pages/message';

// import Unauthorized from './components/Unauthorized';
// import SinglePostPage from './features/posts/singlePostPage';
// import { EditPostForm } from './features/posts/editPostForm';
// import PostsList from './features/posts/postsList';
// import ProtectedRoute from './components/ProtectedRoute';
// import Login from './pages/home/home';
// import { useSelector } from 'react-redux';
// import Custom404 from './pages/404/404';
// // import Login from './components/Login';
// const App = () => {
//   const user = useSelector((state) => state.auth.user);

//   return (
//     <div className='App'>
//       {/* basename={process.env.PUBLIC_URL} */}
//       <Router>
//         <Switch>
//           <Route exact path='/'>
//             {user ? <PostsList /> : <Login />}
//           </Route>
//           <ProtectedRoute
//             exact
//             path='/posts/:postId'
//             component={SinglePostPage}
//           />
//           <ProtectedRoute path='/message' component={MessagePage} exact />

//           {/* TODO: make edit privilege only for owner */}
//         <ProtectedRoute
//             exact
//             path='/editPost/:postId'
//             component={EditPostForm}
//           />
//           <ProtectedRoute exact path='/unauthorized' component={Unauthorized} />
//           <Route path='/404' component={Custom404} />
//           <Redirect to='/404' />
//         </Switch>
//       </Router>
//     </div>
//   );
// };

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <Switch>
            <Route exact path='/'>
              {/* {user ? <PostsList /> : <Login />} */}
              <AuthIsLoaded children={<LoginPage />} />
            </Route>
            <Route exact path='/login'>
              <LoginPage />
            </Route>
            <PrivateRoute exact path='/protected'>
              <div>Protected content</div>
            </PrivateRoute>
          </Switch>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default App;
