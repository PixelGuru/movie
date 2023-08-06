// ModalMovie.js
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";

const ModalMovie = ({
  open,
  setOpen,
  onSubmit,
  formData,
  setFormData,
  posterFile,
  setPosterFile,
}) => {
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    if (!open) {
      setFormData("");
      setPosterFile(null); // Reset state của file ảnh khi đóng modal
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      console.log(formData);
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
    if (formData.id) {
      const values = await form.validateFields();
      values.release_date = values.release_date.format("DD/MM/YYYY");
      onSubmit(formData.id, values);
      form.resetFields();
    } else {
      try {
        const values = await form.validateFields();
        values.release_date = values.release_date.format("DD/MM/YYYY");
        const newFormData = new FormData();
        newFormData.append("name", values.name);
        newFormData.append("genre", values.genre);
        newFormData.append("duration", values.duration);
        newFormData.append("release_date", values.release_date);
        newFormData.append("actors", values.actors);
        newFormData.append("content", values.content);
        newFormData.append("director", values.director);
        newFormData.append("status", values.status);
        newFormData.append("posters", posterFile);
        console.log(newFormData);
        form.resetFields();
        onSubmit(false, newFormData);
      } catch (error) {
        console.error("Validation failed:", error);
      }
    }
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
          <Select mode="multiple">
            <Option value="Comedy">Comedy </Option>
            <Option value="Crime">Crime </Option>
            <Option value="Action">Action </Option>
            <Option value="Adventure">Adventure </Option>
            <Option value="Mystery">Mystery </Option>
            <Option value="Horror">Horror </Option>
            <Option value="Romance">Romance </Option>
          </Select>
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
        <Form.Item name="posters" label="Posters">
          <div>
            <img src={formData.posters} alt="" width={250} />
          </div>
          <div>
            {posterFile ? (
              <img
                src={URL.createObjectURL(posterFile)}
                alt="Poster Preview"
                style={{ width: 250 }}
              />
            ) : null}
          </div>
          <Upload
            showUploadList={false}
            accept="image/*"
            beforeUpload={(file) => {
              setPosterFile(file); // Lưu trữ file ảnh khi chọn từ dialog
              return false; // Ngăn việc tự động upload
            }}
          >
            <Button icon={<UploadOutlined />}>Select Poster</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalMovie;
