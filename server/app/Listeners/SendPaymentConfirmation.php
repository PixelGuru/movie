<?php

namespace App\Listeners;

use App\Events\PaymentSuccessful;
use App\Mail\PaymentConfirmation;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendPaymentConfirmation
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PaymentSuccessful $event): void
    {
        $order = $event->order;

        Mail::to($order->user_email)->send(new PaymentConfirmation($order));
    }
}
