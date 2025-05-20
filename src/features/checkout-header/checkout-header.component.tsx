import { useFormContext, useWatch } from "react-hook-form";
import { TabItem } from "../../ui/tab-item/tab-item.component";
import './checkout-header.css'

const steps: { key: any; label: string }[] = [
  { key: 'cart', label: 'Sacola' },
  { key: 'payment', label: 'Pagamento' },
  { key: 'confirmation', label: 'Confirmação' },
];

export const CheckoutHeader = () => {
  const { setValue } = useFormContext();
  const currentStep = useWatch({ name: 'step' });
  return (
    <header className="header">
      <div className="header-container">
        {steps.map(({ key, label }) => (
          <TabItem label={label} isCurrentTab={currentStep === key} onClick={() => setValue('step', key)} key={key} />
        ))}
      </div>
    </header>

  );
};
