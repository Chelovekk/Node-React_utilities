import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { CabinetPage } from './pages/CabinetPage'
import { DetailPage } from './pages/DetailPage'
import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthenticated =>{
    if (isAuthenticated){
        return(
            <Switch>
                 <Route path="/" exact>
                     <HomePage/>
                 </Route>
                 <Route path="/cabinet" exact>
                     <CabinetPage/>
                 </Route>
                 <Route path="/detail/:id" exact>
                     <DetailPage/>
                 </Route>
             <Redirect to = "/cabinet"/>

             </Switch>
        
        )
    }
    return(
        <Switch>
            <Route path = "/" exact> 
                 <HomePage/>
             </Route>
             <Route path = "/auth" exact> 
                 <AuthPage/>
             </Route>             
             <Redirect to = "/auth"/>
        </Switch>
    )
}
