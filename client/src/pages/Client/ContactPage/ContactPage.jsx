import { Button, Col, Form, Input, Row, Space } from "antd";
import { Link } from "react-router-dom";
import { createFromIconfontCN } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const ContactPage = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <div
      style={{
        background: "rgba(48, 27, 50,0.5)",
        height: "max-content",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: 15 }}>
        <div style={{ lineHeight: 2, margin: "20px 0 70px" }}>
          <h1>LIÊN HỆ</h1>
          <h1> STARTLIGHT CINENAS</h1>
        </div>
        <div style={{ lineHeight: 3 }}>
          <h2>Địa chỉ: 1234 Nguyễn Thị Minh Khai, Quận 1, TP.HCM </h2>
          <h2>Hotline: 1900 1234 </h2>
          <Space>
            <IconFont type="icon-facebook" style={{ fontSize: 30 }} />:
            <Link to="facebook.com" style={{ color: "#F2B822", fontSize: 20 }}>
              facebook.com/
            </Link>
          </Space>
        </div>
      </div>
      <Form style={{ textAlign: "center", marginTop: "20px" }}>
        <h2
          style={{
            margin: " 10px 0",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          Gửi câu hỏi
        </h2>
        <Form.Item>
          <Input placeholder="Họ và tên" />
        </Form.Item>

        <Form.Item>
          <Row gutter={10}>
            <Col span={12}>
              <Form.Item>
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item>
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <TextArea rows={6} placeholder="Nội dung" />
        </Form.Item>
        <Form.Item>
          <Button style={{ marginBottom: 10 }} type="primary">
            Gửi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactPage;
