import axios from "axios";

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    populate: '*',
  },
});

export async function getServices() {
  const response = await ApiClient.get('/servicios');
  return response.data;
}

export async function getServiceModels() {
  const response = await ApiClient.get('/servicio-modelos');
  return response.data;
}

export default ApiClient;