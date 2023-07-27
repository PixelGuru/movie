/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { DatePicker, Form, Input, Modal, Select } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/en";
const ModalUser = ({ open, setOpen, formData, onSubmit, setFormData }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    if (!open) {
      form.resetFields();
      setFormData("");
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      const formattedData = {
        ...formData,
        birthday: formData.birthday
          ? dayjs(formData.birthday, "DD/MM/YYYY")
          : null,
      };
      form.setFieldsValue(formattedData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    values.birthday = values.birthday.format("DD/MM/YYYY");
    onSubmit(formData.id, values);
  };

  const onCancel = () => {
    form.resetFields();
    setOpen(false);
  };
  const onDatePickerChange = (date) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY");
      console.log("Ngày được chọn:", formattedDate);
    }
  };
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Enter name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "Select gender" }]}
        >
          <Select
            options={[
              { value: "Nam", label: "Nam" },
              { value: "Nữ", label: "Nữ" },
              { value: "Khác", label: "Khác" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="birthday"
          label="Birthday"
          rules={[{ required: true, message: "Enter birthday" }]}
        >
          <DatePicker
            style={{ width: "50%" }}
            format={"DD/MM/YYYY"}
            onChange={onDatePickerChange}
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="email"
          rules={[
            { required: true, message: "Enter Email" },
            { type: "email" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: "Enter phone" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="role"
          label="Role"
          rules={[{ required: true, message: "Select role user" }]}
        >
          <Select
            options={[
              { value: "Khách hàng", label: "Khách hàng" },
              { value: "Nhân viên", label: "Nhân viên" },
              { value: "Admin", label: "Admin" },
            ]}
          />
        </Form.Item>

        <Form.Item name="level" label="Level">
          <Select
            options={[
              { value: "", label: "" },
              { value: "Bạc", label: "Bạc" },
              { value: "Vàng", label: "Vàng" },
              { value: "Kim cương", label: "Kim cương" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalUser;
