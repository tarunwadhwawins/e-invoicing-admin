import React from 'react'
import { Step, Grid, Header, Image } from 'semantic-ui-react'
import Business from "../../assets/images/business.svg"
import Catalogue from "../../assets/images/catalogue.svg"
import Agreement from "../../assets/images/agreement.svg"
import Team from "../../assets/images/team.svg"
import Subscription from "../../assets/images/subscription-plan.svg"
import "./home.scss"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';


const Home = () => {
    return (
        <>
            <Grid>
                <Grid.Column width={16}>
                    <Header as="h2">Company Profile Setup</Header>
                </Grid.Column>
            </Grid>
            <Grid columns={5}>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/business-profile`}>
                        <Image src={Business} />
                        <Header as="h3">Business profile</Header>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link className="settingBox" to={`${env.PUBLIC_URL}/dashboard/catalogue`}>
                        <Image src={Catalogue} />
                        <Header as="h3">Catalogue <br /><small>Product/Service</small></Header>
                    </Link >
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
            </Grid>

        </>
    )
}

export default Home
