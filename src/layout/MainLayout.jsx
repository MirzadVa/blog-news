import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './main-layout.css';
import routes from '../routes';

/*Component import*/
import MainPage from '../containers/pages/MainPage/MainPage'
import Navbar from '../containers/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='main-content'>
            <Navbar />
            <Switch>
                {routes.map((route, index) => (
                    <Route path={route.path} key={index} exact={route.exact ? route.exact : null}>
                        {route.component}
                    </Route>
                ))}
                <Route exact path='/'>
                    <MainPage />
                </Route>
            </Switch>
        </div>
    )
}

export default MainLayout

