import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import Pokemon from './Pokemon'
import Stock from './Stock'
import Datetime from './Datetime'
import Array from './Array'

const App = () => {
    return (
        <Router>
            <Navbar />
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
    )
}

export default App
