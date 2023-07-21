import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
const Login = () => {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onFinish();
        }
    };
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
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập E-mail",
                    },
                    {
                        type: "email",
                        message: "E-mail không đúng định dạng",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="E-Mail"
                    onPressEnter={onFinish}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onPressEnter={onFinish}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ marginRight: 10 }}
                    onKeyPress={handleKeyPress}
                >
                    Đăng nhập
                </Button>
                <a className="login-form-forgot" href="">
                    Quên mật khẩu ?
                </a>
            </Form.Item>
        </Form>
    );
};
export default Login;
