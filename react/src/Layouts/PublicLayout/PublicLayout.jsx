import { Outlet } from "react-router-dom";
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
} from "./styled";
import SearchBox from "../../components/SearchBox/SearchBox";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import ModalRegister from "../../components/ModalRegister/ModalRegister";
// import Lg from "../../assets/Logo4.jpg";

const PubLicLayout = () => {
    return (
        <LayoutPublic>
            <Bgbody>
                <Header>
                    <Logo>
                        {/* <img src={Lg} alt="Logo" style={{width: 180}} />; */}
                    </Logo>
                    <Auth>
                        <ModalLogin />
                        <ModalRegister />
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
                                <LinkNav to="">LỊCH CHIẾU</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">RẠP VÀ GIÁ</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">KHUYẾN MÃI</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">HỎI ĐÁP</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">TIN TỨC</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">GIỚI THIỆU</LinkNav>
                            </Li>
                            <Li>
                                <LinkNav to="">LIÊN HỆ</LinkNav>
                            </Li>
                        </Ul>
                    </Nav>
                </Header>
                <main>
                    <Outlet />
                </main>
                <Footer>
                    <ul>
                        <li>
                            <H2>Thông tin</H2>
                        </li>
                        <li>
                            <H2>Hệ thống rạp</H2>
                        </li>
                        <li>
                            <H2>Điều khoản</H2>
                        </li>
                        <li>
                            <H2>Chăm sóc khách hàng</H2>
                        </li>
                        <li>
                            <H2>Liên kết</H2>
                        </li>
                    </ul>
                </Footer>
            </Bgbody>
        </LayoutPublic>
    );
};

export default PubLicLayout;
