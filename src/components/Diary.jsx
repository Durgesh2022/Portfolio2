import React, { useState } from 'react';

const EmbeddedApp = () => {
  const [loadError, setLoadError] = useState(false);

  const handleError = () => {
    setLoadError(true);
  };

  return (
    <>
      {loadError ? (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <p>Failed to load the embedded app. Please check the URL or server configuration.</p>
        </div>
      ) : (
        <iframe
          src="https://book-animation-delta.vercel.app/?vercelToolbarCode=JUWyDu8kh8Fvcnj"
          title="Embedded App"
          style={{ width: '100%', height: '100vh', border: 'none' }}
          onError={handleError}
        />
      )}
    </>
  );
};

export default EmbeddedApp;
