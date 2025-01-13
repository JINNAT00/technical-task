import React, { useState } from 'react';
import FormRow from '../components/FormRow'; // Make sure this is correct
import { validateForm } from '../utils/validation'; // Import validate function

export default function Home() {
  const [rows, setRows] = useState([{ id: Date.now(), inputValue: '', selectValue: '' }]);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]); // To store submitted form data

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), inputValue: '', selectValue: '' }]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const handleInputChange = (updatedRow) => {
    const updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? updatedRow : row
    );
    setRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the entire form
    const formErrors = validateForm(rows);

    // If no errors, submit the form, else set the errors state
    if (Object.keys(formErrors).length === 0) {
      setSubmittedData(rows); // Save the rows data for display
      console.log('Form Submitted', rows);
    } else {
      setErrors(formErrors); // Set validation errors
    }
  };

  return (
    <div>
      <h1>Dynamic Form with Validation</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* Form Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {rows.map((row) => (
            <FormRow
              key={row.id}
              row={row}
              onRemove={() => handleRemoveRow(row.id)}
              onChange={handleInputChange}
              errors={errors[row.id]} // Pass errors for this specific row
            />
          ))}
        </div>

        {/* Add and Submit Buttons in a separate row below */}
        <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
        <button type="button" onClick={handleAddRow}>+</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display Submitted Data in Tabular Format */}
      {submittedData.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h3>Submitted Data</h3>
          <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Input Value</th>
                <th>Select Value</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((row) => (
                <tr key={row.id}>
                  <td>{row.inputValue}</td>
                  <td>{row.selectValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
