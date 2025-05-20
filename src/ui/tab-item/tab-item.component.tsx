import clsx from 'clsx';
import './tab-item.css';

const steps: { key: any; label: string }[] = [
  { key: 'cart', label: 'Sacola' },
  { key: 'payment', label: 'Pagamento' },
  { key: 'confirmation', label: 'Confirmação' },
];

export const TabItem = ({ label, isCurrentTab, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx('stepItem', { active: isCurrentTab })}
    >
      {label}
    </button>

  );
};
