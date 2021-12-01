import React from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Home from '../../views/home/Home'
import {Route} from 'react-router-dom'

const Dashboard = ({children}) => {
    return (
        <div>
            <Header />
            <Sidebar />
            <div className="pageWrapper">
                <div className="pageWrapperInner">
                    <div className="contentWrapper">
                       {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
