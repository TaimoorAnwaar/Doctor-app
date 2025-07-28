export default function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        About Doctor App
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Simple and easy way to find doctors
      </p>

      <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333', marginBottom: '1rem' }}>Our Mission</h2>
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1rem' }}>
          We want to make it easy for people to find good doctors. Our app helps you connect 
          with doctors who can help you stay healthy.
        </p>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          We believe everyone should have access to quality healthcare. That's why we created 
          this simple platform to connect patients with doctors.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '1.5rem' }}>
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Find Doctors</h3>
          <p style={{ color: '#666' }}>
            Browse our list of qualified doctors in different specialties.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '1.5rem' }}>
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Easy Contact</h3>
          <p style={{ color: '#666' }}>
            Get in touch with doctors easily through our platform.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '1.5rem' }}>
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Simple Booking</h3>
          <p style={{ color: '#666' }}>
            Book appointments with just a few clicks.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '1.5rem' }}>
          <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Safe & Secure</h3>
          <p style={{ color: '#666' }}>
            Your information is protected and kept private.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '10px', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>Want to Join?</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
          Are you a doctor who wants to join our platform? Contact us!
        </p>
        <a 
          href="/contact"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block'
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
} 