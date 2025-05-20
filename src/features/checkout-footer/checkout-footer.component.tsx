import { useFormContext, useWatch } from 'react-hook-form';

export const CheckoutFooter = () => {
  const { setValue, handleSubmit } = useFormContext();
  const currentStep = useWatch({ name: 'step' });

  const handleNext = () => {
    if (currentStep === 'cart') return setValue('step', 'payment');
    if (currentStep === 'payment') return setValue('step', 'confirmation');
  };

  return (
    <footer className="p-4">
      {currentStep !== 'confirmation' && (
        <button
          className="w-full py-2 bg-purple-600 text-white rounded"
          onClick={handleSubmit(handleNext)}
        >
          {currentStep === 'cart' ? 'Seguir para pagamento' : 'Finalizar pedido'}
        </button>
      )}
    </footer>
  );
};
