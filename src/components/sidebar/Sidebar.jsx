import React from 'react'
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import "./sidebar.scss"
import { env } from '../../shared/functional/global-import';


const Sidebar = () => {
    return (
        <div className="sideBar">
            <Menu text vertical>
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/dashboard`}><Icon name="dashboard" /><span>Dashboard</span></Menu.Item>
                <Menu.Item link><Icon name="users" /><span>CRM</span></Menu.Item>
                <Menu.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/subscription`}><Icon name="tags" /><span>Subscription</span></Menu.Item>
            </Menu>
        </div>
    )
}

export default Sidebar
