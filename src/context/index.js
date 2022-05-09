import { createContext, useContext } from 'react';

const DataContext = createContext({});

function useServices() {
  const { services } = useContext(DataContext);
  console.log(services)

  return services ? services.data : [];
}

export default DataContext;
export { useServices };