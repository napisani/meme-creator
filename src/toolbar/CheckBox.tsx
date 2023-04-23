import React from 'react';

type Props = {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};
export default function CheckBox({
  id,
  label,
  checked,
  onCheckedChange,
}: Props) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    onCheckedChange(event.target.checked);
  }

  return (
    <div className="input-container">
      <label htmlFor={id}>
        <input
          id={id}
          data-testid={id}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
