import { useState } from 'react'
import { Grid, Header, Accordion, Menu, Form, Button, Table, Input, Select, Dropdown, Checkbox } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './UpdateInvoice.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import { env } from '../../shared/functional/global-import';



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




const CopyInvoice = () => {
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
            <Grid.Column width={16}>
                <Header as="h2">Copy of Invoice</Header>
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
                                <Checkbox toggle checked={isCompany} onChange={(e, data) => setIsCompany(data.checked)} />
                                <span>Company</span>
                            </div>
                        </Accordion.Title>                        
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
                                    <Grid.Column>
                                        {isCompany ? <Dropdown
                                            options={companyOptions}
                                            placeholder='Search & Select Company'
                                            search
                                            selection
                                            fluid
                                            allowAdditions
                                            additionLabel='New Company: '
                                            value={currentCompanyValue}
                                            onAddItem={handleCompanyAddition}
                                            onChange={handleCompanyChange}
                                        />

                                            :


                                            <Dropdown
                                                options={IndividualValue}
                                                placeholder='Search & Select Individual'
                                                search
                                                selection
                                                fluid
                                                allowAdditions
                                                additionLabel='New Individual: '
                                                value={currentIndividualValue}
                                                onAddItem={handleIndividualAddition}
                                                onChange={handleIndividualChange}
                                            />
                                        }
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Customer Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Input placeholder="Invoice Number" fluid />
                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="left" className="subCaptionTitle">
                                        <p>Looks like you are adding a new customer, click on next to fill the details.</p>
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
                            content='Payable To'
                            index={2}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 2}
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
                            active={activeIndex === 3}
                            content='Bill To'
                            index={3}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 3}
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
                            active={activeIndex === 4}
                            content='Items'
                            index={4}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 4}
                        >
                            <Form size="large">

                                {inputRows.map((elem, i) => (
                                    <Grid >
                                        <Grid.Column width={3}>
                                            <Dropdown
                                                options={options}
                                                placeholder='Search & Select Item'
                                                search
                                                selection
                                                fluid
                                                allowAdditions
                                                additionLabel='New Item: '
                                                value={currentValue}
                                                onAddItem={handleAddition}
                                                onChange={handleItemChange}
                                            />
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Form.Input placeholder="Item Description" fluid />
                                        </Grid.Column>
                                        <Grid.Column width={2}>
                                            <Form.Input placeholder="Quantity" fluid />
                                        </Grid.Column>
                                        <Grid.Column width={2}>
                                            <Form.Input icon="dollar sign" iconPosition="left" placeholder="Price" fluid />
                                        </Grid.Column>
                                        <Grid.Column width={2}>
                                            <Form.Input icon="dollar sign" iconPosition="left" placeholder="Discount" fluid />
                                        </Grid.Column>
                                        <Grid.Column width={2} verticalAlign="middle">
                                            <span>Total:$200.00</span>
                                        </Grid.Column>
                                        <Grid.Column width={1} textAlign="right">
                                            <Button size="large" onClick={() => setInputRows(inputRows.length > 1 ? inputRows.filter((item, ind) => ind !== i) : inputRows)} color='red' icon='close' />
                                        </Grid.Column>
                                    </Grid>
                                ))}
                                <Grid>
                                    <Grid.Column width={16}>
                                        <Button size="large" icon='plus' onClick={() => setInputRows([...inputRows, 1])} content="Add more item" />
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Table singleLine basic='very'>
                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>Subtotal</Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$700.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Tax type</Table.Cell>
                                                    <Table.Cell colSpan="2">
                                                        <Select placeholder="Choose Type" options={taxOptions} />
                                                    </Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Tax</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Shipping</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell><b>Total</b></Table.Cell>
                                                    <Table.Cell colSpan="2" textAlign="right" colSpan="2"><b>$700.00</b></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Amount Paid</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Adjustment</Table.Cell>
                                                    <Table.Cell><Input placeholder="0.00" icon="dollar sign" iconPosition="left" /></Table.Cell>
                                                    <Table.Cell textAlign="right" colSpan="2">$0.00</Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>Amount Due</Table.Cell>
                                                    <Table.Cell colSpan="2" textAlign="right" colSpan="2">$700.00</Table.Cell>
                                                </Table.Row>
                                            </Table.Body>
                                        </Table>
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
                            active={activeIndex === 5}
                            content='Options/Message'
                            index={5}
                            onClick={handleClick}
                        />
                        <Accordion.Content
                            active={activeIndex === 5}
                        >
                            <Form size="large">
                                <Grid >
                                    <Grid.Column width={16}>
                                        <Header as="h5">Send Invoice Via</Header>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Radio label='Email' name="radioGroup" value="Email" checked={value === "Email"} onChange={handleChange} />
                                                <Form.Radio label='Text' name="radioGroup" value="Text" checked={value === "Text"} onChange={handleChange} />
                                                <Form.Radio label='Email & Text' name="radioGroup" value="EmailText" checked={value === "EmailText"} onChange={handleChange} />
                                                <Form.Radio label='None' name="radioGroup" value="None" checked={value === "None"} onChange={handleChange} />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        <Form.Input placeholder="Email" />
                                    </Grid.Column>
                                    <Grid.Column width={6}>
                                        {/* <Form.Input type="date" placeholder="Date Due" /> */}
                                        <DatePicker onChange={(date) => setStartDate(date)} placeholderText="Due Date" />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <Header as="h5">Transaction Type</Header>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Radio label='Sale' name="radioGroup" value="Sale" checked={value === "Sale"} onChange={handleTransactionChange} />
                                                <Form.Radio label='Authorization' name="radioGroup" value="Authorization" checked={value === "Authorization"} onChange={handleTransactionChange} />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Form>
                                            <Form.Group inline>
                                                <Form.Checkbox checked={allowPartialPayment} onChange={(e, data) => {

                                                    setAllowPartialPayment(data.checked)
                                                    console.log(data, 'Checkbox')
                                                }} label='Allow Partial Payment' />
                                                {allowPartialPayment && <Form.Select placeholder='Partial Payment Type' options={paymentOptions} />}
                                                <Form.Checkbox label='Require Shipping Details' />
                                                <Form.Checkbox label='Pay via ACH' checked={allowACHPayment} onChange={(e, data) => {

                                                    setAllowACHPayment(data.checked)
                                                    console.log(data, 'Checkbox')
                                                }} />
                                                {allowACHPayment &&
                                                    <Form.Select placeholder='ACH Processor' options={achOptions} />
                                                }
                                                <Form.Checkbox label='Pay via Mail' />
                                            </Form.Group>
                                        </Form>
                                    </Grid.Column>
                                    <Grid.Column width={16}>
                                        <Form>
                                            <Form.TextArea rows="3" placeholder="Message" />
                                        </Form>

                                    </Grid.Column>
                                    <Grid.Column width={16} textAlign="right">
                                        <Button className="btn-primary">Mark as Paid</Button>
                                        <Button className="btn-primary" onClick={() => setActiveIndex(activeIndex - 1)}>Prev</Button>
                                        <Button className="btn-secondary" as={Link} to={`${env.PUBLIC_URL}/dashboard/invoice-template`}>Preview Invoice</Button>
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





export default CopyInvoice;