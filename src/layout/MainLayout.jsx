import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './main-layout.css';
import routes from '../routes';

/*Component import*/
import Sidebar from '../components/sidebar/Sidebar';
import MainPage from '../components/MainPage'

const MainLayout = () => {
    return (
        <div className='main-content'>
            <Sidebar />
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

