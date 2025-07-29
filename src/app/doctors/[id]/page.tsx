'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
}

export default function DoctorPage({ params }: { params: { id: string } }) {
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Import doctors data
        const doctorsData = await import('../../../../data/doctors');
        const foundDoctor = doctorsData.default.find((d: Doctor) => d.id === params.id);
        
        if (!foundDoctor) {
          setError('Doctor not found');
          return;
        }
        
        setDoctor(foundDoctor);
      } catch (err) {
        setError('Failed to load doctor information');
        console.error('Error fetching doctor:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctor();
  }, [params.id]);

  if (isLoading) {
    return (
      <div style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        textAlign: 'center', 
        padding: '4rem 2rem' 
      }}>
        <div style={{ fontSize: '1.5rem', color: '#666' }}>Loading doctor information...</div>
      </div>
    );
  }

  if (error || !doctor) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          href="/doctors"
          style={{ 
            color: '#007bff', 
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to Doctors
        </Link>
      </div>

      <div style={{ 
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        padding: '2rem', 
        backgroundColor: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
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
              <strong>Email:</strong> {doctor.name.toLowerCase().replace(' ', '.')}@medicare.com
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Address:</strong> Medical Center, Suite 101
            </p>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '1rem',
          marginBottom: '2rem' 
        }}>
          <button style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#218838';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#28a745';
          }}
          >
            Book Appointment
          </button>
          
          <Link 
            href="/contact"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              textAlign: 'center',
              transition: 'background-color 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0056b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
            }}
          >
            Contact Doctor
          </Link>
        </div>

        <div style={{ 
          backgroundColor: '#e7f3ff', 
          padding: '1rem', 
          borderRadius: '5px',
          border: '1px solid #b3d9ff'
        }}>
          <h4 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Important Note</h4>
          <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>
            For urgent medical concerns, please call 911 or visit your nearest emergency room. 
            This doctor's office is for non-emergency appointments only.
          </p>
        </div>
      </div>
    </div>
  );
} 