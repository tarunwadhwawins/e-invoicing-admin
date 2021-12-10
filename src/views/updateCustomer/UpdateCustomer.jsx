import { useState } from 'react'
import { Grid, Header, Accordion, Menu, Form, Button,Icon , TextArea, Table, Input, Select, Dropdown, Tab, Checkbox } from 'semantic-ui-react'




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
const secCode = [
    { key: 'PPD (personal)', value: 'PPD (personal)', text: ' PPD (personal)' },
    { key: 'CCD (corporate)', value: 'CCD (corporate)', text: ' CCD (corporate)' },
    { key: 'WEB', value: 'WEB', text: ' WEB' },
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


const panes = [
    { menuItem: 'Bank', render: () => 
    <Tab.Pane>
        <Grid columns="3">
            <Grid.Column width="8">
                <Form.Input placeholder="Account Number" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                <Form.Input placeholder="Routing Number" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                <Form.Input placeholder="Account Type" fluid />
            </Grid.Column>
            <Grid.Column width="8">
                {/* <Form.Input placeholder="SEC Code" fluid /> */}
                <Form.Select placeholder="SEC Code" options={secCode} fluid />
            </Grid.Column>
            <Grid.Column width={16} className="rightAlign">
                <Button className="btn-secondary"><Icon name="plus" />Add Account</Button>
            </Grid.Column>
        </Grid>
    </Tab.Pane> },
    { menuItem: 'Card', render: () => 
    <Tab.Pane>
        <Grid columns="3">
            <Grid.Column width="10">
                <h3>Card Number</h3>
                <Form.Input placeholder="XXXX XXXX XXXX XXXX" fluid />
            </Grid.Column>
            <Grid.Column width="3">
                <h3>Exp.</h3>
                <Form.Input placeholder="MM/YY" fluid />
            </Grid.Column>
            <Grid.Column width="3">
                <h3>CVC No.</h3>
                <Form.Input placeholder="XXX" fluid />
            </Grid.Column>
            <Grid.Column width={16} className="rightAlign">
                <Button className="btn-secondary"><Icon name="plus" />Add Card</Button>
            </Grid.Column>
        </Grid>
    </Tab.Pane> },
  ]
  

  
const initialRows = [1];


const UpdateCustomer = () => {

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

    
    return ( 
        <Grid>
            <Grid.Column width={8} verticalAlign="middle">
                <Header as="h2">Update Customer</Header>
            </Grid.Column>
            <Grid.Column width={16}>
                <Accordion as={Menu} vertical className="createInvoice">
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={handleClick}
                        ><div className="indiviCompany">
                                <span>Individual</span>
                                <Checkbox toggle onChange={(e, data) => setIsCompany(data.checked)} />
                                <span>Company</span>
                            </div>
                        </Accordion.Title>
                        <Accordion.Content
                            active={activeIndex === 0}>
                            <Grid.Column width={12}>
                                <h3 className="idCaption">Customer Id: <span>52424252</span></h3>
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Form.Input placeholder="Description:" fluid />
                            </Grid.Column>
                            <Grid.Column width={12} className="textField">
                                <Form.TextArea placeholder="Note" fluid />
                            </Grid.Column>
                        </Accordion.Content>
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 1}
                            content='Individual Name'
                            index={1}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 1}
                        >
                            <Form size="large">
                                <Grid columns="3">
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="Customer Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Form.Input placeholder="Merchant ID" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>                                 
                                </Grid>
                                </Form>
                        </Accordion.Content>
                    </Menu.Item>

                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 2}
                            content='Billing'
                            index={2}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 2}
                        >
                            <Form size="large">
                                <Grid columns="3">
                                <Grid.Column width={16}>
                                        <Form.Checkbox className="commonToggle" label="Require Billing Only on Payment" toggle />
                                    </Grid.Column>
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
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 3}
                            content='Shipping'
                            index={3}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 3}
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
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>
                                    </Grid.Column>
                                </Grid>
                            </Form>
                        </Accordion.Content>
                    </Menu.Item>
                    <Menu.Item>
                        <Accordion.Title
                            active={activeIndex === 4}
                            content='Payment Details'
                            index={4}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 4}
                        >
                            <Grid.Column width={16} className="tabSection">
                                 <Tab menu={{ text: true }} panes={panes} />                                 
                            </Grid.Column>
                            <Grid.Column width={16} textAlign="right" className="rightAlign">
                                <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Update</Button>
                            </Grid.Column>
                        </Accordion.Content>
                    </Menu.Item>
                    
                </Accordion>
            </Grid.Column>
            
        </Grid>
    )

}

export default UpdateCustomer