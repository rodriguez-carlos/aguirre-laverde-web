import { createContext, useContext } from 'react';

const DataContext = createContext({});

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
  console.log(partners)

  return partners ? partners.data : [];
}

export default DataContext;
export { useServices, useServiceModels, usePartners };