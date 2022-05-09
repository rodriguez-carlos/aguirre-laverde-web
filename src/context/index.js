import { createContext, useContext } from 'react';

const DataContext = createContext({});

function useCarouselSlides() {
  const { carouselSlides } = useContext(DataContext);

  return carouselSlides ? carouselSlides.data : [];
}

function useServices() {
  const { services } = useContext(DataContext);

  return services ? services.data : [];
}

function useServiceModels() {
  const { serviceModels } = useContext(DataContext);

  return serviceModels ? serviceModels.data : [];
}

function usePartners() {
  const { partners } = useContext(DataContext);

  return partners ? partners.data : [];
}

export default DataContext;
export { useCarouselSlides, useServices, useServiceModels, usePartners };