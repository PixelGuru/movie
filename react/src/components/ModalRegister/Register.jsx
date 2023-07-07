import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Register = () => {
    const [form] = Form.useForm();
    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            "date-picker": fieldsValue["date-picker"].format("DD/MM/YYYY"),
        };
        console.log("Received values of form: ", values);
    };

    return (
        <Form
            layout="horizontal"
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
        >
            <Form.Item
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Please input your nickname!",
                        whitespace: true,
                    },
                    {
                        min: 3,
                        message: "Name must be minimum 3 characters.",
                    },
                ]}
            >
                <Input placeholder=" Full name" style={{ width: "400px" }} />
            </Form.Item>

            <Form.Item
                name="gender"
                rules={[
                    {
                        required: true,
                        message: "Please select gender!",
                    },
                ]}
            >
                <Select placeholder="select your gender" style={{ width: 180 }}>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="date-picker"
                rules={[
                    {
                        required: true,
                        message: "Please select birthday!",
                    },
                ]}
            >
                <DatePicker
                    placeholder="Birthday dd/mm/yyyy"
                    format="DD/MM/YYYY"
                    style={{ width: "400px" }}
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                ]}
            >
                <Input placeholder="E-Mail" style={{ width: "400px" }} />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                    {
                        min: 6,
                        message: "Password must be minimum 6 characters.",
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                    placeholder="Password"
                    style={{ width: "400px" }}
                />
            </Form.Item>

            <Form.Item
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                    "Password that you entered do not match!"
                                )
                            );
                        },
                    }),
                ]}
            >
                <Input.Password
                    placeholder="Confirm Password"
                    style={{ width: "400px" }}
                />
            </Form.Item>

            <Form.Item
                name="phone"
                rules={[
                    {
                        required: true,
                        message: "Please input your phone number!",
                    },
                ]}
            >
                <Input placeholder="Phone Number" style={{ width: "400px" }} />
            </Form.Item>

            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value
                                ? Promise.resolve()
                                : Promise.reject(
                                      new Error("Should accept agreement")
                                  ),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox style={{ color: "#fff" }}>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Register;
