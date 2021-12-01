import React from 'react';
import { Grid, Icon, Image, Dropdown, Card, Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import Logo from "../../assets/images/logo-2.png"
import Profile from "../../assets/images/profile.jpg"
import "./header.scss"
import { env } from '../../shared/functional/global-import';

const Header = () => {
    return (
        <div className="headerTop">
            <Grid>
                <Grid.Column width={8}>
                    <div className="logoMenu">
                        <Icon name="sidebar" size="big" link />
                        <Image src={Logo} />
                    </div>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right" verticalAlign="middle">
                    <div className="dropDowns">
                        <Dropdown multiple icon='bell outline' floating>
                            <Dropdown.Menu className='left'>
                                <Card fluid>
                                    <Card.Content>
                                        <Card.Header>Notifications</Card.Header>
                                    </Card.Content>
                                    <Card.Content>
                                        <Feed>
                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                                                    </Feed.Summary>
                                                    <Feed.Date content='1 day ago' />
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You added <a>Molly Malone</a> as a friend.
                                                    </Feed.Summary>
                                                    <Feed.Date content='3 days ago' />
                                                </Feed.Content>
                                            </Feed.Event>

                                            <Feed.Event>
                                                <Feed.Label>
                                                    <Image src={Profile} />
                                                </Feed.Label>
                                                <Feed.Content>
                                                    <Feed.Summary>
                                                        You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                                                    </Feed.Summary>
                                                    <Feed.Date content='4 days ago' />
                                                </Feed.Content>
                                            </Feed.Event>
                                        </Feed>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <a>All Notifications</a>
                                    </Card.Content>
                                </Card>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="user">
                            <p>Jane Doe</p>
                            <Image src={Profile} />
                            <Dropdown multiple floating icon='angle down' >
                                <Dropdown.Menu className='left'>
                                    <Dropdown.Menu scrolling>
                                        <Dropdown.Item  as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`}><Icon name="user" /> Profile Setup</Dropdown.Item>
                                        <Dropdown.Item><Icon name="setting" /> User Setting</Dropdown.Item>
                                        <Dropdown.Item  as={Link} to={`${env.PUBLIC_URL}/`}><Icon name="log out" /> Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Header
