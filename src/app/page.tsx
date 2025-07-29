import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Welcome to Medicare
      </h1>
      
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Find and connect with doctors in your area
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <Link 
          href="/doctors"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block',
            marginRight: '1rem'
          }}
        >
          View All Doctors
        </Link>
        
        <Link 
          href="/about"
          style={{
            backgroundColor: 'white',
            color: '#007bff',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '5px',
            border: '1px solid #007bff',
            display: 'inline-block'
          }}
        >
          About Us
        </Link>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '10px' }}>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>What We Offer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: '#007bff' }}>Find Doctors</h3>
            <p style={{ color: '#666' }}>Browse our list of qualified doctors</p>
          </div>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: '#007bff' }}>Easy Contact</h3>
            <p style={{ color: '#666' }}>Get in touch with doctors easily</p>
          </div>
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: '#007bff' }}>Simple Booking</h3>
            <p style={{ color: '#666' }}>Book appointments with just a few clicks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
