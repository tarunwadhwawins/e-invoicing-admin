import React from 'react'
import { Grid, Header, Button, Table, Icon, Image, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import Logo from "../../assets/images/logo.png"


const InvoiceTemplate1 = () => {
    return (
        <Grid>
            
            <Grid.Column width={8} className="tempInvoiceDetail">
                <Image src={Logo} size="small"/>                
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="middle" className="tempInvoiceDetail">
                <Header as="h3">Invoice Number : #595625</Header>
                <Header as="h4"><span className="alternate-color-900">Company Name</span> : Steve Smith</Header>
                <Header as="h4"> <span className="alternate-color-900">Customer Number</span> : 5454652</Header>
                <Header as="h4"><span className="alternate-color-900">Issue Date</span> : 10/02/21</Header>
                <Header as="h4"><span className="alternate-color-900">Due Date</span> : 10/11/21</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h3" className="detailCaption">Payable To :</Header>
                <Header as="h3" className="removeM">Steve Smith</Header>
                <p>132, My Street, Kingston, New York 12401.</p>
                <p>janedoe@gmail.com</p>
                <p>(555) 555-1234</p>
            </Grid.Column>
            <Grid.Column width={8}>
                <Header as="h3" className="detailCaption">Bill To :</Header>
                <Header as="h3" className="removeM">Jane Doe</Header>
                <p>128, My Street, Kingston, New York 12401.</p>
                <p>smith@gmail.com</p>
                <p>(454) 655-556</p>
            </Grid.Column>
            <Grid.Column width={16}>
                <div className="commonTable">
                    <Table singleLine striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>Item <Icon name="sort" /></Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Discount</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Total</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Item 1</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Item 2</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">0.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>Item 3</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>Item 4</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                <Table.Cell textAlign="right">$300.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Subtotal</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$600.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Tax(Flat)</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Shipping</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Total</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Amount Paid</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Adjustment</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="4" textAlign="right">
                                    <Header as="h4">Amount Due</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                            </Table.Row>
                        </Table.Body>

                    </Table>
                </div>
            </Grid.Column>
            <Grid.Column width={16}>
                <Header>Message</Header>
                <Form>
                    <Form.TextArea rows="3" placeholder="Type your message" />
                </Form>
            </Grid.Column>
            <Grid.Column width={16}>
                <Header>Have question or need support?</Header> 
            </Grid.Column>
            <Grid.Column width={6} className="removeP">
                <p>Contact us admin@gmail.com</p>
            </Grid.Column>  
            <Grid.Column width={16} textAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/update-invoice`} className="btn-secondary"><Icon name="edit" /> Edit Invoice</Button>
                <Button className="btn-secondary" as={Link} to={`${env.PUBLIC_URL}/dashboard/send-invoice`}><Icon name="send" />Send Invoice</Button>
            </Grid.Column>
        </Grid>
    )
}

export default InvoiceTemplate1
