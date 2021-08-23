import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header'
import Form from './Form'
import Pokemon from './Pokemon'
import Stock from './Stock'
import Datetime from './Datetime'
import Array from './Array'

const App = () => {
    return (
        <Router>
            <Header />
                <Switch>
                <Route path="/" exact>
                    <Form />
                </Route>
                <Route path="/pokemon" exact>
                    <Pokemon />
                </Route>
                <Route path="/stock" exact>
                    <Stock />
                </Route>
                <Route path="/datatime" exact>
                    <Datetime />
                </Route>
                <Route path="/array" exact>
                    <Array />
                </Route>
                </Switch> 
        </Router>
    );
}

export default App
