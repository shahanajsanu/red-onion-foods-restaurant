import React, { createContext } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Food from './Component/Food/Food';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Login from './Component/Login/Login';
import { AuthContextProvider } from './Component/Login/useAuth';

export const UserContext = createContext();

function App(props) {
  const user = {name:' ', email:''}
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Login></Login>
        <Food></Food>
        <About></About>
        <Footer></Footer>
        </AuthContextProvider>
    </div>
  );
}

export default App;
