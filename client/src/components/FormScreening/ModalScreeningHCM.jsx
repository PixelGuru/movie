/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Space,
  TimePicker,
} from "antd";
import dayjs from "dayjs";
import moment from "moment";
import { useEffect } from "react";

const ModalScreeningHCM = ({
  open,
  setOpen,
  onCancel,
  onSubmit,
  formData,
  cinemaNames,
  movieNames,
}) => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const format = "HH:mm";
  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);

  useEffect(() => {
    if (open && formData.id) {
      const formattedData = {
        ...formData,
        date_show: formData.date_show
          ? dayjs(formData.date_show, "DD/MM/YYYY")
          : null,
        start_time: formData.start_time
          ? dayjs(formData.start_time, "HH:mm")
          : null,
        end_time: formData.end_time ? dayjs(formData.end_time, "HH:mm") : null,
      };
      console.log(formattedData);
      form.setFieldsValue(formattedData);
    }
  }, [open, formData]);

  const onOk = async () => {
    const values = await form.validateFields();
    values.date_show = values.date_show.format("DD/MM/YYYY");
    values.start_time = values.start_time.format("HH:mm");
    values.end_time = values.end_time.format("HH:mm");
    console.log(values);
    onSubmit(formData.id, values);
  };
  const onDatePickerChange = (date) => {
    if (date) {
      const formattedDate = date.format("DD/MM/YYYY");
      console.log("Ngày được chọn:", formattedDate);
    }
  };
  const disabledDate = (current) => {
    const today = moment().startOf("day");
    return current && current < today;
  };
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout="vertical">
        <Form.Item
          name="cinema_name"
          label="Cinema Name "
          rules={[{ required: true, message: "Enter cinema name" }]}
        >
          <Select
            options={cinemaNames.map((cinemaName) => ({
              value: cinemaName,
              label: cinemaName,
            }))}
          />
        </Form.Item>
        <Form.Item
          name="movie_name"
          label="Movie Name "
          rules={[{ required: true, message: "Enter movie name" }]}
        >
          <Select
            options={movieNames.map((movieName) => ({
              value: movieName,
              label: movieName,
            }))}
          />
        </Form.Item>

        <Space size={10} style={{ display: "flex" }}>
          <Form.Item
            name="date_show"
            label="Date Show "
            rules={[{ required: true, message: "Enter date show" }]}
          >
            <DatePicker
              format={"DD/MM/YYYY"}
              disabledDate={disabledDate}
              onChange={onDatePickerChange}
            />
          </Form.Item>
          <Form.Item
            name="start_time"
            label="Start Time"
            rules={[{ required: true, message: "Enter start time" }]}
          >
            <TimePicker format={format} />
          </Form.Item>

          <Form.Item
            name="end_time"
            label="End Time"
            rules={[{ required: true, message: "Enter end time" }]}
          >
            <TimePicker format={format} />
          </Form.Item>
        </Space>

        <Form.Item
          name="room"
          label="Room"
          rules={[{ required: true, message: "Enter room" }]}
        >
          <Input />
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

export default ModalScreeningHCM;
