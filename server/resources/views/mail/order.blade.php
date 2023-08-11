<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Movie Ticket</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .ticket {
            width: 300px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .ticket-header {
            margin-bottom: 20px;
        }

        .ticket-header h1 {
            margin: 0;
            padding: 0;
            font-size: 24px;
            color: #333;
        }

        .ticket-details {
            margin-bottom: 30px;
            text-align: left;
        }

        .ticket-details p {
            margin: 5px 0;
            color: #666;
        }

        .ticket-qrcode {
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <h3>Your payment successfully processed.</h3>
    <div class="ticket">
        <div class="ticket-header">
            <h1>Movie Ticket</h1>
        </div>
        <div class="ticket-details">
            <p><strong>Ticket ID: {{ $order->order_id }}</strong></p>
            <p><strong>Cinema Name:</strong> {{ $order->cinema_name }}</p>
            <p><strong>Movie Name:</strong> {{ $order->movie_name }}</p>
            <p><strong>Selected Seats:</strong> {{ $order->selected_seats }}</p>
            <p><strong>Total Price:</strong> {{ number_format($order->total_price, 2, '.', ',') }} VND</p>
            <p><strong>Order Date:</strong> {{ $order->created_at }}</p>
        </div>
    </div>
    <p>Thank you for using our services!</p>
</body>

</html>
