import { Form, Select, Space } from "antd";
import SessionHero from "./SessionHero/SessionHero";
import { Cart, Content, Li, StyleLink, Ul } from "./styled";


const Home = () => {
  const [form] = Form.useForm();
  return (
    <div style={{ color: "#fff" }}>
      <SessionHero />
      <Cart
        style={{
          display: "flex",
          padding: "50px 0 20px 0",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            color: "#E42169",
            textTransform: "uppercase",
            fontSize: "2rem",
            width: "145px",
            marginTop: "15px",
          }}
        >
          Mua vé online
        </h2>
        <div>
          <Form form={form} style={{ display: "flex" }}>
            <div>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Chọn rạp">
                  1
                </Select>
              </Form.Item>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Chọn ngày">
                  2
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Ngày">
                  3
                </Select>
              </Form.Item>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Xuất chiếu">
                  4
                </Select>
              </Form.Item>
            </div>
          </Form>
        </div>
      </Cart>
      <Content>
        <Ul>
          <Space>
            <Li>
              <StyleLink to="">Phim đang chiếu</StyleLink>
            </Li>
            |
            <Li>
              <StyleLink to="">Phim sắp chiếu</StyleLink>
            </Li>
          </Space>
        </Ul>
      </Content>
    </div>
  );
};

export default Home;
