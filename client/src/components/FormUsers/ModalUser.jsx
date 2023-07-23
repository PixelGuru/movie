/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/en";
const ModalUser = ({ open, setOpen, formData, onSubmit }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      const formattedData = {
        ...formData,
        birthday: formData.birthday
          ? dayjs(formData.birthday).format("DD/MM/YYYY")
          : null,
      };
      form.setFieldsValue(formattedData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    // values.birthday = dayjs(values.birthday).format("YYYY-MM-DD");
    onSubmit(formData.id, values);
    // console.log(values.birthday)
  };

  const onCancel = () => {
    setOpen(false);
  };
  // const onDatePickerChange = (date) => {
  //   if (date) {
  //     const formattedDate = dayjs(date).format("DD/MM/YYYY");
  //     console.log("Ngày được chọn:", formattedDate);
  //   } else {
  //     console.log("Ngày không được chọn");
  //   }
  // };
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Nhập tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Select
            options={[
              { value: "Nam", label: "Nam" },
              { value: "Nữ", label: "Nữ" },
              { value: "Khác", label: "Khác" },
            ]}
          />
        </Form.Item>

        {/* <Form.Item
          name="birthday"
          label="Birthday"
          rules={[{ required: true, message: "Nhập ngày sinh" }]}
        >
          <DatePicker style={{ width: "50%" }}  format={"DD/MM/YYYY"}
          onChange={onDatePickerChange} 
          />
        </Form.Item> */}

        <Form.Item
          name="email"
          label="email"
          rules={[{ required: true, message: "Nhập Email" }, { type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Nhập password" },
            { min: 6 },
            { max: 20 },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="phone" label="Phone">
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: "Chọn quyền user" }]}
        >
          <Select
            options={[
              { value: "0", label: "Khách hàng" },
              { value: "1", label: "Nhân viên" },
              { value: "3", label: "Admin" },
            ]}
          />
        </Form.Item>

        <Form.Item name="level" label="Level">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalUser;