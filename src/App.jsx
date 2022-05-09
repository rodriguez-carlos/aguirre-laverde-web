import React, { useState, useEffect } from 'react';
import { getServices } from './api';
import Router from './Router';
import DataContext from './context';

function App() {
  const [services, setServices] = useState();

  useEffect(() => {
    (async () => {
      const data = await getServices();
      setServices(data);
    })();
  }, []);

  return (
    <DataContext.Provider value={{
      services,
    }}>
      <Router />
    </DataContext.Provider>
  );
}

export default App;