import React from "react";

type Props = {
  inputValue: string;
  onInputChange: (val: string) => void;
  disabled: boolean;
};

const InputSection: React.FC<Props> = ({
  inputValue,
  onInputChange,
  disabled,
}) => {
  return (
    <div className="input-section">
      <input
        type="number"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        readOnly={disabled}
        placeholder="Enter your guess"
      />
    </div>
  );
};

export default InputSection;
