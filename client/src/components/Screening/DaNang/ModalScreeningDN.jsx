/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useEffect } from "react";

const ModalScreeningDN = ({ open, setOpen, onCancel, onSubmit, formData }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      form.setFieldsValue(formData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    onSubmit(formData.id, values);
    console.log(values);
  };
  const onEditorChange = (evt) => {
    console.log(evt.editor.getData());
  };

  return (
    <Modal
      width={1000}
      title="New Movie in Screening Da Nang"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="movie_name"
          label="Movie Name"
          rules={[{ required: true, message: "Enter movie Name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="data_show"
          label="Date Show "
          rules={[{ required: true, message: "Enter date show" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="start_time"
          label="Start Time"
          rules={[{ required: true, message: "Enter start time" }]}
        >
          {/* <Select mode="multiple">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select> */}
          <Input />
        </Form.Item>

        <Form.Item
          name="end_time"
          label="End Time"
          rules={[{ required: true, message: "Enter end time" }]}
        >
          <InputNumber style={{ width: 200 }} />
        </Form.Item>

        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Enter price" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="remaining_seats"
          label="Remaining Seats"
          rules={[{ required: true, message: "Enter remaining seats" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalScreeningDN;
