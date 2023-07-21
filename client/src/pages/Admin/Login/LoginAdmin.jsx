import { Button, Form, Input } from "antd";
import { FormLoginAdmin, Layout } from "./styled";

const onFinish = (values) => {
    console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const LoginAdmin = () => {
   
    const [form] = Form.useForm();
    const onLogin = async () => {};
    return (
        <Layout>
            <FormLoginAdmin
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input style={{ width: 250 }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={onLogin}>
                        Login
                    </Button>
                </Form.Item>
            </FormLoginAdmin>
        </Layout>
    );
};

export default LoginAdmin;
