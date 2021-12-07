// import { lazy } from 'react';
import { Redirect, Route, Switch } from "react-router";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Login from '../views/signin/Signin'
import Subscription from "../views/subscription/Subscription";
import { env } from '../shared/functional/global-import/index';
import Dashboard from '../views/dashboard/Dashboard'
import CRM from "../views/crm/CRM";
import UserSetting from "../views/userSetting/UserSetting";
import BusinessProfile from "../views/businessProfile/BusinessProfile";
import Agreement from "../views/agreement/Agreement";
import Team from "../views/team/Team";
import Notifications from "../views/notifications/Notifications";
import SubscriptionPlan from "../views/subscriptionPlan/SubscriptionPlan";


const Routes = ()=>{
    return  <>
    <Redirect exact from='/' to ='/e-invoicing-admin'/>
    <Route exact path='/e-invoicing-admin' component = {Login}/>
    <Route path='/e-invoicing-admin/dashboard' component = {DashboardContainer}/>
    </>

}

const DashboardContainer = ({match})=>(
    <DashboardLayout>
        <Switch>
            <Route exact  path={`${env.PUBLIC_URL}/dashboard/dashboard`} component={Dashboard}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription`} component={Subscription}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/crm`} component={CRM}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/user-setting`} component={UserSetting}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/business-profile`} component={BusinessProfile}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/business-profile`} component={BusinessProfile}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/agreement`} component={Agreement}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/team`} component={Team}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/notifications`} component={Notifications}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription-plan`} component={SubscriptionPlan}/>
        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes