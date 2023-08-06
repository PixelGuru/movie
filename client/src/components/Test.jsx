import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ticketId, setTicketId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [orderId, setOrderId] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [message, setMessage] = useState('');

  const handleOrder = async () => {
    try {
      const response = await axios.post(`/api/tickets/${ticketId}/order`, {
        quantity: quantity,
      });
      if (response.data.status === 'success') {
        setOrderId(response.data.order.id);
        setMessage('Order created successfully.');
      } else {
        setMessage('Failed to create order.');
      }
    } catch (error) {
      setMessage('Error creating order.');
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(`/api/orders/${orderId}/payment`, {
        payment_method: paymentMethod,
      });
      if (response.data.status === 'success') {
        setTransactionId(response.data.transaction.transaction_id);
        setMessage('Payment processed successfully.');
      } else {
        setMessage('Failed to process payment.');
      }
    } catch (error) {
      setMessage('Error processing payment.');
    }
  };

  const handleConfirmPayment = async () => {
    try {
      const response = await axios.post('/api/payment/confirm', {
        transaction_id: transactionId,
      });
      if (response.data.status === 'success') {
        setMessage('Payment confirmed successfully.');
      } else {
        setMessage('Failed to confirm payment.');
      }
    } catch (error) {
      setMessage('Error confirming payment.');
    }
  };

  return (
    <div>
      <h1>Movie Ticket Booking</h1>
      <div>
        <label>Ticket ID:</label>
        <input type="text" value={ticketId} onChange={(e) => setTicketId(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div>
        <button onClick={handleOrder}>Order Ticket</button>
      </div>
      <div>
        <label>Payment Method:</label>
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>
      <div>
        <button onClick={handlePayment}>Process Payment</button>
      </div>
      {transactionId && (
        <div>
          <label>Transaction ID:</label>
          <span>{transactionId}</span>
        </div>
      )}
      <div>
        <button onClick={handleConfirmPayment}>Confirm Payment</button>
      </div>
      {message && <div>{message}</div>}
    </div>
  );
};

export default App;
