import React, { useState, useEffect } from 'react';
import { getCarouselSlides, getServices, getServiceModels, getPartners } from './api';
import Router from './Router';
import DataContext from './context';

function App() {
  const [carouselSlides, setCarouselSlides] = useState();
  const [services, setServices] = useState();
  const [serviceModels, setServiceModels] = useState();
  const [partners, setPartners] = useState();

  useEffect(() => {
    (async () => {
      const data = await getCarouselSlides();
      setCarouselSlides(data);
    })();

    (async () => {
      const data = await getServices();
      setServices(data);
    })();

    (async () => {
      const data = await getServiceModels();
      setServiceModels(data);
    })();

    (async () => {
      const data = await getPartners();
      setPartners(data);
    })();
  }, []);

  return (
    <DataContext.Provider value={{
      carouselSlides,
      services,
      serviceModels,
      partners,
    }}>
      <Router />
    </DataContext.Provider>
  );
}

export default App;