import { Navigate } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
//import jwt_decode from 'jwt-decode';

import WebLayout from "@layouts/web";
import SellwithZoom from "@pages/web/SellwithZoom";
import Company from "@pages/web/Company";
import Products from "@pages/web/Products";
import ZoomCall from "@pages/web/ZoomCall";
import MyAccount from "@pages/web/MyAccount";
import SignIn from "@pages/auth/SignIn";
import SignUp from "@pages/auth/SignUp";
import { setAccount } from "@store/slices/auth.slice";

const routes = [
  {
    auth: true,
    path: '/sell',
    element: <WebLayout><SellwithZoom /></WebLayout>
  }, {
    auth: true,
    path: '/call',
    element: <ZoomCall />
  }, {
    auth: true,
    path: '/company',
    element: <WebLayout><Company /></WebLayout>
  }, {
    auth: true,
    path: '/products',
    element: <WebLayout><Products /></WebLayout>
  }, {
    auth: true,
    path: '/myaccount',
    element: <WebLayout><MyAccount /></WebLayout>
  }, {
    auth: false,
    path: '/signin',
    element: <WebLayout sidemenu={ false }><SignIn /></WebLayout>
  }, {
    auth: false,
    path: '/signup',
    element: <WebLayout sidemenu={ false }><SignUp /></WebLayout>
  }
];

const MainRoutes = (props) => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const isLoggined = () => {
    return !!auth.account;
  }

  const authRedirect = element => {
    if (isLoggined())
      return element;
    return <Navigate to="/signin" />
  }

  if (sessionStorage.account && !isLoggined()) {
    try {
      let decoded = JSON.parse(sessionStorage.account);
      dispatch(setAccount(decoded));
    } catch (err) {
      
    }
  }

  return (
    <Router>
      <Routes>
        <Route index element={ isLoggined() ? <Navigate to="/myaccount" /> : <Navigate to="/signin" /> } />
        {
          routes.map((route, index) =>
            <Route key={ index } path={ route.path } exact element={ route.auth ? authRedirect(route.element) : route.element } />
          )
        }
      </Routes>
    </Router>
  )
};

export default MainRoutes;