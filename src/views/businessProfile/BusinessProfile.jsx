import { Grid, Button, Icon, Form, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'
import { env } from '../../shared/functional/global-import';

const category = [
    { key: 'm', text: 'Category 1', value: 'Category 1' },
    { key: 'f', text: 'Category 2', value: 'Category 2' },
    { key: 'o', text: 'Category 3', value: 'Category 3' },
]


const BusinessProfile = () => {

    return (
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Business Profile</Header>
            </Grid.Column>
            <Grid.Column width={8} textAlign="right">
                <Button  as={Link} to={`${env.PUBLIC_URL}/dashboard/user-setting`} className="btn-primary">Back</Button>
            </Grid.Column>
          
            <Grid.Column width={16}>
                <Form size='large'>
                    <Grid>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Business Name' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.TextArea placeholder='Business Address' rows="1" fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Business Email Address' fluid />
                        </Grid.Column>

                        <Grid.Column width={8}>
                            <Form.Input placeholder='Phone Number' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='State' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='City' fluid />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Form.Input placeholder='Zip Code' fluid />
                        </Grid.Column>


                        <Grid.Column width={8}>
                            <Form.Select placeholder='Business Category' fluid options={category} />
                        </Grid.Column>
                    </Grid>
                </Form>
            </Grid.Column>
            <Grid.Column width={16} textAlign="right">
                <Button className="btn-secondary"  as={Link} to={`${env.PUBLIC_URL}/dashboard/user-setting`}>Save</Button>
            </Grid.Column>
        </Grid>
    )

}

export default BusinessProfile