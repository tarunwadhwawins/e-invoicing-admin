import React from 'react';
import './signin.scss';
import { Grid, Image, Form, Button } from 'semantic-ui-react'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'



import { env } from '../../shared/functional/global-import';



const Signin = () => {
    return (
        <div className="signIn">
            <div className="signInner">
                <Grid>
                    <Grid.Column width={16}>
                        <Image src={Logo} />
                    </Grid.Column>
                    <Grid.Column width={16}>
                        <Form>
                            <Form.Input fluid label='Username' placeholder='Enter Your Username' icon='user outline' iconPosition='left' />
                            <Form.Input fluid label='Password' placeholder='Enter Your Password' icon='lock' iconPosition='left' />
                            {/* <Link to={`${env.PUBLIC_URL}/dashboard/profile`} className="primary-color"> Sign Up</Link> */}

                            <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/dashboard`}  className='btn-secondary' type='button' fluid>Sign In</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    )
}

export default Signin
