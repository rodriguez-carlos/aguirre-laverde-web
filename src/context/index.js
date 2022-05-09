import { createContext, useContext } from 'react';

const DataContext = createContext({});

function useServices() {
  const { services } = useContext(DataContext);

  return services ? services.data : [];
}

function useServiceModels() {
  const { serviceModels } = useContext(DataContext);
  console.log(serviceModels)

  return serviceModels ? serviceModels.data : [];
}

export default DataContext;
export { useServices, useServiceModels };