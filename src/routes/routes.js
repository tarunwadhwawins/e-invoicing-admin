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
import InvoiceDetail from "../views/invoiceDetail/InvoiceDetail";
import Invoices from "../views/invoices/Invoices";
import Invoice from "../views/invoice-list/Invoice";
import CustomerDetail from "../views/customerDetail/CustomerDetail";
import CustomerList from "../views/customerList/CustomerList";
import AddCustomer from "../views/addCustomer/AddCustomer";
import UpdateCustomer from "../views/updateCustomer/UpdateCustomer";
import UpdateInvoice from "../views/updateInvoice/UpdateInvoice";
import InvoiceTemplate from "../views/invoiceTemplate/InvoiceTemplate";
import InvoiceTemplate1 from "../views/invoiceTemplate/InvoiceTemplate1";
import InvoiceTemplate2 from "../views/invoiceTemplate/InvoiceTemplate2";
import CopyInvoice from "../views/updateInvoice/CopyInvoice";
import SendInvoiceTemplate from "../views/editInvoiceTemplate/SendInvoiceTemplate";
import EditInvoiceTemplate from "../views/editInvoiceTemplate/EditInvoiceTemplate";
import RolePermissions from "../views/rolePermissions/RolePermissions";
import CustomRole from "../views/customRole/CustomRole";
import UpdateCustomRole from "../views/customRole/UpdateCustomRole";
import InvoiceTemplateList from "../views/invoiceTemplateList/InvoiceTemplateList";
import Reports from "../views/reports/Reports";
import SubscriptionModal from "../views/modal/SubscriptionModal";


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
            <Route exact path={`${env.PUBLIC_URL}/dashboard/user-setting`} component={UserSetting}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/business-profile`} component={BusinessProfile}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/business-profile`} component={BusinessProfile}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/agreement`} component={Agreement}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/team`} component={Team}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/notifications`} component={Notifications}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription-plan`} component={SubscriptionPlan}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-detail`} component={InvoiceDetail}/>
            <Route exact  path={`${env.PUBLIC_URL}/dashboard/invoices`} component={Invoices}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice`} component={Invoice}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/customer-detail`} component={CustomerDetail}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/crm`} component={CRM}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/customer-list`} component={CustomerList}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/add-customer`} component={AddCustomer}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/update-customer`} component={UpdateCustomer}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/update-invoice`} component={UpdateInvoice}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template`} component={InvoiceTemplate}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template-1`} component={InvoiceTemplate1}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template-2`} component={InvoiceTemplate2}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/copy-invoice`} component={CopyInvoice}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/send-invoice`} component={SendInvoiceTemplate}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/edit-invoice-template`} component={EditInvoiceTemplate}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/role-permissions`} component={RolePermissions}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/custom-role`} component={CustomRole}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/update-custom-role`} component={UpdateCustomRole}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/invoice-template-list`} component={InvoiceTemplateList}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/reports`} component={Reports}/>
            <Route exact path={`${env.PUBLIC_URL}/dashboard/subscription-plan`} component={SubscriptionModal}/>
            

        </Switch>
    </DashboardLayout>
)

    

   
    


export default Routes