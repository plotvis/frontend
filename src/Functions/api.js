const API_URL = 'https://plotvis-api.herokuapp.com/';
const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export function apiGet(endpoint) {
  return fetch(`${API_URL}${endpoint}/`, {headers: HEADERS}).then((res) => res.json());
}

export function apiPost(endpoint, data = {}) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }

  return fetch(`${API_URL}${endpoint}/`, options).then((res) => res.json());
}
