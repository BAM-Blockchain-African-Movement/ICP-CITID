import React from 'react';

const SessionContext = React.createContext({
  id: null, // Initialize with null
  setId: () => {} // Placeholder for the setter function
});

export default SessionContext;