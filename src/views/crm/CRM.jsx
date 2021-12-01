import React from 'react'
import { Grid, Button, Table, Icon, Header, Form, Image } from 'semantic-ui-react'
import Image1 from '../../assets/images/collection.svg'
import "./crm.scss"

const CRM = () => {
    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">CRM</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Button.Group floated='right' className="crmBtns">
                    <Button className="active">Week</Button>
                    <Button>Month</Button>
                    <Button>Year</Button>
                </Button.Group>
            </Grid.Column>
            <Grid.Column width={16}>
                <Grid columns="equal">
                    <Grid.Column>
                        <div className="crmBox blue">
                            <Image src={Image1} />
                            <Header as="h2">20</Header>
                            <Header as="h4">Active Clients</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox purple">
                            <Image src={Image1} />
                            <Header as="h2">48</Header>
                            <Header as="h4">Active Subscriptions</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox yellow">
                            <Image src={Image1} />
                            <Header as="h2">15</Header>
                            <Header as="h4">Cancelled Subscriptions</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox red">
                            <Image src={Image1} />
                            <Header as="h2">12</Header>
                            <Header as="h4">Lost Clients</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox blue">
                            <Image src={Image1} />
                            <Header as="h2">25</Header>
                            <Header as="h4">New Clients</Header>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <div className="crmBox yellow">
                            <Image src={Image1} />
                            <Header as="h2">16</Header>
                            <Header as="h4">Subscription Due</Header>
                        </div>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Business Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Email <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Phone <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Smith</Table.Cell>
                                <Table.Cell>smith@gmail.com</Table.Cell>
                                <Table.Cell>(854) 555-6545</Table.Cell>
                                <Table.Cell><Form.Checkbox defaultChecked label="Approved" className="commonToggle" toggle /></Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="eye" color='teal' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Richard</Table.Cell>
                                <Table.Cell>richard@gmail.com</Table.Cell>
                                <Table.Cell>(546) 854-8545</Table.Cell>
                                <Table.Cell><Form.Checkbox defaultChecked label="Approved" className="commonToggle" toggle /></Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="eye" color='teal' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>James</Table.Cell>
                                <Table.Cell>james@gmail.com</Table.Cell>
                                <Table.Cell>(754) 885-6555</Table.Cell>
                                <Table.Cell><Form.Checkbox label="Approved" className="commonToggle" toggle /></Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="eye" color='teal' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default CRM
