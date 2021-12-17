import { useState } from 'react'
import { Grid, Header, Accordion, Menu, Form, Button, Table, Input, Select, Dropdown, Checkbox, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Reports.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DragDrop from "../../assets/images/drag-and-drop-tool.png"


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
    { key: '10/01/21', value: '10/01/21', text: '10/01/21' },
    { key: '11/01/21', value: '11/01/21', text: '11/01/21' },
    { key: '12/01/21', value: '12/01/21', text: '12/01/21' },
    { key: '13/01/21', value: '13/01/21', text: '13/01/21' },
    { key: '14/01/21', value: '14/01/21', text: '14/01/21' },
    { key: '15/01/21', value: '15/01/21', text: '15/01/21' },
    { key: '16/01/21', value: '16/01/21', text: '16/01/21' },
]
const agreementOptions = [
    { key: 'Agreement One', value: 'Agreement One', text: 'Agreement One' },
    { key: 'Agreement Two', value: 'Agreement Two', text: 'Agreement Two' },
    { key: 'Agreement Three', value: 'Agreement Three', text: 'Agreement Three' },
    { key: 'Agreement Four', value: 'Agreement Four', text: 'Agreement Four' },
    { key: 'Agreement Five', value: 'Agreement Five', text: 'Agreement Five' },
]

const initialRows = [1];




const Reports = () => {
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
                <Header as="h2">Reports</Header>
            </Grid.Column>
            <Grid.Column width={8} verticalAlign="right">
                <Button as={Link} to={`${env.PUBLIC_URL}/dashboard/user-setting`} className="btn-primary">Back</Button>
            </Grid.Column>
            <Grid.Column width={16}>
                <Accordion as={Menu} vertical className="createInvoice">
                    <Form size="large" className="reportCol">
                        <Grid columns="3">                                    
                            <Grid.Column>
                                <Header as="h3">Report Name</Header>
                                <Form.Input placeholder="Report Name" fluid />
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3">Start Date</Header>
                                <DatePicker onChange={(date) => setStartDate(date)} placeholderText="Start Date" />
                            </Grid.Column>
                            <Grid.Column>
                                <Header as="h3">End Date</Header>
                                <DatePicker onChange={(date) => setStartDate(date)} placeholderText="End Date" />
                            </Grid.Column>
                                    
                                    
                            <Grid.Column width={16} textAlign="right">
                                <Button className="btn-secondary" onClick={() => setActiveIndex(activeIndex + 1)}>Download</Button>                                        
                            </Grid.Column>
                        </Grid>
                    </Form>
                    

                       

                </Accordion>
            </Grid.Column>
        </Grid>
    )
}





export default Reports;