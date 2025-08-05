'use client';

import { useState, useEffect } from 'react';
import { apiClient, Appointment, CreateAppointmentData } from '@/lib/api';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newAppointment, setNewAppointment] = useState<CreateAppointmentData>({
    doctorId: '',
    date: '',
    time: '',
    reason: ''
  });

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      setIsLoading(true);
      const data = await apiClient.getAppointments();
      setAppointments(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load appointments');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await apiClient.createAppointment(newAppointment);
      setShowCreateForm(false);
      setNewAppointment({ doctorId: '', date: '', time: '', reason: '' });
      loadAppointments(); // Reload the list
    } catch (err: any) {
      setError(err.message || 'Failed to create appointment');
    }
  };

  const handleDeleteAppointment = async (id: string) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      try {
        await apiClient.deleteAppointment(id);
        loadAppointments(); // Reload the list
      } catch (err: any) {
        setError(err.message || 'Failed to delete appointment');
      }
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>Loading appointments...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#333' }}>My Appointments</h1>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          {showCreateForm ? 'Cancel' : 'New Appointment'}
        </button>
      </div>

      {error && (
        <div style={{
          backgroundColor: '#f8d7da',
          color: '#721c24',
          padding: '1rem',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      {showCreateForm && (
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '1.5rem',
          borderRadius: '10px',
          marginBottom: '2rem'
        }}>
          <h3 style={{ marginBottom: '1rem' }}>Create New Appointment</h3>
          <form onSubmit={handleCreateAppointment}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Doctor ID</label>
                <input
                  type="text"
                  value={newAppointment.doctorId}
                  onChange={(e) => setNewAppointment({...newAppointment, doctorId: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date</label>
                <input
                  type="date"
                  value={newAppointment.date}
                  onChange={(e) => setNewAppointment({...newAppointment, date: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Time</label>
                <input
                  type="time"
                  value={newAppointment.time}
                  onChange={(e) => setNewAppointment({...newAppointment, time: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Reason</label>
                <input
                  type="text"
                  value={newAppointment.reason}
                  onChange={(e) => setNewAppointment({...newAppointment, reason: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '5px'
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Create Appointment
            </button>
          </form>
        </div>
      )}

      {appointments.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>No appointments found.</p>
          <p style={{ color: '#999' }}>Create your first appointment to get started.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              style={{
                backgroundColor: 'white',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                border: '1px solid #eee'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', color: '#333' }}>
                    Appointment with Doctor {appointment.doctorId}
                  </h3>
                  <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
                  </p>
                  <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                    <strong>Time:</strong> {appointment.time}
                  </p>
                  {appointment.reason && (
                    <p style={{ color: '#666', marginBottom: '0.5rem' }}>
                      <strong>Reason:</strong> {appointment.reason}
                    </p>
                  )}
                  <span style={{
                    backgroundColor: appointment.status === 'confirmed' ? '#d4edda' : 
                                   appointment.status === 'cancelled' ? '#f8d7da' : '#fff3cd',
                    color: appointment.status === 'confirmed' ? '#155724' : 
                           appointment.status === 'cancelled' ? '#721c24' : '#856404',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    textTransform: 'capitalize'
                  }}>
                    {appointment.status}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteAppointment(appointment.id)}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '0.875rem'
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 