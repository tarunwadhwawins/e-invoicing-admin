import React from 'react'
import { Button, Grid, Modal, Image, Divider, Form } from 'semantic-ui-react'
import User from "../../assets/images/team-profile.png"

const role = [
    { key: 'Admin', text: 'Admin', value: 'Admin' },
    { key: 'Sub-admin', text: 'Sub-admin', value: 'Sub-admin' },
]

const AddMemberModal = ({ open, setOpen }) => {
    return (
        <div>
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}>
                <Modal.Header>Add Team Member</Modal.Header>
                <Modal.Content>
                    <Grid>
                        <Grid.Column width={4} textAlign="center">
                            <Image src={User} size='medium' bordered />
                            <Divider hidden />
                            <Button icon='upload' basic />
                            <Button icon='camera' basic />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Form>
                                <Grid>
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="First Name" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="Last Name" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="Email" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="Phone Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Select placeholder="Select Role"  options={role} fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                            <Form.Checkbox className="commonToggle" toggle label="Active"/>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Button className="btn-primary" onClick={() => setOpen(false)}>Cancel </Button>
                    <Button className="btn-secondary" onClick={() => setOpen(false)}>Save </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}

export default AddMemberModal
