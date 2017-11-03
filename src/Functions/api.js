import { getToken } from './UserManagement';
import { API_URL } from '../config.js';
// const API_URL = process.env.API_URL || 'http://localhost:8080/';

export function apiGet(endpoint) {
  const HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': getToken()
  };

  return fetch(`${API_URL}${endpoint}/`, {headers: HEADERS}).then((res) => res.json());
}

export function apiPost(endpoint, data = {}, contentType) {
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': getToken()
    },
    body: JSON.stringify(data)
  }

  return fetch(`${API_URL}${endpoint}/`, options).then((res) => res.json());
}

export function apiUpload(endpoint, data = {}, contentType) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/csv',
      'token': getToken()
    },
    body: data
  }

  return fetch(`${API_URL}${endpoint}/`, options).then((res) => res.json());
}
