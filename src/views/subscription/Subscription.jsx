import React from 'react';
import { Grid, Header, Form, Button, Icon, Table, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const Subscription = () => {
    return (
        <Grid>
            <Grid.Column width={4} verticalAlign="middle">
                <Header as="h2">Subscriptions</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={4} textAlign="right">
                {/* <Button as={Link}  to='/dashboard/invoices' className="btn-secondary"><Icon name="plus" /> New Subscription</Button> */}
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Business Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Subscription Type <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Billing <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Start Date <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>End Due <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Amount <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Smith</Table.Cell>
                                <Table.Cell>Flat-rate</Table.Cell>
                                <Table.Cell>Monthly</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="eye" color='teal' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Richard</Table.Cell>
                                <Table.Cell>Upfront Commision</Table.Cell>
                                <Table.Cell>Annual</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>
                                    <Icon name="pencil" color='green' link />
                                    <Icon name="eye" color='teal' link />
                                    <Icon name="trash alternate" color='red' link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>James</Table.Cell>
                                <Table.Cell>Flat-rate</Table.Cell>
                                <Table.Cell>Monthly</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="yellow"> Inactive</Label>
                                </Table.Cell>
                                <Table.Cell>$25.00</Table.Cell>
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
    );
};

export default Subscription;