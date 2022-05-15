import { createContext, useContext } from 'react';

const DataContext = createContext({});

function useCarouselSlides() {
  const { carouselSlides } = useContext(DataContext);

  return carouselSlides ? carouselSlides.data.sort((a, b) => a.id - b.id) : [];
}

function useServices() {
  const { services } = useContext(DataContext);

  return services ? services.data.sort((a, b) => a.id - b.id) : [];
}

function useServiceModels() {
  const { serviceModels } = useContext(DataContext);

  return serviceModels ? serviceModels.data.sort((a, b) => a.id - b.id) : [];
}

function usePartners() {
  const { partners } = useContext(DataContext);

  return partners ? partners.data.sort((a, b) => a.id - b.id) : [];
}

function useAboutPage() {
  const { aboutPage } = useContext(DataContext);

  return aboutPage ? aboutPage.data : undefined;
}

function useServicesPage() {
  const { servicesPage } = useContext(DataContext);

  return servicesPage ? servicesPage.data : undefined;
}

export default DataContext;
export {
  useCarouselSlides,
  useServices,
  useServiceModels,
  usePartners,
  useAboutPage,
  useServicesPage,
};