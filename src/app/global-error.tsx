'use client';

import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto', 
          textAlign: 'center', 
          padding: '4rem 2rem',
          fontFamily: 'Arial, sans-serif'
        }}>
          <div style={{ fontSize: '6rem', color: '#dc3545', marginBottom: '1rem' }}>
            ⚠️
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>
            Something went wrong!
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
            We're sorry, but something unexpected happened. Please try again.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '1rem', 
              borderRadius: '5px', 
              marginBottom: '2rem',
              textAlign: 'left',
              fontFamily: 'monospace',
              fontSize: '0.9rem'
            }}>
              <strong>Error:</strong> {error.message}
              {error.digest && (
                <div style={{ marginTop: '0.5rem' }}>
                  <strong>Digest:</strong> {error.digest}
                </div>
              )}
            </div>
          )}
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={reset}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '12px 24px',
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
                backgroundColor: 'transparent',
                color: '#007bff',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '5px',
                border: '1px solid #007bff',
                fontSize: '1rem'
              }}
            >
              Go Home
            </Link>
          </div>
          
          <div style={{ marginTop: '3rem', color: '#999', fontSize: '0.9rem' }}>
            <p>If this problem persists, please contact our support team.</p>
            <Link 
              href="/contact"
              style={{ color: '#007bff', textDecoration: 'none' }}
            >
              Contact Support
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
} 