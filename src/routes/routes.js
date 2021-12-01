// import { lazy } from 'react';
import { Redirect, Route, Switch } from "react-router";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Home from "../views/home/Home";
import Login from '../views/signin/Signin'
import Subscription from "../views/subscription/Subscription";
import { env } from '../shared/functional/global-import/index';
import Dashboard from '../views/dashboard/Dashboard'


const Routes = ()=>{
    return  <>
    <Redirect exact from='/' to ='/e-invoicing'/>
    <Route exact path='/e-invoicing' component = {Login}/>
    <Route path='/e-invoicing/dashboard' component = {DashboardContainer}/>
    </>

}

const DashboardContainer = ({match})=>(
    <DashboardLayout>
        <Switch>
            <Route exact  path={`${env.PUBLIC_URL}/dashboard/dashboard`} component={Dashboard}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription`} component={Subscription}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes