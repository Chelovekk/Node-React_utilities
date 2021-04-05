import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useRoutes} from './routes'
import useAuth from './hooks/auth.hook'
import  Navibar  from './components/Navibar'
import { AuthContext } from './context/AuthContext'
import Loader from './components/Loader'
import CustomBreadcrumb from './components/BreadCrumb'

function App() {
  const {token, login, logout, userId, ready} = useAuth()
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated)

  if(!ready){
    return <Loader></Loader>
  }

  return (
    <AuthContext.Provider  value ={{
      token, login, logout, userId, isAuthenticated
    }}>
      <Router>
      <Navibar/>
      <CustomBreadcrumb />
        {isAuthenticated}
          {routes}
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
