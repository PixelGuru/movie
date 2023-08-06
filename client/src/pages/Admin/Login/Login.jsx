import { Button, Form, Input, message } from "antd";
import { FormLoginAdmin, Layout } from "./styled";
import axios from "axios";
import { useStateContext } from "../../../Contexts/ContextProvider";

const Login = () => {
  const { setUser, setToken } = useStateContext();
  const [form] = Form.useForm();
  const onLogin = async () => {
    try {
      const values = await form.validateFields();
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        values
      );

      if (response.data) {
        const userData = response.data.data;
        const token = response.data.access_token;
        localStorage.setItem("token", token);
        setUser(userData);
        setToken(token);
      }
      window.history.back();
    } catch {
      message.error("Đăng nhập không thành công!");
    }
  };
  return (
    <Layout>
      <FormLoginAdmin form={form} layout="vertical" autoComplete="off">
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

export default Login;
