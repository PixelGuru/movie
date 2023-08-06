/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useStateContext } from "../../../../Contexts/ContextProvider";
const LoginMember = ({ setOpen }) => {
  const { setUser, setToken } = useStateContext();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const onLoginMember = async () => {
    console.log(123);
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

      window.location.reload();
    } catch {
      message.error("Đăng nhập không thành công!");
    }
  };
  return (
    <Form
      form={form}
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
        <Button onClick={onLoginMember} style={{ marginRight: 10 }}>
          Đăng nhập
        </Button>
        {/* <a className="login-form-forgot" href="">
          Quên mật khẩu ?
        </a> */}
      </Form.Item>
    </Form>
  );
};
export default LoginMember;
