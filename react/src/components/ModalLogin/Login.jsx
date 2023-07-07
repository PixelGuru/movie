import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
const Login = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };
    return (
        <Form
            style={{ textAlign: "center" }}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your Username!",
                    },
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-Mail"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ marginRight: 10 }}
                >
                    Log in
                </Button>
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
            </Form.Item>
        </Form>
    );
};
export default Login;
