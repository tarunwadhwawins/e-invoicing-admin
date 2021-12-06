import React from 'react'
import { List, Image, Grid, Header } from 'semantic-ui-react'
import Profile from "../../assets/images/profile.jpg"
import './notifications.scss'


const Notifications = () => {
    return (
        <Grid>
            <Grid.Column width={16} verticalAlign="middle">
                <Header as="h2">Notifications</Header>
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="notificationPage">
                    <List>
                        <List.Item>
                            <Image avatar src={Profile} />
                            <List.Content>
                                <List.Header>You generated invoice for Mission Beach Villas.</List.Header>
                                <List.Description>
                                    2 Hours Ago
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src={Profile} />
                            <List.Content>
                                <List.Header>You added Smith as Business Admin.</List.Header>
                                <List.Description>
                                    10 hours ago.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src={Profile} />
                            <List.Content>
                                <List.Header>
                                    You added Robert as Staff.</List.Header>
                                <List.Description>
                                    yesterday.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src={Profile} />
                            <List.Content>
                                <List.Header>You added Smith as Business Admin.</List.Header>
                                <List.Description>
                                    3 days ago.
                                </List.Description>
                            </List.Content>
                        </List.Item>
                    </List>
                </div>
            </Grid.Column>
        </Grid>

    )
}

export default Notifications
