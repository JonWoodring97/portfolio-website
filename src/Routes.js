import React from 'react'; 
import NavigationPane from './components/NavigationPane';
import HomePage from './views/HomePage'; 
import About from './views/About'; 
import Blog from './views/Blog';

import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return(
        <div>
            <NavigationPane />  
            <Switch>
                <Route exact path = '/home' component = {HomePage}/>
                <Route exact path = '/Blog' component = {Blog} />
                <Route exact path = '/'>
                    <Redirect to='/home' />
                </Route>
                <Route exact path = '/About' component = {About}/>
            </Switch>
        </div>
    )
}