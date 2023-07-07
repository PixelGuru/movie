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
    border: 1px solid;
    display: grid;
    grid-template-columns: 30rem 50rem 19rem;
    grid-template-areas:
        "logo auth search"
        "logo nav nav";
    height: auto;
    padding: 0 7rem;
    text-align: center;
`;
export const Logo = styled.div`
    grid-area: logo;
    border: 1px solid;
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
    width: 100%;
    margin-left: 88px;
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
`;
export const LinkNav = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
export const Footer = styled.div`
    background-image: url(${BGFooter});
    color: #fff;
    width: 100%;
    height: 790px;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    padding: 10rem 20rem;
    justify-content: space-around;
`;
// eslint-disable-next-line react-refresh/only-export-components
export const H2 = styled.h2`
    background-color: rgba(255, 255, 255, 0.1);
    font-size: 20px;
    padding: 10px 20px;
`;
