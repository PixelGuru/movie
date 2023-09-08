/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Content,
  H1,
  H3,
  Li,
  P,
  Promotion,
  StyleImg,
} from "./styled";

const PromotionPage = () => {
  return (
    <Promotion>
      <Container>
        <StyleImg src="https://cinestar.com.vn/pictures/0330-web.jpg" alt="" />
        <Content>
          <H1>STARTLIGHT'S PURPLE DAY - THỨ 3 TUẦN CUỐI MỖI THÁNG</H1>
          <H3>CHIẾN BINH ÁO TÍM - CHIẾN THẦN STARTLIGHT</H3>
          <P>
            Các mem hãy Mặc trang phục màu tím (áo, váy, quần, túi xách, nón,
            giày), mua vé xem phim sau đó nhận ngay 01 vé Xem phim Voucher
            C'GREEN. Chương trình diễn ra liên tục vào các Thứ 3 Tuần cuối trong
            tháng.
          </P>
          <p>Lưu ý: Áp dụng cho cả khách hàng mua Online và Offline</p>
        </Content>
      </Container>

      <Container>
        <StyleImg src="https://cinestar.com.vn/pictures/c_monday.jpg" alt="" />
        <Content>
          <H1>C'MONDAY - ƯU ĐÃI THỨ 2</H1>
          <P>- Giá vé ưu đãi: 45.000 đ/vé 2D và 55.000 đ/vé 3D.</P>
          <P>
            - Thời gian: Áp dụng cho tất cả các suất chiếu ngày Thứ Hai hàng
            tuần.
          </P>
          <p>Lưu ý: Không áp dụng cho các ngày lễ/tết.</p>
        </Content>
      </Container>

      <Container>
        <StyleImg
          src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/c'member.jpg"
          alt=""
        />
        <Content>
          <H1>STARTLIGHT'S - NGÀY HỘI THÀNH VIÊN</H1>
          <P>
            Thành Viên Cinestar được áp dụng giá vé ưu đãi, hạng thẻ C’FRIEND và
            C’VIP.
          </P>
          <P>Thời gian: Thứ Tư hàng tuần</P>
          <P>- Giá vé: 45,000 đ/vé 2D và 55,000 đ/ vé 3D</P>
          <P>
            - Giảm 10% giá trị hóa đơn bắp nước cho chủ thẻ C’FRIEND và 15% cho
            chủ thẻ C’VIP.
          </P>
          <P>
            - Chương trình tích điểm thành viên và các điều kiện thành viên khác
            được áp dụng.
          </P>
          <p>Lưu ý: </p>
          <P>- Chỉ áp dụng mua trực tiếp tại quầy.</P>
          <P>
            - Chương trình không giới hạn số vé và số lần giao dịch trong thời
            gian diễn ra.
          </P>
          <P>- Không áp dụng cho các ngày lễ/tết.</P>
        </Content>
      </Container>

      <Container>
        <StyleImg
          src="https://cinestar.com.vn/pictures/Hình%20nền%20CTKM/hssv.jpg"
          alt=""
        />
        <Content>
          <H1>TẸT GA 45K SUỐT TUẦN TOÀN HỆ THỐNG</H1>
          <P>ÁP DỤNG MỨC GIÁ 45K / VÉ 2D - CẢ TUẦN - TOÀN HỆ THỐNG</P>
          <ul>
            <Li>KHÔNG đắn đo về giá vé</Li>
            <Li>KHÔNG nhức đầu nghĩ điểm hẹn cuối tuần</Li>
            <Li>KHÔNG cần miệt mài lựa chọn phim</Li>
          </ul>
          <P>
            Áp dụng dành cho giáo viên, giảng viên, học sinh, sinh viên và thanh
            niên dưới 22 tuổi, trên toàn hệ thống.
          </P>
          <P>Ưu đãi giá vé xem phim chỉ 45,000đ/vé 2D.</P>
          <p>Lưu ý:</p>
          <P>
            - Vui lòng mua TRỰC TIẾP TẠI RẠP và xuất trình thẻ HSSV-GV hoặc CMND
            có dán ảnh và còn hiệu lực khi mua vé.
          </P>
          <P>- Mỗi thẻ mua được một vé.</P>
          <P>
            - Không áp dụng cho các ngày Lễ, Tết, hoặc suất chiếu có phụ thu từ
            nhà phát hành phim.
          </P>
        </Content>
      </Container>
      <Container>
        <StyleImg src="https://cinestar.com.vn/pictures/c_ten.jpg" alt="" />
        <Content>
          <H1>C'TEN - KHUYẾN MÃI TẠI MỐC 10H</H1>
          <P>
            - Áp dụng cho mỗi vé xem phim vào các suất trước 10h và sau 22h hàng
            ngày.
          </P>
          <P>- Mua vé giá ưu đãi: 45.000 đ / vé 2D, 55.000 đ / vé 3D.</P>
          <p>Lưu ý: Chương trình không áp dụng cho ngày lễ/tết.</p>
        </Content>
      </Container>
    </Promotion>
  );
};

export default PromotionPage;
