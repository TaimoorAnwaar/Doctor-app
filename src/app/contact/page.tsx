'use client';

import { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Contact Us
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>
        Get in touch with us for any questions
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Contact Form */}
        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1.5rem' }}>Send us a Message</h2>
          
          {submitStatus === 'success' && (
            <div style={{ 
              backgroundColor: '#d4edda', 
              color: '#155724', 
              padding: '1rem', 
              borderRadius: '5px', 
              marginBottom: '1rem',
              border: '1px solid #c3e6cb'
            }}>
              Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{ 
              backgroundColor: '#f8d7da', 
              color: '#721c24', 
              padding: '1rem', 
              borderRadius: '5px', 
              marginBottom: '1rem',
              border: '1px solid #f5c6cb'
            }}>
              Sorry! There was an error sending your message. Please try again.
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Subject *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                required
                disabled={isSubmitting}
              >
                <option value="">Select a subject</option>
                <option value="general">General Question</option>
                <option value="appointment">Appointment Booking</option>
                <option value="support">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  resize: 'vertical'
                }}
                placeholder="Enter your message"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? '#6c757d' : '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Sending Message...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div style={{ backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '10px', padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1.5rem' }}>Get in Touch</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Phone</h3>
            <p style={{ color: '#666', margin: '0' }}>+1 (555) 123-4567</p>
            <p style={{ color: '#666', margin: '0' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: '#666', margin: '0' }}>info@medicare.com</p>
            <p style={{ color: '#666', margin: '0' }}>support@medicare.com</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Address</h3>
            <p style={{ color: '#666', margin: '0' }}>123 Medical Center Drive</p>
            <p style={{ color: '#666', margin: '0' }}>Suite 100</p>
            <p style={{ color: '#666', margin: '0' }}>Healthcare City, HC 12345</p>
          </div>

          <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '5px' }}>
            <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Emergency</h3>
            <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>
              For medical emergencies, please call 911 or visit your nearest emergency room.
            </p>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#e7f3ff', borderRadius: '5px' }}>
            <h3 style={{ color: '#007bff', marginBottom: '0.5rem' }}>Response Time</h3>
            <p style={{ color: '#666', margin: '0', fontSize: '0.9rem' }}>
              We typically respond to inquiries within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 