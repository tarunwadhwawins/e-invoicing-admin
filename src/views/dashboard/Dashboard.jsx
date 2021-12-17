import React, { useState } from 'react';
import { Grid, Header, Form, Card, Image, Table, Icon, Tab, Label, List, Menu } from 'semantic-ui-react';
import Image1 from '../../assets/images/collection.svg'
import Image2 from '../../assets/images/Outstanding.svg'
import Image3 from '../../assets/images/overdue.svg'
import Image4 from '../../assets/images/client.svg'
import "./dashboard.scss"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import Profile from "../../assets/images/profile.jpg"
import Chart from "react-apexcharts";




const panes = [
    {
        menuItem: 'Latest Invoices',
        render: () =>
            <Tab.Pane attached={false}>
                <div className="commonTable">
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Invoice Number<Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Client Name <Icon name="sort" /></Table.HeaderCell>
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
            </Tab.Pane>,
    },
    {
        menuItem: 'Upcoming Invoices',
        render: () => <Tab.Pane attached={false}>
            <div className="commonTable">
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Invoice Number<Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Client Name <Icon name="sort" /></Table.HeaderCell>
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
                            <Table.Cell>Dec 20, 2021</Table.Cell>
                            <Table.Cell>Dec 20, 2021</Table.Cell>
                            <Table.Cell>
                                <Label color="blue"> Pending</Label>
                            </Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="copy outline" color="green" title="Copy Invoice" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>$22.00</Table.Cell>
                            <Table.Cell>Dec 15, 2021</Table.Cell>
                            <Table.Cell>Dec 15, 2021</Table.Cell>
                            <Table.Cell>
                                <Label color="blue"> Pending</Label>
                            </Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="copy outline" color="green" title="Copy Invoice" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>$25.00</Table.Cell>
                            <Table.Cell>Dec 18, 2021</Table.Cell>
                            <Table.Cell>Dec 18, 2021</Table.Cell>
                            <Table.Cell>
                                <Label color="blue"> Pending</Label>
                            </Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="copy outline" color="green" title="Copy Invoice" link />
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
        </Tab.Pane>,
    },
    {
        menuItem: 'Unpaid Invoices',
        render: () => <Tab.Pane attached={false}>
            <div className="commonTable">
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Invoice Number <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Client Name <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Date <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Total <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Overdue <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Outstanding <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$452.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$452.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$553.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$553.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$673.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$673.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
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
        </Tab.Pane>,
    },
    {
        menuItem: 'Overdue Invoices',
        render: () => <Tab.Pane attached={false}>
            <div className="commonTable">
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Invoice Number <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Client Name <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Date <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Total <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Overdue <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Outstanding <Icon name="sort" /></Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$673.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$673.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$452.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$452.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>595625</Link></Table.Cell>
                            <Table.Cell><Link to={`${env.PUBLIC_URL}/dashboard/customer-detail`}>Jane Doe</Link></Table.Cell>
                            <Table.Cell>September 14, 2020</Table.Cell>
                            <Table.Cell>$553.00</Table.Cell>
                            <Table.Cell>441 days</Table.Cell>
                            <Table.Cell>$553.00</Table.Cell>
                            <Table.Cell>
                                <Icon name="edit outline" color="blue" title="Edit" link />
                                <Icon name="alarm outline" color="green" title="Reminder" link />
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
        </Tab.Pane>,
    },
]
const Options = [
    { key: 'Today', value: 'Today', text: 'Today' },
    { key: 'Yesterday', value: 'Yesterday', text: 'Yesterday' },
    { key: 'Week', value: 'Week', text: 'Week' },
    { key: 'Month', value: 'Month', text: 'Month' },
    { key: 'Year', value: 'Year', text: 'Year' },
]

const Dashboard = () => {

    const [options, setObject] = useState({
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }

    })
    const [series, setSeries] = useState([{
        name: 'Invoiced',
        data: [1800, 2000, 1500, 510, 1500, 900, 811, 1255, 1300],
        color: '#2485b1'
    }, {
        name: 'Received',
        data: [1500, 900, 2000, 811, 1500, 105, 2000, 1541, 1800],
        color: '#ffa800'
    }, {
        name: 'Outstanding',
        data: [1455, 922, 755, 665, 1804, 1600, 1754, 1154, 1054],
        color: '#ff0000'
    }])
    return (
        <Grid>
            <Grid.Column width={16}>
                <Header as="h2">Dashboard</Header>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h3">Invoice Summary</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                <Form.Select defaultValue="Today" options={Options} />
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="invoiceSummary purple">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={Image1}
                        />
                        <Card.Header>$57,456</Card.Header>
                        <Card.Meta>Total Collected</Card.Meta>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="invoiceSummary red">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={Image2}
                        />
                        <Card.Header>$5,544</Card.Header>
                        <Card.Meta>Total Outstanding</Card.Meta>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="invoiceSummary yellow">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={Image3}
                        />
                        <Card.Header>$8,524</Card.Header>
                        <Card.Meta>Total Overdue</Card.Meta>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={4}>
                <Card className="invoiceSummary blue">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={Image4}
                        />
                        <Card.Header>20</Card.Header>
                        <Card.Meta>Total Clients</Card.Meta>
                    </Card.Content>
                </Card>
            </Grid.Column>
            <Grid.Column width={16} verticalAlign="middle">
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h3">Invoice Summary</Header>
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width="500"
                />
            </Grid.Column>
            <Grid.Column width={8}>
                <Card fluid className="recentActivity">
                    <Card.Content>
                        <Card.Header>Recent Activity</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <List relaxed>
                            <List.Item>
                                <Image avatar src={Profile} />
                                <List.Content>
                                    <List.Header>15 Hours ago</List.Header>
                                    <List.Description>
                                        Invoice created for <b>Jane Doe</b>
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src={Profile} />
                                <List.Content>
                                    <List.Header>20 hours ago</List.Header>
                                    <List.Description>
                                        Invoice created for <b>Steve Smith</b>
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src={Profile} />
                                <List.Content>
                                    <List.Header>1 day ago</List.Header>
                                    <List.Description>
                                        Jane Doe paid his outstanding amount
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <Image avatar src={Profile} />
                                <List.Content>
                                    <List.Header>2 days ago</List.Header>
                                    <List.Description>
                                        Invoice created for <b>Jane Doe</b>
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Card.Content>
                </Card>
            </Grid.Column>
        </Grid>
    );
};


export default Dashboard;