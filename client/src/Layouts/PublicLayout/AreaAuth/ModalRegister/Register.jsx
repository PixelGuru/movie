/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  message,
} from "antd";
import axios from "axios";

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

const Register = ({ open, setOpen }) => {
  const [form] = Form.useForm();
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("DD/MM/YYYY"),
    };
    console.log("Received values of form: ", values);
  };
  const onDatePickerChange = (date) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY");
      console.log("Ngày được chọn:", formattedDate);
    }
  };

  const onRegister = async () => {
    try {
      const values = await form.validateFields();
      values.birthday = values.birthday.format("DD/MM/YYYY");
      axios
        .post("http://127.0.0.1:8000/api/register", values)
        .then((res) => {});
      message.success("Đăng ký thành công!");
      setOpen(false);
    } catch {
      message.error('Đăng ký không thành công!"');
      setOpen(false);
    }
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
            message: "Vui lòng nhập họ tên",
            whitespace: true,
          },
          {
            min: 3,
            message: "Họ tên tối thiểu 3 ký tự",
          },
        ]}
      >
        <Input placeholder="Họ Và tên" style={{ width: "400px" }} />
      </Form.Item>

      <Form.Item
        name="gender"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn giới tính",
          },
        ]}
      >
        <Select placeholder="Giới tính" style={{ width: 180 }}>
          <Option value="Nam">Male</Option>
          <Option value="Nữ">Female</Option>
          <Option value="Khác">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="birthday"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập sinh nhật",
          },
        ]}
      >
        <DatePicker
          placeholder="Sinh nhật DD/mm/YYYY"
          format={"DD/MM/YYYY"}
          style={{ width: "400px" }}
          onChange={onDatePickerChange}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "E-mail không đúng định dạng",
          },
          {
            required: true,
            message: "Vui lòng nhập E-mail",
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
            message: "Vui lòng nhập mật khẩu",
          },
          {
            min: 6,
            message: "Mật khẩu phải trên 6 ký tự",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Mật khẩu" style={{ width: "400px" }} />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Vui lòng nhập lại mật khẩu",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu không khớp"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Xác nhận mật khẩu"
          style={{ width: "400px" }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số điện thoại",
          },
        ]}
      >
        <Input placeholder="Số điện thoại" style={{ width: "400px" }} />
      </Form.Item>

      <Form.Item
        style={{ color: "#fff", textAlign: "start" }}
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Chấp nhận chính sách")),
          },
        ]}
      >
        <Checkbox style={{ color: "#fff", width: "400px" }}>
          Khách hàng đã đồng với với chính sách của Startlight Cinema
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" onClick={onRegister}>
          Đăng kí
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
