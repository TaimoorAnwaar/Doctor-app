import doctors from '../../../../data/doctors';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface DoctorPageProps {
  params: {
    id: string;
  };
}

export default function DoctorPage({ params }: DoctorPageProps) {
  const doctor = doctors.find(d => d.id === params.id);

  if (!doctor) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/doctors"
          style={{ color: '#007bff', textDecoration: 'none' }}
        >
          ← Back to Doctors
        </Link>
      </div>

      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '2rem', backgroundColor: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '0.5rem' }}>
          {doctor.name}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#007bff', fontWeight: 'bold', marginBottom: '2rem' }}>
          {doctor.specialty}
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
            About Dr. {doctor.name.split(' ')[2]}
          </h2>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            {doctor.bio}
          </p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '1rem' }}>
            Contact Information
          </h3>
          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px' }}>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Phone:</strong> +1 (555) 123-4567
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Email:</strong> doctor@example.com
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Address:</strong> Medical Center, Suite 101
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
} 