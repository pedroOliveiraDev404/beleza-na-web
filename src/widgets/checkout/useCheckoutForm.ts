import { useForm } from 'react-hook-form';

export type CheckoutSteps = 'cart' | 'payment' | 'confirmation';

export const useCheckoutForm = () =>
  useForm({
    defaultValues: {
      step: 'cart' as CheckoutSteps,
      payment: {
         cardNumber: '',
      cardName: '',
      expiration: '',
      cvv: '',
      }
    },
  });
