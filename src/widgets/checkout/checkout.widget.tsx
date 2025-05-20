import { FormProvider } from 'react-hook-form';

import { useWatch } from 'react-hook-form';
import { useCheckoutForm } from './useCheckoutForm';
import { CheckoutHeader } from '../../features/checkout-header/checkout-header.component';
import { CheckoutFooter } from '../../features/checkout-footer/checkout-footer.component';
import { useGetBagProducts } from '../../services/bag-products/use-get-bag-products.services.hook';
import { BagProductList } from '../../features/bag-product-list/bag-product-list.component';
import { BagProductResponse } from '../../services/bag-products/bag-products.services.types';

export enum CheckoutStep {
  CART = 'cart',
  PAYMENT = 'payment',
  CONFIRMATION = 'confirmation',
}

const stepComponents: Record<CheckoutStep, React.FC<{bag: BagProductResponse}>> = {
  [CheckoutStep.CART]: BagProductList,
  [CheckoutStep.PAYMENT]: BagProductList,
  [CheckoutStep.CONFIRMATION]: BagProductList,
};

export const CheckoutWidget = () => {
  const form = useCheckoutForm();
  const step = useWatch({ control: form.control, name: 'step' });
  const { data } = useGetBagProducts()
  const StepComponent = stepComponents[step];
  console.log(data, "step")

  if(!data) return
  return (
    <FormProvider {...form}>
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <CheckoutHeader />
        <main className="flex-1 p-4"><StepComponent bag={data} /></main>
        <CheckoutFooter />
      </div>
    </FormProvider>
  );
};
