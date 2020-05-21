import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from "./history";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import BrandsPage from "./pages/brands/brands.component";
import LoginAndRegisterPage from "./pages/login-and-register/login-and-register.component";

import './App.css';

function App() {
    return (
        <div className="app">
            <Router history={history}>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/brands" component={BrandsPage} />
                    <Route exact path="/login" component={LoginAndRegisterPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
