import styled from "styled-components";
export const AreaBooking = styled.div`
  width: 80%;
  height: max-content;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  background: rgb(14 8 13 / 45%);
`;

export const BookingContainer = styled.div`
  text-align: center;
`;

export const Screen = styled.div`
  border-bottom: 5px solid #fff;
  width: 70%;
  margin: 30px auto 70px auto;
  text-align: center;
  color: #fff;
`;
export const SeatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => props.columns},
    50px
  ); /* Số cột được tự động điều chỉnh */
  gap: 5px; /* Gap between the seats */
  justify-content: center;
  margin-bottom: 20px;
`;
export const SeatButton = styled.button`
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isSelected ? "#E00D7A !important " : "#fff"};
  color: ${(props) => (props.isSelected ? "#fff !important" : "#000")};

  &:hover {
    background-color: yellow; /* Màu vàng khi ghế được chọn */
  }

  &:disabled {
    background-color: #ccc;
    color: #000;
    cursor: not-allowed;
  }
`;

export const EmptySeatButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: default;
  background-color: transparent;
`;

export const BookingButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  color: #000;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  background-color: ${(props) => (props.disabled ? "#ccc" : "#f5c549")};
`;

export const DoubleSeatButton = styled(SeatButton)`
  background-color: #8a2be2; /* Màu tím cho ghế đôi */
`;

export const RegularSeatButton = styled(SeatButton)`
  background-color: #1e90ff; /* Màu xanh dương cho ghế thường */
`;

export const VipSeatButton = styled(SeatButton)`
  background-color: #ff0000; /* Màu đỏ cho ghế VIP */
`;

export const StyleLi = styled.li`
  list-style: none;
  margin: 10px ;
`;
