import { Link, Outlet } from "react-router-dom";
import {
  Auth,
  Header,
  Li,
  Logo,
  Nav,
  Search,
  Ul,
  LinkNav,
  LayoutPublic,
  Bgbody,
  Footer,
  H2,
  UlFooter,
  LiFooter,
  ContentFooter,
  LiTech,
  Payment,
  Img,
  ImgMedia,
} from "./styled";
import SearchBox from "../../components/SearchBox/SearchBox";
import AreaAuth from "../../Layouts/PublicLayout/AreaAuth/AreaAuth";
import logo from "../../assets/logo.png";
import Dolby2 from "../../assets/technology/dolby2.png";
import Crhistie from "../../assets/technology/crhistie.png";
import Img2D from "../../assets/technology/2d.jpg";
import Img3D from "../../assets/technology/3d.png";
import ImgNapas from "../../assets/payment/napas.png";
import ImgMasterCard from "../../assets/payment/mastercard.png";
import ImgVisa from "../../assets/payment/visa.png";
import ImgMomo from "../../assets/payment/momo.jpg";
import TTWeb from "../../assets//dathongbao.png";
import FbIcon from "../../assets/meida/facebook.png";
import YtbIcon from "../../assets/meida/youtube.png";
import AppstoreIcon from "../../assets/meida/Appstore.png";
import CHPlayIcon from "../../assets/meida/ChPlay.png";
import ModalTermsOfUserPolicy from "./Policy/TermsOfUse/ModalTermsOfUserPolicy";
import ModalPaymentPolicy from "./Policy/PaymentPolicy/ModalPaymentPolicy";
import ModalPrivacyPolicy from "./Policy/PrivacyPolicy/ModalPrivacyPolicy";
import ModalFAQPolicy from "./Policy/FAQ's/ModalFAQPolicy";

const PubLicLayout = () => {
  return (
    <LayoutPublic>
      <Bgbody>
        <Header>
          <Logo>
            <Link to="/">
              <img src={logo} alt="Logo" style={{ width: 260 }} />
            </Link>
          </Logo>
          <Auth>
            <AreaAuth />
          </Auth>
          <Search>
            <SearchBox />
          </Search>
          <Nav>
            <Ul>
              <Li>
                <LinkNav to="">PHIM</LinkNav>{" "}
              </Li>
              <Li>
                <LinkNav to="/show-time">LỊCH CHIẾU</LinkNav>
              </Li>
              <Li>
                <LinkNav to="">RẠP </LinkNav>
              </Li>
              <Li>
                <LinkNav to="/promotion">KHUYẾN MÃI</LinkNav>
              </Li>
              <Li>
                <LinkNav to="/FAQ">HỎI ĐÁP</LinkNav>
              </Li>
              <Li>
                <LinkNav to="">TIN TỨC</LinkNav>
              </Li>

              <Li>
                <LinkNav to="/contact">LIÊN HỆ</LinkNav>
              </Li>
            </Ul>
          </Nav>
        </Header>
        <main>
          <Outlet />
        </main>
        <Footer>
          <UlFooter>
            <LiFooter>
              <H2>Thông tin</H2>
              <ContentFooter>
                <p>Giới thiệu</p>
                <p>Tin tức</p>
                <p>Hỏi đáp</p>
                <p>Liên hệ</p>
              </ContentFooter>
            </LiFooter>
            <LiFooter>
              <H2>Hệ thống rạp</H2>
              <ContentFooter>
                <p>Starlight Hà Nội</p>
                <p>Starlight Hồ Chí Minh</p>
                <p>Starlight Đà Nẵng</p>
                <p>Starlight Lâm Đồng</p>
              </ContentFooter>
            </LiFooter>

            <LiFooter>
              <H2>Liên kết</H2>
              <ContentFooter>
                <div>
                  <Link>
                    <ImgMedia src={FbIcon} />
                  </Link>
                  <Link>
                    <ImgMedia src={YtbIcon} />
                  </Link>
                </div>
                <div>
                  <Link>
                    <ImgMedia src={AppstoreIcon} width={150} />
                  </Link>
                </div>
                <div>
                  <Link>
                    <ImgMedia src={CHPlayIcon} width={150} />
                  </Link>
                </div>
              </ContentFooter>
            </LiFooter>
            <LiFooter>
              <H2>Điều khoản sử dụng</H2>
              <ContentFooter>
                <ModalTermsOfUserPolicy />
                <ModalPaymentPolicy />
                <ModalPrivacyPolicy />
                <ModalFAQPolicy />
              </ContentFooter>
            </LiFooter>
            <LiFooter>
              <H2>Chăm sóc khách hàng</H2>
              <ContentFooter>
                <p>Hotline: 1900 1234</p>
                <p>
                  Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
                </p>
                <p>Email: hotro@startlight.com</p>
              </ContentFooter>
            </LiFooter>
          </UlFooter>
          <div>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LiTech>
                <Link>
                  <img src={Dolby2} alt="" width={120} />
                </Link>
              </LiTech>
              <LiTech>
                <Link>
                  <img src={Crhistie} alt="" width={120} />
                </Link>
              </LiTech>
              <LiTech>
                <Link>
                  <img src={Img2D} alt="" />
                </Link>
              </LiTech>
              <LiTech>
                <Link>
                  <img src={Img3D} alt="" />
                </Link>
              </LiTech>
            </ul>
          </div>
          <Payment>
            <p>Chấp nhận thanh toán</p>
            <div>
              <Img src={ImgNapas} alt="" />
              <Img src={ImgMasterCard} alt="" />
              <Img src={ImgVisa} alt="" />
              <Img src={ImgMomo} alt="" />
            </div>
          </Payment>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              fontSize: 15,
            }}
          >
            <div>
              <img src={TTWeb} width={150} />
            </div>
            <div
              style={{
                margin: "20px 0 ",
                color: "#b3c4d5",
                lineHeight: 1.5,
              }}
            >
              <p>
                CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM – RẠP CHIẾU PHIM NGÔI
                SAO
              </p>
              <p>
                Giấy CNĐKDN số: XXXXXXXXXX, đăng ký lần đầu ngày XX/XX/XXXX,
                đăng ký thay đổi lần thứ X ngày XX/XX/XXX, cấp bởi Sở KH & ĐT
                TP.HCM
              </p>
              <p>Địa chỉ: XXXXXXXXXXXXXX</p>
              <p>Hotline: 1900 1234</p>
              <p>COPYRIGHT 2015 CINESTAR. All RIGHTS RESERVED</p>
            </div>
          </div>
        </Footer>
      </Bgbody>
    </LayoutPublic>
  );
};

export default PubLicLayout;
