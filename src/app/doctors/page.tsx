'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
}

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique specialties for filter
  const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setIsLoading(true);
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Import doctors data
        const doctorsData = await import('../../../data/doctors');
        setDoctors(doctorsData.default);
        setFilteredDoctors(doctorsData.default);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    let filtered = doctors;

    // Filter by specialty
    if (selectedSpecialty) {
      filtered = filtered.filter(doctor => doctor.specialty === selectedSpecialty);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(doctor => 
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.bio.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [doctors, selectedSpecialty, searchTerm]);

  const clearFilters = () => {
    setSelectedSpecialty('');
    setSearchTerm('');
  };

  if (isLoading) {
    return (
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        textAlign: 'center', 
        padding: '4rem 2rem' 
      }}>
        <div style={{ fontSize: '1.5rem', color: '#666' }}>Loading doctors...</div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Our Doctors
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Find the right doctor for your needs
      </p>

      {/* Search and Filter Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '10px', 
        marginBottom: '2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '1rem', alignItems: 'end' }}>
          {/* Search Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
              Search Doctors
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, specialty, or bio..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            />
          </div>

          {/* Specialty Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333', fontWeight: 'bold' }}>
              Filter by Specialty
            </label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem'
              }}
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              padding: '0.75rem 1rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* Results Count */}
        <div style={{ marginTop: '1rem', color: '#666' }}>
          Showing {filteredDoctors.length} of {doctors.length} doctors
          {(selectedSpecialty || searchTerm) && (
            <span style={{ color: '#007bff' }}>
              {' '}(filtered)
            </span>
          )}
        </div>
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#666', marginBottom: '1rem' }}>No doctors found</h3>
          <p style={{ color: '#999', marginBottom: '2rem' }}>
            Try adjusting your search criteria or filters
          </p>
          <button
            onClick={clearFilters}
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '10px', 
              padding: '1.5rem',
              backgroundColor: 'white',
              width: '350px',
              flex: '0 0 auto',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s ease-in-out'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
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
                  display: 'inline-block',
                  transition: 'background-color 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0056b3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#007bff';
                }}
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}

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