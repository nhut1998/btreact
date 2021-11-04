// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Binding from './router/Binding'

import Style from './router/Style/components/Style'
import State from './router/Binding/State/components/State';
import Props from 'router/Props/components/Props';
import Components from 'router/Components/components/Components';
import LifeCycle from 'router/LifeCycle/component/LifeCycle';
import TheCoffeeHouse from 'router/TheCoffeeHouse'
import Axios from 'router/Axios'
// import Admin from 'router/Admin/component/Admin'
import List from 'router/Admin/modules/List'
import {Create, Edit} from './router/Admin/modules/Create';
import { BrowserRouter as Nhut, Switch, Route, Redirect } from 'react-router-dom'
import Product from './router/TheCoffeeHouse/module/Product'
import Header from 'layouts/Header'
// import AdminRedux from './router/AdminRedux'
import Login from './router/Login'
import GuestLayout from 'layouts/Guest';







function App() {
  return (
    <Nhut>
      <Switch>
        
        <Route
          path="/admin"
          render={routeProps => {
            if (localStorage.getItem('access_token')) {
              return (
                <>
                  <div className='text-center display-2'>Question admin</div>
                  <Route path={`${routeProps.match.url}/list`} component={List} exact />
                  <Route path={`${routeProps.match.url}/create`} component={Create} exact />
                  <Route path={`${routeProps.match.url}/:id/edit`} component={Edit} exact />
                </>
              )
            } else {
              return <Redirect to='/' />
            }
          }}
        />
        {/* <AdminRedux/> */}
        {/* <Route 
          path="/user"
          render={routeProps => {
            return (
              <GuestLayout>
                <Route path={`${routeProps.match.url}/login`} component={Login} />
              </GuestLayout>
            )
          }}
        /> */}
        {/* <Route
          path="/"
          render={routeProps => {
            if (!localStorage.getItem('access_token')) {
              return <Redirect to='/user/login' />
            }
            return(
              (
                <>
              <Header cart={[]} />
              <Switch>
                {Product}
                {TheCoffeeHouse}
                {Binding}
                <Route path='/stype'>
                  <Style />

                </Route>
                <Route path='/state'>
                  <State />

                </Route>
                <Route path='/props'>
                  <Props />

                </Route>
                <Route path='/component'>
                  <Components />

                </Route>

               
                <Route path='/lifecycle'>
                  <LifeCycle />
                </Route>
                <Route path='/axios'>
                  <Axios />
                </Route>
              </Switch>


            </>

              )
            )
          }}
        /> */}
      </Switch>
    </Nhut>
  );
}

export default App;
