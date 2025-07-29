export default function AuthLoading() {
  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      textAlign: 'center', 
      padding: '2rem',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '2rem', color: '#007bff', marginBottom: '1rem' }}>
        ⏳
      </div>
      <h2 style={{ color: '#333', marginBottom: '0.5rem' }}>
        Loading...
      </h2>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        Please wait while we process your request.
      </p>
    </div>
  );
} 