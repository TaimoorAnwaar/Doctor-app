export default function ContactPage() {
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
          <form>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Full Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                placeholder="Enter your name"
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                placeholder="Enter your email"
                required
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Subject
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Question</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}>
                Message
              </label>
              <textarea
                rows={5}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Send Message
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
            <p style={{ color: '#666', margin: '0' }}>info@doctorapp.com</p>
            <p style={{ color: '#666', margin: '0' }}>support@doctorapp.com</p>
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
        </div>
      </div>
    </div>
  );
} 