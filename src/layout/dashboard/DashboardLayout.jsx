import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import {Route} from 'react-router-dom'

const Dashboard = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const handleToggle = () => {
        setIsActive(!isActive)
    };
    return (
        <div  className={`App ${isActive ? "menuCollapse" : ""}`}>
            <Header  onMenuClick={handleToggle}/>
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
