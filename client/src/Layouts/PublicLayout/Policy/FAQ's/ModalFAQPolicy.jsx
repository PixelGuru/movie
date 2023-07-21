/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { StyleCollapse, StyleModal, StyledButton } from "./styled";
import { Collapse, Form, Input, Row, Col, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
const ModalFAQPolicy = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <StyledButton type="link" onClick={showModal}>
                Câu hỏi thường gặp
            </StyledButton>
            <StyleModal
                title="Câu hỏi thường gặp"
                open={isModalOpen}
                onCancel={handleCancel}
                width={1000}
                style={{ top: 20 }}
            >
                <StyleCollapse>
                    <Collapse.Panel header="Làm sao để mua vé online?" key="1">
                        <p>
                            Bước 1: Bạn phải là thành viên của Startlight nếu
                            không phải vui lòng đăng kí thành viên trên website
                            để mua vé online
                        </p>
                        <p>
                            Bước 2: Đăng nhập thải khoản thành viên (Trường hợp
                            không đăng nhập được vui lòng liện hệ nhân viên tại
                            hệ thống các rạp để được hỗ trợ)
                        </p>
                        <p>Bước 3: Chọn loại vé và số lượng:</p>
                        <p>Bước 4: Chọn ghế và thức ăn</p>
                        <p>
                            Bước 5: Đồng ý các điều khoản và chọn hình thức
                            thanh toán
                        </p>
                        <p>
                            Bước 6: Nhập thông tin thanh toán để tiến hành mua
                            vé online
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel
                        header="Thủ tục đặt vé online và phương thức thanh toán như thế nào?"
                        key="2"
                    >
                        <h5>CÁCH ĐẶT VÉ ONLINE:</h5>

                        <p>
                            1: Đặt vé online trên mục MUA VÉ ONLINE ở trang chủ
                            Startlight Cinema.
                        </p>

                        <p>2: Chọn Phim, Rạp, Ngày va Suất chiếu .</p>

                        <p>3: Bạn chọn vị trí ghế, nhập thông tin liên hệ.</p>

                        <p>4: Bạn chọn phương thức thanh toán.</p>

                        <p>
                            5: Sau khi hoàn tất thanh toán hệ thống sẽ gửi thông
                            tin vé đến liên hệ của bạn. Vui long xuất thông tin
                            đặt vé khi đến rap.
                        </p>

                        <h5>CHÚC BẠN XEM PHIM VUI VẺ</h5>
                    </Collapse.Panel>
                    <Collapse.Panel
                        header="Làm thế nào để cấp thẻ thành viên"
                        key="3"
                    >
                        <p>
                            Bạn chỉ cần mua 02 vé xem phim bất kỳ tại rạp
                            Startlight là đã có thể tạo thẻ S'Friend và thẻ chỉ
                            có giá trị sử dụng từ lần giao dịch sau. khi bạn
                            tích đủ 10,000 điểm tích lũy thì sẽ được nâng lên
                            thẻ S'vip
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel
                        header="Lợi ích khi tham gia thẻ thành viên"
                        key="4"
                    >
                        <p>
                            Thẻ thành viên của Startlight bao gồm 2 hạng mục là
                            S'Friend và C'Vip. Cụ thể quyền lợi như sau:
                        </p>
                        <p>
                            - Khi điểm của thẻ đạt mức như sau sẽ có thể đổi
                            được phần thưởng tương ứng.
                        </p>
                        <p>
                            - Khi điểm tích lũy của thẻ đạt 10.000 sẽ được nâng
                            cấp lên thẻ S'Vip (Điểm tích lũy = tổng điểm cộng
                            dồn từ trước đến giờ, không phải điểm còn lại của
                            thẻ)
                        </p>
                        <h5>Thẻ S'Friend:</h5>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được cấp lần đầu khi
                            mua 2 vé xem phim bất kỳ tại Cinestar.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được tích lũy điểm
                            theo giá trị mua hàng hóa dịch vụ như trên.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được giảm 10% trực
                            tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được tặng 1 vé xem
                            phim 2D vào tuần sinh nhật (tính từ Thứ Hai đến Chủ
                            Nhật), Điều kiện: tối thiểu có 500 điểm tích lũy
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được tham gia các
                            chương trình dành cho thành viên.
                        </p>
                        <h5>Thẻ S'VIP</h5>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Được cấp cho thành
                            viên C’Friend khi tích lũy được ít nhất 10,000 điểm.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được tích lũy điểm
                            theo giá trị mua hàng hóa dịch vụ như trên.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được giảm 15% trực
                            tiếp trên giá trị hóa đơn bắp nước khi mua tại quầy.
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Được tặng 2 vé xem
                            phim 2D và 1 combo gồm coke 16oz + popcorn 32oz vào
                            tuần sinh nhật (tính từ Thứ Hai đến Chủ Nhật).
                        </p>
                        <p>
                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Có cơ hội nhận vé
                            tham gia Lễ Ra Mắt Phim và các chương trình khuyến
                            mãi khác của Cinestar.
                        </p>
                    </Collapse.Panel>
                    <Collapse.Panel
                        header="Làm sao để biết được số điểm đã tích lũy?"
                        key="5"
                    >
                        <p>
                            ​Khách hàng có thể hỏi nhân viên lúc sử dụng thẻ
                            thành viên để mua vé hoặc kiểm tra thông tin khách
                            hàng trên website cinestar.com.vn bằng tài khoản
                            online.
                        </p>
                    </Collapse.Panel>

                    <Form style={{ textAlign: "center", marginTop: "20px" }}>
                        <h2
                            style={{
                                margin: " 10px 0",
                                textTransform: "uppercase",
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
                </StyleCollapse>
            </StyleModal>
        </>
    );
};
export default ModalFAQPolicy;
