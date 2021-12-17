import React from 'react';
import { Grid, Header, Form, Icon, Table, Label, Menu, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';



const Invoice = () => {
    return (
        <Grid>
            <Grid.Column width={4} verticalAlign="middle">
                <Header as="h2">Invoice List</Header>
            </Grid.Column>
            <Grid.Column width={12}>
                <Form.Input size="large" action={{ icon: 'search' }} placeholder='Search...' fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Invoice Number<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Customer Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Amount <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Due Date<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Created <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>$18.00</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="blue"> Pending</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/copy-invoice`}><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
                                    </List> 
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green"> Paid</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/copy-invoice`}><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
                                    </List> 
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>$25.00</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="blue"> Pending</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/copy-invoice`}><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
                                    </List> 
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

export default Invoice;