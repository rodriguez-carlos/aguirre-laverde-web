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