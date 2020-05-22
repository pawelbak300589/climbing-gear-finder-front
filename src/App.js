import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from "./history";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import BrandsPage from "./pages/brands/brands.component";
import LoginPage from "./pages/login/login.component";
import RegisterPage from "./pages/register/register.component";

import './App.css';

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/brands" component={BrandsPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component={RegisterPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
