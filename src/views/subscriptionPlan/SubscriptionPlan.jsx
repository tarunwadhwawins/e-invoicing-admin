import React from 'react'
import { Grid, Header, Form, Icon, Table, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SubscriptionPlan = () => {
    return (
        <Grid>
            <Grid.Column width={4} verticalAlign="middle">
                <Header as="h2">Subscription Plans</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Subscription Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Billing <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Price <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Number of Invoices <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Action</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Silver</Table.Cell>
                                <Table.Cell>Weekly</Table.Cell>
                                <Table.Cell>$29.00</Table.Cell>
                                <Table.Cell>129</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Gold</Table.Cell>
                                <Table.Cell>Montly</Table.Cell>
                                <Table.Cell>$99.00</Table.Cell>
                                <Table.Cell>199</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Platinum</Table.Cell>
                                <Table.Cell>Yearly</Table.Cell>
                                <Table.Cell>$999.00</Table.Cell>
                                <Table.Cell>9999</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>

                    </Table>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default SubscriptionPlan
