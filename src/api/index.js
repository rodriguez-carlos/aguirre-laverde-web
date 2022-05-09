import axios from "axios";

const ApiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  params: {
    populate: '*',
  },
});

export async function getCarouselSlides() {
  const response = await ApiClient.get('/diapositivas');
  return response.data;
}

export async function getServices() {
  const response = await ApiClient.get('/servicios');
  return response.data;
}

export async function getServiceModels() {
  const response = await ApiClient.get('/servicio-modelos');
  return response.data;
}

export async function getPartners() {
  const response = await ApiClient.get('/socios');
  return response.data;
}

export async function getAboutPage() {
  const response = await ApiClient.get('/conocenos-pagina');
  return response.data;
}

export async function getServicesPage() {
  const response = await ApiClient.get('/que-hacemos-pagina');
  return response.data;
}

export default ApiClient;