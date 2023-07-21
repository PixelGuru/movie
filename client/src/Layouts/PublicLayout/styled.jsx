import { Link } from "react-router-dom";
import { styled } from "styled-components";
import BGBody from "../../assets/bg-body.png";
import BGTop from "../../assets/bg-top.png";
import BGFooter from "../../assets/bg-footer.jpg";

export const LayoutPublic = styled.div`
    background-image: url(${BGBody});
    height: 100vh;
`;
export const Bgbody = styled.div`
    background-image: url(${BGTop});
    height: 100vh;
`;
export const Header = styled.div`
    display: grid;
    grid-template-columns: 30% 45% 20%;
    grid-template-areas:
        "logo auth search"
        "logo nav nav";
    height: auto;
    // padding: 0 7rem;
    text-align: center;
`;
export const Logo = styled.div`
    grid-area: logo;
    display: flex;
    justify-content: end;
    align-items: center;
`;
export const Search = styled.div`
    width: 100%;
    grid-area: search;
    align-items: center;
    display: flex;
    margin-top: 1rem;
`;
export const Nav = styled.div`
    grid-area: nav;
    display: flex;
`;
export const Auth = styled.div`
    grid-area: auth;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 10px;
`;
export const Ul = styled.ul`
    display: flex;
    border: 1px solid #e00d7a;
    border-radius: 50px;
    margin: 1rem auto;
    justify-content: flex-end;
`;
export const Li = styled.li`
    list-style: none;
    font-size: 20px;
    padding: 10px 18px;
    font-family: "Roboto Mono", monospace;
    transition: 0.5s;
    background-color: #e00d7a;
    margin: 5px 0;
    &:first-child {
        margin-left: 5px;
        border-radius: 20px 0 0 20px;
    }
    &:last-child {
        margin-right: 5px;
        border-radius: 0 20px 20px 0;
    }
    &:hover {
        background-color: #f37520;
    }
    @media only screen and (max-width: 1400px) {
        font-size: 15px;
    }
`;
export const LinkNav = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
export const Footer = styled.div`
    background-image: url(${BGFooter});
    color: #fff;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 0 10rem;
    justify-content: space-around;
`;
export const H2 = styled.h2`
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 20px;
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 1rem;
`;

export const UlFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 150px 0;
`;
export const LiFooter = styled.div`
    list-style: none;
    width: 17rem;
    margin: 0 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
`;
export const ContentFooter = styled.div`
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    color: #b3c4d5;
`;

export const LiTech = styled.div`
    list-style: none;
    margin: 0 15px;
`;
export const Payment = styled.div`
    text-align: center;
    line-height: 50px;
    margin: 20px 0;
`;

export const Img = styled.img`
    margin: 0 5px;
`;
export const ImgMedia = styled.img`
    margin: 5px 5px;
    transition: 0.5s;
    &:hover {
        transform: translateY(-5px);
    }
`;
