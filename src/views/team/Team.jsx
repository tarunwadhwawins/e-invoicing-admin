import { Grid, Button, Form, Table, Icon, Label, Header, Dropdown, Menu } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import AddMemberModal from "./AddMemberModal";
import React, { useState } from 'react';
import { env } from '../../shared/functional/global-import';

const Team = () => {

    const [showAddMemberModal, setShowAddMemberModal] = useState(false)

    return (
        <Form size='large'>
            <AddMemberModal open={showAddMemberModal} setOpen={setShowAddMemberModal} />
            <Grid>
                <Grid.Column width={8} verticalAlign="middle">
                    <Header as="h2">Team</Header>
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/user-setting`} className="btn-primary">
                       Back
                    </Button>
                    <Button onClick={() => setShowAddMemberModal(true)} className="btn-secondary"><Icon name="plus" /> New Member</Button>
                </Grid.Column>
                <Grid.Column width={16}>
                    <div className="commonTable">
                        <Table singleLine>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Name <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Email <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Phone  <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Roles <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Active/Inactive <Icon name="sort" /></Table.HeaderCell>
                                    <Table.HeaderCell>Actions</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell><Link>Smith</Link></Table.Cell>
                                    <Table.Cell><Link>smith87@gmail.com</Link></Table.Cell>
                                    <Table.Cell>(789)-456-995</Table.Cell>
                                    <Table.Cell>
                                        <Label color='green'>Admin</Label>
                                    </Table.Cell>
                                    <Table.Cell><Form.Checkbox className="commonToggle" toggle /></Table.Cell>
                                    <Table.Cell>
                                        <Icon name="edit outline" color="blue" title="Edit" link />
                                        <Icon name="trash alternate outline" color="red" title="Delete" link />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Link>Joseph</Link></Table.Cell>
                                    <Table.Cell><Link>joseph77@gmail.com</Link></Table.Cell>
                                    <Table.Cell>(557)-887-678</Table.Cell>
                                    <Table.Cell>
                                        <Label color='green'>Admin</Label>
                                    </Table.Cell>
                                    <Table.Cell><Form.Checkbox className="commonToggle" toggle /></Table.Cell>
                                    <Table.Cell>
                                        <Icon name="edit outline" color="blue" title="Edit" link />
                                        <Icon name="trash alternate outline" color="red" title="Delete" link />
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell><Link>Robert</Link></Table.Cell>
                                    <Table.Cell><Link>robert77@gmail.com</Link></Table.Cell>
                                    <Table.Cell>(366)-777-333</Table.Cell>
                                    <Table.Cell>
                                        <Label color='blue'>Sub-admin</Label>
                                    </Table.Cell>
                                    <Table.Cell><Form.Checkbox className="commonToggle" toggle /></Table.Cell>
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
                <Grid.Column width={16} textAlign="right">
                    <Button className="btn-secondary" as={Link} to={`${env.PUBLIC_URL}/dashboard/user-setting`}>Save</Button>
                </Grid.Column>
            </Grid>
        </Form>
    );
};

export default Team;