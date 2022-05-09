import React, { useState, useEffect } from 'react';
import { getServices, getServiceModels } from './api';
import Router from './Router';
import DataContext from './context';

function App() {
  const [services, setServices] = useState();
  const [serviceModels, setServiceModels] = useState();

  useEffect(() => {
    (async () => {
      const data = await getServices();
      setServices(data);
    })();

    (async () => {
      const data = await getServiceModels();
      setServiceModels(data);
    })();
  }, []);

  return (
    <DataContext.Provider value={{
      services,
      serviceModels,
    }}>
      <Router />
    </DataContext.Provider>
  );
}

export default App;