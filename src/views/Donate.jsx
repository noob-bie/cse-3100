import { useEffect, useState } from 'react';

export default function Donate() {
  return (
    <section className="donate-section text-center mt-5 p-5 rounded shadow-lg bg-light">
      <h2 className="donate-heading text-primary mb-4">Support Our Cause</h2>
      <p className="donate-text fs-4 mb-3">
        Your donation can make a difference. We appreciate your generosity.
      </p>
      <div className="donate-details">
        <p className="fs-5 mb-3">
          <strong>Bkash:</strong> 0121515412
        </p>
        <p className="fs-5">
          <strong>Bank Account:</strong> 24514545
        </p>
      </div>
      <div className="donate-footer mt-4">
        <p className="fs-6 text-muted">Thank you for your support!</p>
      </div>
    </section>
  );

  
}
