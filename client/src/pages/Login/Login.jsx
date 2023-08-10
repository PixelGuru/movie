import { Button, Form, Input, message } from "antd";
import { FormLoginAdmin, Layout } from "./styled";
import axios from "axios";
import { useStateContext } from "../../Contexts/ContextProvider";
import { useEffect } from "react";

const Login = () => {
  const token = localStorage.getItem("token");
  const { user, setUser, setToken } = useStateContext();
  console.log(user);
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
        console.log(userData);
        const token = response.data.access_token;
        localStorage.setItem("token", token);
        setUser(userData);
        setToken(token);
        window.history.back();
      }
      
    } catch {
      message.error("Đăng nhập không thành công!");
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("http://127.0.0.1:8000/api/profile");
        setUser(response.data.data);
    
      } catch (error) {
        message.error(error);
      }
    };

    fetchData();
  }, [token]);
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
