import { Space } from "antd";
import { Link } from "react-router-dom";
import { AreaChoseCinema, StyleButtonChose } from "./styled";

const ShowTime = () => {
  return (
    <AreaChoseCinema>
      <Space size={50}>
        <StyleButtonChose>
          <Link to="/show-time/ho-chi-minh">Rạp Hồ Chí Minh</Link>
        </StyleButtonChose>
        <StyleButtonChose disabled>
          <Link to="/show-time/da-nang" style={{color: 'gray'}}>Rạp Đà Nẵng</Link>
        </StyleButtonChose>
      </Space>
    </AreaChoseCinema>
  );
};

export default ShowTime;
