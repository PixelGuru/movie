/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Radio, Space, message } from "antd";
import {
  SeatContainer,
  RegularSeatButton,
  VipSeatButton,
  EmptySeatButton,
  BookingButton,
  Screen,
  AreaBooking,
  BookingContainer,
  StyleLi,
} from "./styled";
import { useStateContext } from "../../../Contexts/ContextProvider";

const BookingPage = () => {
  const { token } = useStateContext();
  const { screeningId, movie_id } = useParams();
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [remainingSeats, setRemainingSeats] = useState(0);
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState(10);
  const [timeShow, setTimeShow] = useState([]);
  const [countdown, setCountdown] = useState(900000);
  const { user, movieInfo, setMovieInfo } = useStateContext();
  const navigate = useNavigate();
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      alert("Đã quá thời gian giữ ghế, hãy quay lại trang trước!");

      window.history.back();
    }, countdown * 1000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [countdown]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/movies/${movie_id}`).then((res) => {
      setMovieInfo(res.data.data);
      console.log(movieInfo);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/screenings/${screeningId}`)
      .then((response) => {
        const data = response.data;
        console.log(data);

        const totalSeats = data.data.total_seat;
        setRemainingSeats(data.data.remaining_seats);
        setTimeShow(data.data.start_time);
        setTicketPrice(data.data.price);
        const numRows = Math.ceil(totalSeats / 10);
        setRows(numRows);
        setColumns(10);

        const allSeats = [];
        for (let row = 0; row < numRows; row++) {
          for (let col = 1; col <= 10; col++) {
            const seat = String.fromCharCode(65 + row) + col;
            allSeats.push(seat);
          }
        }
        setSeats(allSeats.slice(0, totalSeats));
      });
  }, [screeningId]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.length >= 6) {
      return message.warning("Chỉ được chọn tối đa 6 ghế");
    }
    if (selectedSeats.includes(seat)) {
      setSelectedSeats((prevSeats) => prevSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, seat]);
    }
  };
  const onBooking = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/create-payment",
        { totalPrice }
      );
      window.location.href = response.data.redirect_url;
    } catch (error) {
      message.error("Đã có lỗi xảy tra trong quá trình thanh toán");
    }
  };
  const calculateTotalPrice = () => {
    const numberOfSeats = selectedSeats.length;
    const total = ticketPrice * numberOfSeats; // Sử dụng giá vé từ API để tính tổng giá
    return total;
  };

  useEffect(() => {
    const total = calculateTotalPrice();
    setTotalPrice(total);
  }, [selectedSeats, ticketPrice]);
  return (
    <AreaBooking>
      <div
        style={{
          color: " #fff",
          width: "25%",
          lineHeight: 1.25,
          textAlign: "center",
          marginTop: 50,
        }}
      >
        <img src={movieInfo.posters} alt="" width={250} />
        <div
          style={{
            textAlign: "start",
          }}
        >
          <p>Tên phim: {movieInfo.name}</p>
          <p>Ngày chiếu: {movieInfo.release_date}</p>
          <p>Giờ chiếu: {timeShow}</p>
          <p>Thời lượng: {movieInfo.duration} phút</p>
          <p>Đạo diễn: {movieInfo.actors}</p>
          <p>Mô tả: {movieInfo.content}</p>
        </div>
      </div>
      <BookingContainer>
        <h1 style={{ color: "#fff" }}>Chọn ghế cho suất chiếu</h1>
        <Screen>Màn hình</Screen>
        <SeatContainer columns={columns}>
          {["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M"].map(
            (row, rowIndex) =>
              Array.from({ length: columns }, (_, colIndex) => {
                const seat = `${row}${colIndex + 1}`;
                const isSeatSelected = selectedSeats.includes(seat);
                const isSeatAvailable = seats.includes(seat);
                const isRegularSeat = rowIndex === 0 || rowIndex === 1;
                const isSeatDisabled =
                  !isSeatAvailable && !isSeatSelected && remainingSeats === 0;

                if (isRegularSeat) {
                  return (
                    <RegularSeatButton
                      key={seat}
                      isSelected={isSeatSelected}
                      onClick={() => handleSeatClick(seat)}
                      disabled={isSeatDisabled}
                    >
                      {seat}
                    </RegularSeatButton>
                  );
                } else if (isSeatAvailable) {
                  return (
                    <VipSeatButton
                      key={seat}
                      isSelected={isSeatSelected}
                      onClick={() => handleSeatClick(seat)}
                      disabled={isSeatDisabled}
                    >
                      {seat}
                    </VipSeatButton>
                  );
                }
                // else {
                //   return <EmptySeatButton key={colIndex} disabled />;
                // }
              })
          )}
        </SeatContainer>

        <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
          <h3>Chú thích:</h3>
          <ul style={{ display: "flex" }}>
            <StyleLi>
              <div
                style={{
                  width: 55,
                  height: 55,
                  background: "#1E90FF",
                  border: "1px solid",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ghế Thường
              </div>
            </StyleLi>
            <StyleLi>
              <div
                style={{
                  width: 55,
                  height: 55,
                  background: "#FF0000",
                  border: "1px solid",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Ghế Vip
              </div>
            </StyleLi>
            <StyleLi>
              <div
                style={{
                  width: 55,
                  height: 55,
                  background: "#E00D7A",
                  border: "1px solid",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Đang chọn
              </div>
            </StyleLi>
            <StyleLi>
              <div
                style={{
                  width: 55,
                  height: 55,
                  color: "#000",
                  background: "#ccc",
                  border: "1px solid",
                  borderRadius: "8px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Đã đặt
              </div>
            </StyleLi>
          </ul>
        </div>
      </BookingContainer>
      <div
        style={{
          color: "#fff",
        }}
      >
        <div>
          <h2>Thời gian giữ ghế: {formatTime(countdown)}</h2>
          <h1 style={{ margin: "150px 0 20px" }}>Tổng giá: {totalPrice} VNĐ</h1>
          <Space size={20}>
            <BookingButton
              onClick={onBooking}
              disabled={selectedSeats.length === 0}
            >
              Đặt vé
            </BookingButton>
            <Link
              style={{ color: "#fff", textDecoration: "none" }}
              to="/show-time/ho-chi-minh"
            >
              Quay lại
            </Link>
          </Space>
        </div>
      </div>
    </AreaBooking>
  );
};

export default BookingPage;
