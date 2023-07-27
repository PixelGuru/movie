/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DatePicker, Form, Input, InputNumber, Modal, Select } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";

const ModalMovie = ({ open, setOpen, onSubmit, formData, setFormData }) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    if (!open) {
      setFormData("");
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      const formattedData = {
        ...formData,
        release_date: formData.release_date
          ? dayjs(formData.release_date, "DD/MM/YYYY")
          : null,
      };
      form.setFieldsValue(formattedData);
    }
  }, [open, formData]);

  const onCancel = () => {
    form.resetFields();
    setOpen(false);
  };
  const onOk = async () => {
    const values = await form.validateFields();
    values.release_date = values.release_date.format("DD/MM/YYYY");
    onSubmit(formData.id, values);
    form.resetFields();
    console.log(values);
  };
  const onEditorChange = (evt) => {
    console.log(evt.editor.getData());
  };
  const onDatePickerChange = (date) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY");
      console.log("Ngày được chọn:", formattedDate);
    }
  };

  return (
    <Modal
      width={1000}
      title="New Movie"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      style={{ top: 20 }}
    >
      <Form form={form} onOk={onOk} onCancel={onCancel} layout="vertical">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Nhập tên" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="genre"
          label="Genre"
          rules={[{ required: true, message: "Select Genre" }]}
        >
          {/* <Select mode="multiple">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
          </Select> */}
          <Input />
        </Form.Item>

        <Form.Item
          name="duration"
          label="Duration"
          rules={[
            { required: true, message: "Enter Duration" },
            { type: "integer" },
          ]}
        >
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          name="release_date"
          label="Release Date"
          rules={[{ required: true, message: "Enter Release Date" }]}
        >
          <DatePicker
            style={{ width: "50%" }}
            format={"DD/MM/YYYY"}
            onChange={onDatePickerChange}
          />
        </Form.Item>

        <Form.Item
          name="actors"
          label="Actor"
          rules={[{ required: true, message: "Enter Actor" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="director"
          label="Director"
          rules={[{ required: true, message: "Enter Director" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="content"
          label="Content"
          rules={[{ required: true, message: "Enter Content" }]}
        >
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Select status" }]}
        >
          <Select
            options={[
              { value: "Hide", label: "Hide" },
              { value: "Show", label: "Show" },
              { value: "Coming Soon", label: "Coming Soon" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalMovie;
