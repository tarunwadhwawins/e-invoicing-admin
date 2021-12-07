import React from 'react';
import { Grid, Header, Form, Icon, Table, Label, Menu } from 'semantic-ui-react';
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
                                <Table.HeaderCell>Subscription Name <Icon name="sort" /></Table.HeaderCell>
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
                                <Table.Cell><Link to="#">Smith</Link></Table.Cell>
                                <Table.Cell>Flat-rate</Table.Cell>
                                <Table.Cell>Monthly</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                    <Icon name="trash alternate outline" color="red" title="Delete" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">Richard</Link></Table.Cell>
                                <Table.Cell>Upfront Commision</Table.Cell>
                                <Table.Cell>Annual</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Active</Label>
                                </Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                    <Icon name="trash alternate outline" color="red" title="Delete" link />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">James</Link></Table.Cell>
                                <Table.Cell>Flat-rate</Table.Cell>
                                <Table.Cell>Monthly</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="yellow"> Inactive</Label>
                                </Table.Cell>
                                <Table.Cell>$25.00</Table.Cell>
                                <Table.Cell>
                                    <Icon name="edit outline" color="blue" title="Edit" link />
                                    <Icon name="trash alternate outline" color="red" title="Delete" link />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='8'>
                                    <Menu floated='right' pagination>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron left' />
                                        </Menu.Item>
                                        <Menu.Item as='a'>1</Menu.Item>
                                        <Menu.Item as='a'>2</Menu.Item>
                                        <Menu.Item as='a'>3</Menu.Item>
                                        <Menu.Item as='a'>4</Menu.Item>
                                        <Menu.Item as='a' icon>
                                            <Icon name='chevron right' />
                                        </Menu.Item>
                                    </Menu>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </Grid.Column>
        </Grid>
    );
};

export default Subscription;