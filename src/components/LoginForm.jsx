import React, { useState, useEffect } from "react";
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Carousel,
  Card,
  Popconfirm,
  message,
  Row,
  Col,
  Divider,
} from "antd";
import "antd/dist/antd.css";
import "../styles/index2.css";


import Mock from "./Mock";

const About = (props) => {
  const { getFieldDecorator } = props.form;
  // const email=useState()
  // const password=useState()
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        if (
          values.email === "admin.smart@gmail.com" &&
          values.password === "admin123"
        ) {
          localStorage.setItem("emailData", "admin.smart@gmail.com");
          localStorage.setItem("passwordData", "admin123");
          message.success("Welcome Admin ,You have logged in successfully")
        }
      }
    });
  };

  

  return getEmail && getPassword ? (
    <Mock/>
  ) : (
   
      <Row>
        <Col span={12}>
          <Card
            bodyStyle={{ padding: "0" }}
            style={{
              boxShadow: "30px 38px 34px 35px rgba(208, 216, 243, 0.6)",
            }}
            className="in1"
          >
            <h1 className="yes">Login</h1>
            {/* ERROR !*/}

            <Form className="login-form1" onSubmit={handleSubmit}>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: "#001122" }} />}
                    placeholder="Email Address"
                    // ref={email}
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input a password",
                    },
                  ],
                })(
                  <Input.Password
                    prefix={<Icon type="lock" style={{ color: "#001122" }} />}
                    placeholder="Password"
                    // ref={password}
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
                <Popconfirm title="Please contact your administrator">
                <a className="login-form-forgot" href="/">
                  Forgot password
                </a>
                </Popconfirm>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    backgroundColor: "#001122",
                    border: "2px solid white",
                  }}
                  block
                >
                  Log in
                </Button>

                <Divider style={{ borderColor: "black" }}>Or </Divider>
                <Popconfirm title="Please contact your administrator">
                  <a href="/" className="sign">Signup</a>
                </Popconfirm>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col span={12}>
          <div className="liimo">
            <Carousel autoplay dots={false}>
              <div className="st1">
                <img
                  src="https://img.freepik.com/free-vector/vector-illustration-winter-landscape_1441-130.jpg?size=626&ext=jpg&ga=GA1.1.161645657.1660050336&semt=sph"
                  height="385px"
                  alt=""
                />
              </div>
              <div className="st2">
                <img
                  src="https://img.freepik.com/free-vector/winter-background-paper-style_52683-50241.jpg?size=626&ext=jpg&ga=GA1.1.161645657.1660050336&semt=sph"
                  height="385px"
                  alt=""
                />
              </div>
              <div className="st3">
                <img
                  src="https://img.freepik.com/premium-photo/snow-background-tree_79161-2.jpg?size=626&ext=jpg&ga=GA1.2.161645657.1660050336&semt=sph"
                  height="385px"
                  alt=""
                />
              </div>
              <div className="st4">
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-tree-winter-landscape-late-evening-snowfall-digital-art-illustration-painting_743201-2610.jpg?size=626&ext=jpg&ga=GA1.1.161645657.1660050336&semt=sph"
                  height="385px"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
  
  );
};
const LoginForm = Form.create({ name: "LoginForm" })(About);

export default LoginForm;
