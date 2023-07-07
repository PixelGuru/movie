import { useMemo } from "react";
// import { Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { InputSearch } from "./styled";

const SearchBox = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const keyword = useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return searchParams.has('keyword') ? searchParams.get('keyword') : ''
  }, [location])

  const onSearch = (e) => {
    const value = e.target.value;
    navigate(`${location.pathname}?keyword=${value}`);
  };

  return <InputSearch  value={keyword} onChange={onSearch} />;
};

export default SearchBox;
