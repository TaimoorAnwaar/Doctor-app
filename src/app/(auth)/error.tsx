'use client';

import Link from 'next/link';

export default function AuthError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
      <div style={{ fontSize: '4rem', color: '#dc3545', marginBottom: '1rem' }}>
        🔐
      </div>
      <h1 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>
        Authentication Error
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        We encountered an issue with the authentication process. Please try again.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button
          onClick={reset}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '0.75rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Try Again
        </button>
        <Link 
          href="/"
          style={{
            color: '#007bff',
            textDecoration: 'none',
            fontSize: '0.9rem'
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
} 