// utils/validate.js

export const validateRow = (row) => {
    const errors = {};
  
    // Validate input value (required check)
    if (!row.inputValue) {
      errors.inputValue = 'This field is required';
    }
  
    // Validate select value (required check)
    if (!row.selectValue) {
      errors.selectValue = 'This field is required';
    }
  
    return errors;
  };
  
  export const validateForm = (rows) => {
    const formErrors = {};
    rows.forEach((row) => {
      const rowErrors = validateRow(row);
      if (Object.keys(rowErrors).length > 0) {
        formErrors[row.id] = rowErrors;
      }
    });
    return formErrors;
  };
  