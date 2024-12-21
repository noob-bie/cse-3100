import { useEffect, useState } from 'react';

const contactus = [
  { name: 'Mohsin', ID: '8' },
  { name: 'Hassan', ID: '5' },
  { name: 'Nihal', ID: '2' },
];

export default function AboutUs() {
  return (
    <section className="text-left mt-5 container">
      <h2 className="text-primary mb-4">Our Mission</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="text-primary mt-5 mb-4">Our History</h2>
      <p className="text-muted">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
      </p>

      <h2 className="text-primary mt-5 mb-4">Our Team</h2>

      <div className="row mt-4">
        {contactus.map((member, index) => (
          <div key={index} className="col-md-4 text-center">
            <div
              className="team-card"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                padding: '20px',
                borderRadius: '10px',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
            >
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#007bff',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                {member.name.charAt(0).toUpperCase()}
              </div>
              <div className="mt-3">
                <h5 className="mb-1 text-dark">{member.name}</h5>
                <p className="mb-0 text-secondary">ID: {member.ID}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}
