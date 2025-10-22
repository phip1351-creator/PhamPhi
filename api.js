const API_URL = 'http://localhost:3000';

export async function apiGet(endpoint) {
  const res = await axios.get(API_URL + endpoint);
  return res.data;
}

export async function apiPost(endpoint, data) {
  const res = await axios.post(API_URL + endpoint, data);
  return res.data;
}

export async function apiPut(endpoint, data) {
  const res = await axios.put(API_URL + endpoint, data);
  return res.data;
}

export async function apiDelete(endpoint) {
  const res = await axios.delete(API_URL + endpoint);
  return res.data;
}
