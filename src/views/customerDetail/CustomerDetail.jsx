import React from 'react'
import { Grid, Header, Button, List, Table, Menu, Icon, Tab, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import "./customer-detail.scss"

const CustomerDetail = () => {
    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Customer Detail</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                {/* <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice`} className='btn-primary' type='button'>Back</Button> */}
            </Grid.Column>
            <Grid.Column width={16} verticalAlign="middle">
                <div className="customerDetail">
                    <div className="leftCard">
                        <Header as="h1" className="secondary-color m-0">Gilbert Riley</Header>
                        <p>Customer Since : Jan 20, 2021</p>
                    </div>
                    <div className="rightCard">
                        <p>Total Invoice</p>
                        <Header as="h2" className="secondary-color m-0">$45,225.00</Header>
                    </div>
                </div>
                <div className="customerDesc">
                    <div className="innerBox">
                        <List>
                            <List.Item>
                                <List.Icon name='mail' />
                                <List.Content>riley@gmail.com</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='phone' rotated='clockwise' />
                                <List.Content>(565) 5665-5556</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Icon name='map marker alternate' />
                                <List.Content>128, My Street, Kingston, New York 12401.</List.Content>
                            </List.Item>
                        </List>
                    </div>
                    <div className="innerBox">
                        <List>
                            <List.Item>Last Invoice Date: <b>Nov 25, 2021</b></List.Item>
                            <List.Item>Upcoming Invoice Date: <b>Dec 10, 2021</b></List.Item>
                        </List>
                    </div>
                </div>
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Invoice Number<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Amount <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Due Date<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Status<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Actions</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Link to="#">45412</Link></Table.Cell>
                                <Table.Cell>$18.00</Table.Cell>
                                <Table.Cell>Nov 20, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="blue">Pending</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-detail`}>454545</Link></Table.Cell>
                                <Table.Cell>$22.00</Table.Cell>
                                <Table.Cell>Nov 15, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="green">Paid</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
                                    </List>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Link to="#">65542</Link></Table.Cell>
                                <Table.Cell>$25.00</Table.Cell>
                                <Table.Cell>Nov 18, 2021</Table.Cell>
                                <Table.Cell>
                                    <Label color="red">Overdue</Label>
                                </Table.Cell>
                                <Table.Cell>
                                    <List horizontal>
                                        <List.Item as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`}><Icon name="edit outline" color="blue" title="Edit" link /></List.Item>
                                        <List.Item><Icon name="copy outline" color="green" title="Copy Invoice" link /></List.Item>
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

export default CustomerDetail
