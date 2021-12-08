import React from 'react'
import { Grid, Header, Button, Table, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';
import Logo from "../../assets/images/logo.png"


const InvoiceDetail = () => {
    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Invoice Number : #454545</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                {/* <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice`} className='btn-primary' type='button'>Back</Button> */}
            </Grid.Column>
            <Grid.Column width={16}>
                <Image src={Logo} size="small"/>
                <Header as="h4"><span className="alternate-color-900">Company Name</span> : Lorem Ipsum</Header>
                <Header as="h4"> <span className="alternate-color-900">Customer Number</span> : 5454652</Header>
            </Grid.Column>
            <Grid.Column width={8}>
                <p>Payable To :</p>
                <Header as="h3">Nathaniel</Header>
                <p>132, My Street, Kingston, New York 12401.</p>
                <p>janedoe@gmail.com</p>
                <p>(555) 555-1234</p>
            </Grid.Column>
            <Grid.Column width={8}>
                <p>Bill To :</p>
                <Header as="h3">Gilbert Riley</Header>
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
                                <Table.HeaderCell textAlign="right">Price</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Qty</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Discount</Table.HeaderCell>
                                <Table.HeaderCell textAlign="right">Total</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Item 1</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$10.00</Table.Cell>
                                <Table.Cell textAlign="right">15</Table.Cell>
                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Item 2</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$20.00</Table.Cell>
                                <Table.Cell textAlign="right">5</Table.Cell>
                                <Table.Cell textAlign="right">0.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>Item 3</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$30.00</Table.Cell>
                                <Table.Cell textAlign="right">5</Table.Cell>
                                <Table.Cell textAlign="right">$50.00</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>Item 4</Table.Cell>
                                <Table.Cell> Lorem ipsum dolor, sit amet consectetur</Table.Cell>
                                <Table.Cell textAlign="right">$40.00</Table.Cell>
                                <Table.Cell textAlign="right">10</Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                                <Table.Cell textAlign="right">$300.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Subtotal</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$600.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Tax(Flat)</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Shipping</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$100.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Total</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Amount Paid</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Adjustment</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right">$0.00</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell colSPan="6" textAlign="right">
                                    <Header as="h4">Amount Due</Header>
                                </Table.Cell>
                                <Table.Cell textAlign="right"><Header as="h4">$800.00</Header></Table.Cell>
                            </Table.Row>
                        </Table.Body>

                    </Table>
                </div>
            </Grid.Column>
            <Grid.Column width={16}>
                <Header as="h4">Invoice Detail</Header>
                <p><span className="alternate-color-900">Due Date :</span> Dec 05, 2021</p>
                <p><span className="alternate-color-900">Ach :</span>  5545115</p>
                <p><span className="alternate-color-900">Account Name :</span>  BANK OF AMERICA</p>
                <p><span className="alternate-color-900">SWIFT code :</span>  55655</p>

                <Header>Message</Header>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab odit assumenda iusto dolore eligendi dolores quo, laudantium amet dignissimos nostrum impedit reiciendis error aperiam esse ad laboriosam velit laborum incidunt.</p>
            </Grid.Column>
        </Grid>
    )
}

export default InvoiceDetail
