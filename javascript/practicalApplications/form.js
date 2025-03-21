import React, { useState } from 'react';

const formFields = [
  { id: 'name', label: 'Name', type: 'text', required: true },
  { id: 'age', label: 'Age', type: 'number', required: true },
  { id: 'newsletter', label: 'Subscribe to newsletter', type: 'checkbox' },
  { id: 'dob', label: 'Date of Birth', type: 'date' },
];

const DynamicForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.id} className='form-group'>
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === 'text' || field.type === 'number' || field.type === 'date' ? (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              required={field.required}
              value={formData[field.id] || ''}
              onChange={handleChange}
            />
          ) : field.type === 'checkbox' ? (
            <input
              type='checkbox'
              id={field.id}
              name={field.id}
              checked={formData[field.id] || false}
              onChange={handleChange}
            />
          ) : null}
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
};

export default DynamicForm;
