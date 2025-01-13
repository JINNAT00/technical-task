import React from 'react';

const FormRow = ({ row, onRemove, onChange, errors }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...row, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    onChange({ ...row, selectValue: value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <input
          type="text"
          name="inputValue"
          value={row.inputValue}
          placeholder="Enter text"
          onChange={handleInputChange}
        />
        {errors?.inputValue && (
          <p style={{ color: 'red', margin: '0' }}>{errors.inputValue}</p>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <select name="selectValue" value={row.selectValue} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {errors?.selectValue && (
          <p style={{ color: 'red', margin: '0' }}>{errors.selectValue}</p>
        )}
      </div>

      <button type="button" onClick={onRemove}>Delete</button>
    </div>
  );
};

export default FormRow;
