import { useState } from 'react'
import { Grid, Button, Menu , Form, Header,Icon, Image,Accordion, Table ,Input, Select, Dropdown, Checkbox  } from "semantic-ui-react"
import { Link } from 'react-router-dom'

import Logo from "../../assets/images/logo.png"
import { env } from '../../shared/functional/global-import';

const category = [
    { key: 'm', text: 'Category 1', value: 'Category 1' },
    { key: 'f', text: 'Category 2', value: 'Category 2' },
    { key: 'o', text: 'Category 3', value: 'Category 3' },
]

let options = [
    { key: 'Item 1', text: 'Item 1', value: 'Item 1' },
    { key: 'Item 2', text: 'Item 2', value: 'Item 2' },
    { key: 'Item 3', text: 'Item 3', value: 'Item 3' },
    { key: 'Item 4', text: 'Item 4', value: 'Item 4' },
]
let companyOptions = [
    { key: 'Company 1', text: 'Company 1', value: 'Company 1' },
    { key: 'Company 2', text: 'Company 2', value: 'Company 2' },
    { key: 'Company 3', text: 'Company 3', value: 'Company 3' },
    { key: 'Company 4', text: 'Company 4', value: 'Company 4' },
]
let IndividualValue = [
    { key: 'Individual 1', text: 'Individual 1', value: 'Individual 1' },
    { key: 'Individual 2', text: 'Individual 2', value: 'Individual 2' },
    { key: 'Individual 3', text: 'Individual 3', value: 'Individual 3' },
    { key: 'Individual 4', text: 'Individual 4', value: 'Individual 4' },
]
const paymentOptions = [
    { key: 'Line Item', value: 'Line Item', text: ' Line Item' },
    { key: 'Amount', value: 'Amount', text: ' Amount' },
]
const achOptions = [
    { key: 'Direct deposit ', value: 'Direct deposit ', text: ' Direct Deposit ' },
    { key: 'Direct payment', value: 'Direct payment', text: ' Direct Payment' },
]
const taxOptions = [
    { key: 'Percentage', value: 'Percentage', text: ' Percentage' },
    { key: 'Flat', value: 'Flat', text: ' Flat' },
]
const stateOptions = [
    { key: 'Alabama', value: 'Alabama', text: ' Alabama' },
    { key: 'Alaska', value: 'Alaska', text: ' Alaska' },
    { key: 'Arizona', value: 'Arizona', text: ' Arizona' },
    { key: 'Georgia', value: 'Georgia', text: ' Georgia' },
    { key: 'Florida', value: 'Florida', text: ' Florida' },
    { key: 'Mexico', value: 'Mexico', text: ' New Mexico' },
    { key: 'York', value: 'York', text: ' New York' },
]
const currencyOptions = [
    { key: 'United States dollar (USD)', value: 'United States dollar (USD)', text: ' United States dollar (USD)' },
    { key: 'Canadian dollar (CAD)', value: 'Canadian dollar (CAD)', text: ' Canadian dollar (CAD)' },
    { key: 'Chinese Renminbi Yuan (CNY)', value: 'Chinese Renminbi Yuan (CNY)', text: ' Chinese Renminbi Yuan (CNY)' },
    { key: 'Indian Rupee (INR)', value: 'Indian Rupee (INR)', text: ' Indian Rupee (INR)' },
    { key: 'Israel Shekel (ILS)', value: 'Israel Shekel (ILS)', text: ' Israel Shekel (ILS)' },
    { key: 'Kuwaiti Dinar (KWD)', value: 'Kuwaiti Dinar (KWD)', text: 'Kuwaiti Dinar (KWD)' },
    { key: 'United Arab Emirates Dirham (AED)', value: 'United Arab Emirates Dirham (AED)', text: 'United Arab Emirates Dirham (AED)' },
]
const countryOptions = [
    { key: 'usa', value: 'usa', text: 'USA' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
]


const initialRows = [1];



const BusinessProfile = () => {


    const [activeIndex, setActiveIndex] = useState(0)

    const [inputRows, setInputRows] = useState(initialRows)

    const [startDate, setStartDate] = useState(new Date());
    const [allowPartialPayment, setAllowPartialPayment] = useState(false)
    const [allowACHPayment, setAllowACHPayment] = useState(false)
    const [isCompany, setIsCompany] = useState(false)

    const [currentValue, setCurrentValue] = useState("");
    const [currentCompanyValue, setCompanyCurrentValue] = useState("");
    const [currentIndividualValue, setIndividualCurrentValue] = useState("");

    const handleAddition = (e, { value }) => {
        let a = { key: value, text: value, value: value }
        options = [...options, { ...a }]
    }
    const handleItemChange = (e, { value }) => {
        setCurrentValue(value)
    }
    const handleCompanyAddition = (e, { value }) => {
        let a = { key: value, text: value, value: value } 
        companyOptions = [...companyOptions, { ...a }]
    }
    const handleCompanyChange = (e, { value }) => {
        setCompanyCurrentValue(value)
    }
    const handleIndividualAddition = (e, { value }) => {
        let a = { key: value, text: value, value: value }
        currentIndividualValue = [...currentIndividualValue, { ...a }]
    }
    const handleIndividualChange = (e, { value }) => {
        setIndividualCurrentValue(value)
    }

    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(index)
    }

    const [value, setValue] = useState("");
    const handleChange = (e, { value }) => setValue(value);
    const handleTransactionChange = (e, { value }) => setValue(value);


    return (
        


        <Grid>
        <Grid.Column width={8}>
            <Header as="h2">Business Profile</Header>
        </Grid.Column>
        <Grid.Column width={8} textAlign="right">
            <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/profile`} className="btn-primary">Back</Button>
        </Grid.Column>
        <Grid.Column width={16}>
            <Accordion as={Menu} vertical className="createInvoice">               

                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 0}
                        content='Profile Details'
                        index={0}
                        onClick={handleClick}
                    />
                    <Accordion.Content
                        active={activeIndex === 0}
                    >   
                        <Grid>
                            <Grid.Column width={4} textAlign="center">
                                <div className="uploadImg">
                                    <Image src={Logo}/>
                                    {/* <Icon name="arrow up" /> */}
                                    {/* <span>Drag logo to upload</span> */}
                                </div>
                                
                                <Button className="btn-secondary"><Icon name="upload" /> Upload</Button>
                            </Grid.Column>
                                <Grid.Column width={12}>
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
                                            <Grid.Column width={8}>
                                                <h3 className="subCaption">Merchant ID</h3>
                                                <Form.Input className="readOnlyField" placeholder='5242442' fluid  readOnly/>
                                            </Grid.Column>
                                        </Grid>
                                    </Form>
                                </Grid.Column>

                                <Grid.Column width={16} textAlign="right">
                                    <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                </Grid.Column>
                        </Grid>
                    </Accordion.Content>
                </Menu.Item>

                <Menu.Item>
                    <Accordion.Title
                        active={activeIndex === 1}
                        content='Payable To'
                        index={1}
                        onClick={handleClick}
                    />
                    <Accordion.Content
                        active={activeIndex === 1}
                    >
                        <Form size="large">
                            <Grid columns="3">
                                <Grid.Column>
                                    <Form.Input placeholder="First Name" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Last Number" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Company" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Address Line 1" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Address Line 2" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Select placeholder="Country" options={countryOptions} fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="City" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Select placeholder="State" options={stateOptions} fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Zip Code" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Email" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Phone Number" fluid />
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Input placeholder="Fax" fluid />
                                </Grid.Column>
                                <Grid.Column width={16} textAlign="right">
                                    <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Save</Button>
                                </Grid.Column>
                            </Grid>
                        </Form>
                    </Accordion.Content>
                </Menu.Item>
                
                
            </Accordion>
        </Grid.Column>
        </Grid>




    )

}

export default BusinessProfile