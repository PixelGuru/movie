/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { useEffect } from "react";

const ModalMovie = ({ open, setOpen, onCancel, onSubmit, formData }) => {
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
      title="New Movie"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout="vertical">
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
          rules={[{ required: true, message: "Enter Duration" }, {type: "integer"}]}
        >
          <InputNumber style={{ width: 200 }} />
        </Form.Item>
        <Form.Item
          name="release_date"
          label="Release Date"
          // rules={[{ required: true, message: "Enter Release Date" }]}
        >
          <Input />
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
          // rules={[{ required: true, message: "Enter Content" }]}
        >
          {/* <CKEditor
            styled={{ with: 100000 }}
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          /> */}
          <Input />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Select status" }]}
        >
          <Select
            options={[
              { value: 'Hide', label: "Hide" },
              { value: 'Show', label: "Show"},
              {value: 'Coming Soon', label: "Coming Soon" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalMovie;
