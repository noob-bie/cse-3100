import { useEffect, useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Custom validation for each field
    if (name === 'name') {
      // Capitalize the first letter
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.replace(/^\w/, (c) => c.toUpperCase()),
      }));
    } else if (name === 'phone') {
      // Allow only numbers
      if (/^\d*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else if (name === 'email') {
      // Enforce lowercase, no spaces, and valid format
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.toLowerCase().replace(/\s/g, ''),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validation
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    console.log('Form Submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      phone: '',
      email: '',
    });
  };

  return (
    <section className="text-left mt-5 container">
      <h2 className="text-primary mb-4">Contact Us</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-4 p-4"
        style={{
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control shadow-sm"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={{ maxWidth: '500px' }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label fw-bold">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control shadow-sm"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            style={{ maxWidth: '400px' }}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control shadow-sm"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            style={{ maxWidth: '500px' }}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary px-4 py-2 shadow"
          style={{
            borderRadius: '25px',
            backgroundColor: '#007bff',
            fontSize: '1rem',
          }}
        >
          Submit
        </button>
      </form>

      <style jsx>{`
        form {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        form:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
