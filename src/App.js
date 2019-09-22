import React, { Component } from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import Nav from './pages/nav/Nav'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import myMap from './pages/map/Map'
import Option from './pages/option/Option'
import Search from './pages/search/Search'
import myError from './pages/error/Error'
import store from './store'
import {Provider} from 'react-redux'

export default class App extends Component {
    render() {
        return (
            <div id="route">
               <Provider store={store}>
               <HashRouter>
                    <Switch>
                        <Route path='/' exact component={Nav}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/search' component={Search}/>
                        <Route path='/map' component={myMap}/>
                        <Route path='/option' component={Option}/>
                        <Route component={myError}/>

                       
                    </Switch>
                </HashRouter>
               </Provider>
               
            </div>
        )
    }
}
