'use client';

import { useState, useEffect } from 'react';

export default function ZohoLeadForm() {
  const [formData, setFormData] = useState({
    Company: '',
    LastName: '',
    Phone: '',
    Email: '',
    LEADCF9: 'Basic- Web Package- $99/Month',
    LEADCF116: '',
    LEADCF11: '',
    LEADCF15: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const recaptchaScript = document.createElement('script');
    recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.body.appendChild(recaptchaScript);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append('xnQsjsdp', '6fad973824b63a3c72de7661d1670e660cea8cea8045d0b5a3f065b12d7bb578');
    data.append('xmIwtLD', '3b78cd23adce977394970e34a863d0dd25e81334df39beabb5f8dff8cf8750a2e7ad88c7228fd339fd55d887b889b3c7');
    data.append('actionType', 'TGVhZHM=');
    data.append('returnURL', 'null');
    data.append('Company', formData.Company);
    data.append('Last Name', formData.LastName);
    data.append('Phone', formData.Phone);
    data.append('Email', formData.Email);
    data.append('LEADCF9', formData.LEADCF9);
    data.append('LEADCF116', formData.LEADCF116);
    data.append('LEADCF11', formData.LEADCF11);
    data.append('LEADCF15', formData.LEADCF15);

    try {
      await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
        method: 'POST',
        body: data,
        mode: 'no-cors', // required to bypass CORS issues
      });

      alert('Form submitted successfully!');
      setFormData({
        Company: '',
        LastName: '',
        Phone: '',
        Email: '',
        LEADCF9: 'Basic- Web Package- $99/Month',
        LEADCF116: '',
        LEADCF11: '',
        LEADCF15: '',
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('There was an error submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Book a Demo</h2> */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input label="Company" name="Company" value={formData.Company} onChange={handleChange} required />
        <Input label="Full Name" name="LastName" value={formData.LastName} onChange={handleChange} required />
        <Input label="Mobile" name="Phone" value={formData.Phone} onChange={handleChange} required />
        <Input label="Email" name="Email" type="email" value={formData.Email} onChange={handleChange} required />
        <Select
          label="Package Type"
          name="LEADCF9"
          value={formData.LEADCF9}
          onChange={handleChange}
          options={[
            '-None-',
            'Basic- Web Package- $99/Month',
            'Standard- App Package- $149/Month',
            'Premuim- Custom Dispatch Package- $199/Month',
          ]}
          required
        />
        <Input label="Start Date" name="LEADCF116" type="date" value={formData.LEADCF116} onChange={handleChange} required />
        <Select
          label="How did you find us?"
          name="LEADCF11"
          required
          value={formData.LEADCF11}
          onChange={handleChange}
          options={['-None-', 'Google Search', 'Referral', 'Email Campaign', 'Other']}
        />
        <TextArea required label="Message" name="LEADCF15" value={formData.LEADCF15} onChange={handleChange} />

        {/* reCAPTCHA (for Zoho validation) */}
        <div className="g-recaptcha" data-sitekey="6LdM3F8nAAAAAFM4GEVABBiY3CbsLAiK-ivToqMW"></div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                Company: '',
                LastName: '',
                Phone: '',
                Email: '',
                LEADCF9: 'Basic- Web Package- $99/Month',
                LEADCF116: '',
                LEADCF11: '',
                LEADCF15: '',
              })
            }
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-md shadow"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

function Input({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2"
      >
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({ label, name, value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full border border-gray-300 rounded-md shadow-sm p-2"
        rows={4}
      ></textarea>
    </div>
  );
}
