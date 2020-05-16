import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import BrandsPage from "./pages/brands/brands.component";

import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/brands" component={BrandsPage} />
            </Switch>
        </div>
    );
}

export default App;
