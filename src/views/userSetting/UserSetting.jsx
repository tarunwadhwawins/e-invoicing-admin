import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import Business from "../../assets/images/business.svg"
import Agreement from "../../assets/images/agreement.svg"
import Team from "../../assets/images/team.svg"
import Subscription from "../../assets/images/subscription-plan.svg"
import Permissions from "../../assets/images/permissions.png"
import Template from "../../assets/images/template.png"
import Reports from "../../assets/images/reports.png"
import "./userSetting.scss"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';


const UserSetting = () => {
    return (
        <>
            <Grid>
                <Grid.Column width={16}>
                    <Header as="h2">Company Profile Setup</Header>
                </Grid.Column>
            </Grid>
            <Grid columns="4">
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/business-profile`}>
                        <Image src={Business} />
                        <Header as="h3">Business profile</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/agreement`}>
                        <Image src={Agreement} />
                        <Header as="h3">Agreement</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/team`}>
                        <Image src={Team} />
                        <Header as="h3">Team</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/subscription-plan`}>
                        <Image src={Subscription} />
                        <Header as="h3">Subscription Plan</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/role-permissions`} >
                        <Image src={Permissions} />
                        <Header as="h3">Roles and permissions</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/invoice-template-list`} >
                        <Image src={Template} />
                        <Header as="h3">Invoice Template</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/reports`}>
                        <Image src={Reports} />
                        <Header as="h3">Reports</Header>
                    </Link>
                </Grid.Column>
            </Grid>

        </>
    )
}

export default UserSetting
