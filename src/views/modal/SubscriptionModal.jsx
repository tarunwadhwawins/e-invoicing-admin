import React from 'react'
import { Button, Header, Image, Modal, Grid, Form, Checkbox } from 'semantic-ui-react'


const planOptions = [
    { key: 'Plan A', value: 'Plan A', text: ' Plan A' },
    { key: 'Plan B', value: 'Plan B', text: ' Plan B' },
    { key: 'Plan C', value: 'Plan C', text: ' Plan C' },
]
const durationOptions = [
  { key: 'Yearly', value: 'Yearly', text: ' Yearly' },
  { key: 'Quarterly', value: 'Quarterly', text: ' Quarterly' },
  { key: 'Monthly', value: 'Monthly', text: ' Monthly' },
]

function SubscriptionModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
    open={props.openModal}
    onClose={props.closeModal}
    size={"small"}
    >
      <Modal.Header>Edit Subscription</Modal.Header>
      <Modal.Content image>        
        <Modal.Description className="modalDescription">
        <Form size="large">
          <Grid>
            <Grid.Column width={8}>
                <h3>Subscription Plan</h3>
                <Form.Select placeholder="Duration" options={planOptions} fluid />
            </Grid.Column>
            <Grid.Column width={8}>
                <h3>Duration</h3>
                <Form.Select placeholder="Duration" options={durationOptions} fluid />
            </Grid.Column>
            <Grid.Column width={8}>
                <h3>No. of Invoices</h3>
                <Form.Input placeholder="No. of Invoices" fluid />
            </Grid.Column>
            <Grid.Column width={8}>
                <h3>Price</h3>
                <Form.Input placeholder="Price" fluid />
            </Grid.Column>
            <Grid.Column width={16}>
                <h3>Status</h3>
                <div className="subscriptionToggle">
                  <span className="planInactiveStatus">Inactive</span>
                    <Checkbox toggle />
                  <span className="planActiveStatus">Active</span>
                </div>
            </Grid.Column>
            <Grid.Column width={16}>
                <h3>Description</h3>
                <Form>
                  <Form.TextArea rows="3" placeholder="Message" />
                </Form>
            </Grid.Column>
            
          </Grid>
          
        </Form>
            
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button className="btn-primary">Cancel</Button>
        <Button className="btn-secondary">Update</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default SubscriptionModal