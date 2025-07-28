import doctors from '../../../data/doctors';
import Link from 'next/link';

export default function DoctorsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Our Doctors
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Find the right doctor for your needs
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {doctors.map((doctor) => (
          <div key={doctor.id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '10px', 
            padding: '1.5rem',
            backgroundColor: 'white'
          }}>
            <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '0.5rem' }}>
              {doctor.name}
            </h3>
            <p style={{ color: '#007bff', fontWeight: 'bold', marginBottom: '1rem' }}>
              {doctor.specialty}
            </p>
            <p style={{ color: '#666', marginBottom: '1.5rem' }}>
              {doctor.bio}
            </p>
            <Link 
              href={`/doctors/${doctor.id}`}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
                display: 'inline-block'
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          Can't find what you're looking for?
        </p>
        <Link 
          href="/contact"
          style={{ color: '#007bff', textDecoration: 'none' }}
        >
          Contact us for help
        </Link>
      </div>
    </div>
  );
} 