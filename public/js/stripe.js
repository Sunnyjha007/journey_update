/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
import Stripe from 'stripe';
const stripe = Stripe(
  'pk_test_51NNZPeSHoSUFxdMGZCquDUvuqIAxwlrv9D1y7qyfrbdwwj1cLEdEDHMTC8GDLVjjPterPtLnc7PXBMrTSlCeAr7I00CDGHe3p3'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    //     await stripe.redirectToCheckout({
    //       sessionId: session.data.session.id
    //     });
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
