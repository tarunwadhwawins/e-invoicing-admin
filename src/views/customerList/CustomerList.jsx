import React from 'react'
import { Grid, Header, Table, Icon, Menu, Button, List } from 'semantic-ui-react'
import { env } from '../../shared/functional/global-import';
import { Link } from 'react-router-dom'

const CustomerList = () => {
    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Customer List</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/add-customer`} className="btn-secondary"><Icon name="plus" />Add Customer</Button>
            </Grid.Column>
            <Grid.Column width={16}>
            <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Customer Name <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Address <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Member Since <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>Cecilia Chapman 711-2880 Nulla St.Mankato 96522</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`}><Icon name="plus" color="green" title="View" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-customer`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>Cecilia Chapman 711-2880 Nulla St.Mankato 96522</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`}><Icon name="plus" color="green" title="View" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-customer`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                                <Table.Cell>Cecilia Chapman 711-2880 Nulla St.Mankato 96522</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/invoices`}><Icon name="plus" color="green" title="View" link /></List.Item>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-customer`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="trash alternate outline" color="red" title="Delete" link /></List.Item>
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
    )
}

export default CustomerList
