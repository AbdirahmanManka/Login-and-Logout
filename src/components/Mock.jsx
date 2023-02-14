import {useState,useEffect} from "react"
import {Form, Row, Col, Select, Input, DatePicker, Checkbox, Button, message,Popconfirm} from "antd"
import {AiOutlineRight} from "react-icons/ai"
import { motion, useAnimation} from "framer-motion"

import "../styles/Tab.css"
import "antd/dist/antd.css"

function MockLayout(props){

    const controlRequired = useAnimation()
    const controlOptional = useAnimation()

    const handleSubmit = () => {
        // event.preventDefault()
        props.form.validateFieldsAndScroll((err, _) => {
            if (!err) {
                message.success("Completed")
            }
             else {
                 message.error("Fill all required fields")
            }
        })
    }
    
    const [optional, setOptional] = useState(false)
    const toggleOptional = () => setOptional(!optional)
    const [createUser, setCreateUser] = useState(false)
    const toggleCreateUser = ()=> setCreateUser(!createUser)
    const {getFieldDecorator} = props.form
    const layout = {
        labelCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 5}, lg: { span: 10} },
        wrapperCol: { xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 }, lg: { span: 11 } },
        row: { gutter: [5, 0] },
        col: { span: { xs: 24, sm: 24, md: 12, lg: 12} }
    }
    const style = {
        style: {
            borderRadius: "25px"
        }
    }
    function confirm(e) {
        console.log(e);
        message.success('Logout successful');
      }
      
      function cancel(e) {
        console.log(e);
        message.error('Continue using our services');
      }
    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();


    }
    const events= ['click','scroll','load','keydown']
    const eventHandler =(eventType)=>{
      
    };
    
   useEffect(()=>{
    addEvents();
    
    return (()=>{
        
        removeEvents();
    })
},[])
const addEvents=()=>{
    
    events.forEach(eventName=>{
        window.addEventListener(eventName,eventHandler)
    })
    
}
const removeEvents=()=>{
    events.forEach(eventName=>{
        window.removeEventListener(eventName,eventHandler)
    })
};

    

    return (
        <div className={"actual-wrapper"}>
            <Form colon={false} onSubmit={handleSubmit}>
               <div className={"form-wrapper"}>
                   <motion.div className={`required `}
                               animate={controlRequired}
                   >
                       <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>

                       </Row>
                       <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Title"} >
                                   {
                                       getFieldDecorator("title", {rules: [{required: true, message: "Please Select a title"}]})(
                                           <Select allowClear={true} style={{borderRadius: "50px"}}>
                                               <Select.Option value={"Mr"}>Mr</Select.Option>
                                               <Select.Option value={"Miss"}>Miss</Select.Option>
                                               <Select.Option value={"Mrs"}>Mrs</Select.Option>
                                               <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                               <Select.Option value={"Others"}>Others</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Surname"}>
                                   {
                                       getFieldDecorator("surname", {rules: [{required: true, message: "Please input the name"}]})(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span} style={{height: "auto"}}>
                               <Form.Item label={"First Name"} >
                                   {
                                       getFieldDecorator("given_name", {rules: [{required: true, message: "Please input the name"}]})(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Gender"}>
                                   {
                                       getFieldDecorator("gender", {rules: [{required: true, message: "Please select the gender"}]})(
                                           <Select allowClear={true}>
                                               <Select.Option value={"M"}>Male</Select.Option>
                                               <Select.Option value={"F"}>Female</Select.Option>
                                               <Select.Option value={"O"}>Others</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Marital Status"}>
                                   {
                                       getFieldDecorator("marital_status", {rules: [{required: true, message: "Please select the marital status"}]})(
                                           <Select allowClear={true}>
                                               <Select.Option value={"SINGLE"}>Single</Select.Option>
                                               <Select.Option value={"MARRIED"}>Married</Select.Option>
                                               <Select.Option value={"DIVORCED"}>Divorced</Select.Option>
                                               <Select.Option value={"WIDOWED"}>Widowed</Select.Option>
                                               <Select.Option value={"COMPLICATED"}>Complicated</Select.Option>
                                               <Select.Option value={"OTHERS"}>Others</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Date of Birth"}>
                                   {
                                       getFieldDecorator("date_of_birth", {rules: [{required: true, message: "Please input the date of birth"}]})(
                                           <DatePicker style={{width: "100%"}}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Email"}>
                                   {
                                       getFieldDecorator("email", {rules: [{required: true, type: "email"}]})(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Mobile No."}>
                                   {
                                       getFieldDecorator("mobile", {rules: [{required: true, message: "Please enter the phone number"}]})(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Department"}>
                                   {
                                       getFieldDecorator("department_code", {rules: [{required: true, message: "Please select the department"}]})(
                                           <Select allowClear={true}>
                                               <Select.Option value={1}>Consultation</Select.Option>
                                               <Select.Option value={2}>Triage</Select.Option>
                                               <Select.Option value={3}>Nursing</Select.Option>
                                               <Select.Option value={4}>Pharmacy</Select.Option>
                                               <Select.Option value={5}>Laboratory</Select.Option>
                                               <Select.Option value={6}>Reception</Select.Option>
                                               <Select.Option value={7}>Radiology</Select.Option>
                                               <Select.Option value={8}>Accounts</Select.Option>
                                               <Select.Option value={9}>Logistics</Select.Option>
                                               <Select.Option value={10}>Administration</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Employee Category"}>
                                   {
                                       getFieldDecorator("employee_category", {rules: [{required: true, message: "Please select the employee category"}]})(
                                           <Select maxTagCount={2} >
                                               <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                               <Select.Option value={"Lab_Tech"}>Lab Tech</Select.Option>
                                               <Select.Option value={"Nurse"}>Nurse</Select.Option>
                                               <Select.Option value={"Pharmacist"}>Pharmacist</Select.Option>
                                               <Select.Option value={"Radiologist"}>Radiologist</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Staff Number"}>
                                   {
                                       getFieldDecorator("staff_number", {rules: [{required: true, message: "Please enter the staff number"}]})(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Facility"}>
                                   {
                                       getFieldDecorator("facility_id", {rules: [{required: true, message: "Please select the facility"}]})(
                                           <Select allowClear >
                                               <Select.Option value={1}>Smart International</Select.Option>
                                               <Select.Option value={6}>Smart 2</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                       </Row>
                       <Row gutter={8}>
                           <Col span={24} >
                               <Form.Item label={"Create user account"}>
                                   {
                                       getFieldDecorator("create_user_account")(
                                           <Checkbox onChange={toggleCreateUser}></Checkbox>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           {
                               createUser && <>
                                   <Col span={12}>
                                       <Form.Item label={"Roles"}>
                                           {
                                               getFieldDecorator("roles")(
                                                   <Select allowClear  mode={"multiple"}>
                                                       <Select.Option value={"User"}>User</Select.Option>
                                                       <Select.Option value={"Admin"}>Admin</Select.Option>
                                                       <Select.Option value={"Doctor"}>Doctor</Select.Option>
                                                       <Select.Option value={"Nurse"}>Nurse</Select.Option>
                                                       <Select.Option value={"Lab Tech"}>Lab Tech</Select.Option>
                                                   </Select>
                                               )
                                           }
                                       </Form.Item>
                                   </Col>
                                   <Col span={12}>
                                       <Form.Item label={"Username"}>
                                           {
                                               getFieldDecorator("username")(
                                                   <Input {...style}/>
                                               )
                                           }
                                       </Form.Item>
                                   </Col>
                               </>
                           }
                       </Row>
                   </motion.div>
                   <Button  style={{borderRadius: "30px", backgroundColor: "#001219", color: "#94d2bd"}} className={`my-button ${optional? "ease-in": ""}`} onClick={() => {
                       toggleOptional()
                       controlRequired.start({
                           scaleX: 0.7,
                           transition: {
                               duration: 0.5
                           }
                       })
                       return controlOptional.start({
                           opacity: 1,
                           transition: {
                               duration: 1,
                               delay: 0.5
                           }
                       })
                   }
                   }>Fill Optional data</Button>
                   <AiOutlineRight size={20} className={`arrow ${optional? "ease-in": ""}`} onClick={()=> {
                       toggleOptional()
                       controlRequired.start({
                           scaleX: 1
                       })
                       return controlOptional.start({
                           opacity: 0,
                           transition: {
                               duration: 0.5
                           }
                       })
                   }
                   }/>
                   <motion.div className={`optional`}
                        animate={controlOptional}
                               initial={{
                                   opacity: 0
                               }}
                   >
                       <Row gutter={layout.row.gutter} type={"flex"} justify={"start"}>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Middle Name"}>
                                   {
                                       getFieldDecorator("middle_name")(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Tel No."}>
                                   {
                                       getFieldDecorator("phone_number")(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Specialization"}>
                                   {
                                       getFieldDecorator("specialization")(
                                           <Select/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Country"}>
                                   {
                                       getFieldDecorator("country")(
                                           <Select allowClear={true}>
                                               <Select.Option value={"Kenya"}>Kenya</Select.Option>
                                               <Select.Option value={"Uganda"}>Uganda</Select.Option>
                                               <Select.Option value={"Tanzania"}>Uganda</Select.Option>
                                           </Select>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Town"}>
                                   {
                                       getFieldDecorator("town")(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"Postal Code"}>
                                   {
                                       getFieldDecorator("postal_code")(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                           <Col {...layout.col.span}>
                               <Form.Item label={"License No."}>
                                   {
                                       getFieldDecorator("license_no")(
                                           <Input {...style}/>
                                       )
                                   }
                               </Form.Item>
                           </Col>
                       </Row>
                   </motion.div>
               </div>
                <Row>
                    <Col offset={20}>
                        <Button htmlType={"submit"} style={{backgroundColor: "#001219", borderRadius: "20px", color: "#94d2bd"}}>Submit</Button>

                        
                    </Col>
                    <Popconfirm
    title="Are you sure you want to logout?"
    onConfirm={handleClick}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
  <Button type='danger' style={{color:"white"}} className='btn1'>Logout</Button> 
  </Popconfirm>
                </Row>
            </Form>
            
        </div>
    )
}




const Mock = Form.create({name: "EmployeesForm"})(MockLayout)
export default Mock