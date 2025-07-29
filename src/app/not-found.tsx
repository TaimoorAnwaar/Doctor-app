import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '0 auto', 
      textAlign: 'center', 
      padding: '4rem 2rem' 
    }}>
      <div style={{ fontSize: '6rem', color: '#007bff', marginBottom: '1rem' }}>
        404
      </div>
      <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link 
          href="/"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block'
          }}
        >
          Go Home
        </Link>
        <Link 
          href="/doctors"
          style={{
            backgroundColor: 'transparent',
            color: '#007bff',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: '5px',
            border: '1px solid #007bff',
            display: 'inline-block'
          }}
        >
          Browse Doctors
        </Link>
      </div>
    </div>
  );
} 